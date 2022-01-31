#!/usr/bin/perl -w
use strict;

$|++;

# globales
my @files = ();
my %keywords;

# first get all files to index
sub get_files {
    my $dirname = $_[0];
    opendir my $dh, $dirname or die "Error in opening dir $dirname\n";
    while (my $filename = readdir($dh)) {
        if ($filename =~ /^\./ or
            $filename =~ /.*~$/)
        {
            next;
        }
        if (-d $dirname."/".$filename) {
            get_files($dirname."/".$filename);
        }
        else {
            push @files, $dirname."/".$filename;
        }
    }
    closedir $dh;
}

get_files("Abenteuer");
get_files("Spielregeln");
get_files("Weltraum");

my $files_count = scalar @files;
print "Found $files_count files\n";

# manage keywords to index
my %ignorewords;
open my $ih, ".scripts/searchindex_ignorewords.txt" or die "Error opening .scripts/searchindex_ignorewords.txt";
while (my $word = <$ih>) {
    chomp($word);
    $ignorewords{$word} = 1;
}
close $ih;

my %stompkeys;
open my $sh, ".scripts/searchindex_stompkeys.txt" or die "Error opening .scripts/searchindex_stompkeys.txt";
while (my $line = <$sh>) {
    chomp($line);
    my ($key, $value) = split /:/,$line;
    $stompkeys{$key} = $value;
}
close $sh;

sub get_uri {
    my $uri = $_[0];
    $uri =~ s/\.md$//;
    $uri =~ s/_aside$//;
    $uri =~ s/index$//;
    return "/".$uri;
}

sub normalize {
    my $kw = lc($_[0]);
    $kw =~ s/Ü/ü/g;
    $kw =~ s/Ö/ö/g;
    $kw =~ s/Ä/ä/g;
    $kw =~ s/&ndash;//g;
    $kw =~ s/&dash;//g;
    $kw =~ s/&amp;//g;
    $kw =~ s/&bdquo;//g;
    $kw =~ s/&ldquo;//g;
    $kw =~ s/&raquo;//g;
    $kw =~ s/&acute;//g;
    $kw =~ s/&rsquo;//g;
    $kw =~ s/\[([^\]]+)\]\([^\)]+\)/$1/g;
    $kw =~ s/['`´",;\.\-\?\!\(\)\:\[\]\|\&\/]//g;
    $kw =~ s/\&nbsp;/ /g;
    $kw =~ s/\s+/ /g;
    $kw =~ s/^\s+//g;
    $kw =~ s/\s+$//g;
    $kw =~ s/<[^>]+>//g;
    return $kw;
}

sub remove_prefix {
    my $kw = $_[0];
    while ($kw =~ s/^\s*(aus|bis|zum|für|hinter|in|im|mehr|zu|nach|vor|dem|an|auf|der|die|das|ein|eine|\d+\.?)\s+//gi) {
        #replace all prefixes
    }
    return $kw;
}

sub add_keyword {
    my $kw = $_[0];
    if (length($kw) < 3 or
        $kw =~ /^[\d\.\-\:]+$/ or
        defined($ignorewords{$kw}) or
        $kw =~ /^\d+w\d+$/
    ) {
        return;
    }
    $keywords{$kw} = {};
}

sub add_keyphrase {
    my $kw = $_[0];
    my $full = $_[1];
    
    $kw = remove_prefix($kw);
    $kw = normalize($kw);
    my @kws = split /\s+/, $kw;
    
    # add full string
    if ($full eq "true") {
        add_keyword($kw);
        shift @kws;
    }
    # add single words
    for my $word (@kws) {
        add_keyword($word);
    }
}

# get keywords from files
for my $filename (@files) {
    open my $fh, $filename or die "Error opening file $filename\n";
    while (my $line = <$fh>) {
        if ($line =~ /^#+\s*(.+)\s*$/) {
            #titles
            add_keyphrase($1, "true");
            next;
        }
        while ($line =~ /\[([^\]]+)\]\([^\)]+\)/g) {
            #links
            add_keyphrase($1, "false");
        }
        while ($line =~ /<a href="[^"]+">([^<]+)<\/a>/g) {
            #links
            add_keyphrase($1, "false");
        }
    }
    close $fh;
}

# get keywords from _data
sub parse_data {
    my $filename = $_[0];
    open my $fh, $filename or die "Error opening file $filename\n";
    while (my $line = <$fh>) {
        if ($line =~ /[\{\}]/ or
            $line =~ /"(Link|Position|Beschreibung|Politisches)":/)
        {
            next;
        }
        if ($line =~ /"[^"]+":\s+"(.*)",?$/) {
            add_keyphrase($1, "true");
        }
    }
    close $fh;
}

opendir my $dh, "_data" or die "Error in opening dir _data\n";
while (my $filename = readdir($dh)) {
    if ($filename =~ /^\./) {
        next;
    }
    parse_data("_data/".$filename);
}
closedir $dh;

my $keywords_count = scalar keys %keywords;
print "Discovered $keywords_count keywords\n";

print "Indexing files";
# create index
for my $filename (@files) {
    print ".";
    open my $fh, $filename or die "Error opening file $filename\n";
    my $content = "";
    while (my $line = <$fh>) {
        my $inc = 1;
        if ($line =~ /^(#)+/) {
            my $c = length($1);
            $inc = 30 - ($c * 5);
        }
        $line = normalize($line);    
        for my $key (keys %keywords) {
            if ($line =~ /\b$key\b/) {
                if ($line =~ /^title $key$/) {
                    $inc = 50;
                }
                my $nkey = defined $stompkeys{$key} ? $stompkeys{$key} : $key;
                my $uri = get_uri($filename);
                if (defined $keywords{$nkey}{$uri}) {
                    $keywords{$nkey}{$uri}+= $inc;
                }
                else {
                    $keywords{$nkey}{$uri} = $inc;
                }
            }
        }
    }
    close $fh;
}
print "\n";

#write json searchindex
open my $out, ">_data/searchindex.json";
print $out "{\n";
my $i = 0;
for my $key (sort keys %keywords) {
    if (scalar keys %{$keywords{$key}} eq 0) {
        # skip keywords with no sites
        next;
    }
    if ($i++) {
        print $out ",\n";
    }
    print $out "\t\"$key\": {\n";
    my $j = 0;
    for my $site (sort { $keywords{$key}{$b} <=> $keywords{$key}{$a} or $a cmp $b } keys %{$keywords{$key}}) {
        if ($j++) {
            print $out ",\n";
        }
        
        print $out "\t\t\"$site\": $keywords{$key}{$site}";
        if ($j ge 20 and $keywords{$key}{$site} eq 1) {
            last;
        }
    }
    print $out "\n\t}";
}
print $out "\n}\n";
close $out;

print "$i keywords in searchindex\n";
