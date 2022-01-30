#!/usr/bin/perl -w
use strict;

# globales
my @files = ();
my %keywords;

# first get all files to index
sub get_files {
    my $dirname = $_[0];
    my $callback = $_[1];
    opendir my $dh, $dirname or die "Error in opening dir $dirname\n";
    while (my $filename = readdir($dh)) {
        if ($filename =~ /^\./) {
            next;
        }
        if ( -d $dirname."/".$filename) {
            get_files($dirname."/".$filename);
        }
        else {
            push @files, $dirname."/".$filename;
        }
    }
    closedir $dh;
}

#get_files("Abenteuer");
#get_files("Spielregeln");
get_files("Weltraum");

# manage keywords to index
my %ignorewords;
for my $word (("eines", "für", "index", "der", "die", "das", "ein", "eine", "des", "weitere",
    "und", "oder", "auf", "bei", "dem", "den", "einem", "einer", "einen", "ist", "nach", "sie",
    "vom", "von", "vor", "was", "wer", "wie", "wird", "zum", "zur", "mit", "über", "als", "ihre",
    "viele", "große", "großes", "kleine", "klein", "städte", "keine", "neu", "benötigt", "werden",
    "and", "aus"
    )
 ) {
     $ignorewords{$word} = 1;
 }

sub normalize {
    my $kw = lc($_[0]);
    $kw =~ s/Ü/ü/g;
    $kw =~ s/Ö/ö/g;
    $kw =~ s/Ä/ä/g;
    $kw =~ s/&ndash;/\-/g;
    $kw =~ s/&dash;/\-/g;
    $kw =~ s/&amp;/\&/g;
    $kw =~ s/&bdquo;//g;
    $kw =~ s/&ldquo;//g;
    $kw =~ s/&raquo;//g;
    $kw =~ s/&acute;//g;
    $kw =~ s/\[([^\]]+)\]\([^\)]+\)/$1/g;
    $kw =~ s/[",;\.\-\?\!\(\)\:\[\]]//g;
    $kw =~ s/\&nbsp;/ /g;
    $kw =~ s/\s+/ /g;
    $kw =~ s/^\s+//;
    $kw =~ s/\s+$//;
    $kw =~ s/<[^>]+>//g;
    return $kw;
}

sub add_keyword {
    my $kw = $_[0];
    if (length($kw) < 3 ||
        $kw =~ /^[\d\.\-\:]+$/ ||
        defined($ignorewords{$kw})
    ) {
        return;
    }
    $keywords{$kw} = {};
}

sub add_keyphrase {
    my $kw = normalize($_[0]);
    if (length($kw) < 15) {
        # add full string
        add_keyword($kw);
    }
    # add single words except first
    my @kws = split /\s+/, $kw;
    if (length($kw) < 15) {
        shift @kws;
    }
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
            add_keyphrase($1);
            next;
        }
        while ($line =~ /\[([^\]]+)\]\([^\)]+\)/g) {
            #links
            add_keyphrase($1);
        }
        while ($line =~ /<a href="[^"]+">([^<]+)<\/a>/g) {
            #links
            add_keyphrase($1);
        }
    }
    close $fh;
}

# get keywords from _data
sub parse_data {
    my $filename = $_[0];
    open my $fh, $filename or die "Error opening file $filename\n";
    while (my $line = <$fh>) {
        if ($line =~ /[\{\}]/ ||
            $line =~ /"(Link|Position|Beschreibung|Politisches)":/)
        {
            next;
        }
        if ($line =~ /"[^"]+":\s+"(.*)",?$/) {
            add_keyphrase($1);
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

# create index
for my $filename (@files) {
    open my $fh, $filename or die "Error opening file $filename\n";
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
                if (defined $keywords{$key}{$filename}) {
                    $keywords{$key}{$filename}+= $inc;
                }
                else {
                    $keywords{$key}{$filename} = $inc;
                }
            }
        }
    }
    close $fh;
}

open my $out, ">_data/searchindex.json";
print $out "{\n";
my $i = 0;
for my $key (sort keys %keywords){
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
    }
    print $out "}";
}
print $out "}\n";
close $out;
