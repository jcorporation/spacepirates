#!/usr/bin/perl -w
use strict;

$|++;

# globales
my @files = ();
my %keywords;
my ($fh, $dh, $oh); #filehandlers
my ($i, $j); #inc variables

# log
my $debug = $ENV{'DEBUG'};

sub _log {
    print $_[0]."\n" if defined($debug);
}

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

# get files to index
if (defined $ARGV[0]) {
    push @files, $ARGV[0];
}
else {
    open my $dh, ".scripts/searchindex_dirs.txt" or die "Error opening .scripts/searchindex_dirs.txt";
    while (my $dir = <$dh>) {
        chomp($dir);
        print "Adding $dir to index\n";
        get_files($dir);
    }
close $dh;
}

my $files_count = scalar @files;
print "Found $files_count files\n";

# manage keywords to index
my %ignorewords;
open $fh, ".scripts/searchindex_ignorewords.txt" or die "Error opening .scripts/searchindex_ignorewords.txt";
while (my $word = <$fh>) {
    chomp($word);
    $ignorewords{$word} = 1;
}
close $fh;

my %stompkeys;
open $fh, ".scripts/searchindex_stompkeys.txt" or die "Error opening .scripts/searchindex_stompkeys.txt";
open $oh, ">_data/searchindex_stompkeys.json" or die "Error opening _data/searchindex_stompkeys.txt";
print $oh "{\n";
$i = 0;
while (my $line = <$fh>) {
    chomp($line);
    if ($i++) {
        print $oh ",\n";
    }
    my ($key, $value) = split /\s*:\s*/,$line;
    $stompkeys{$key} = $value;
    print $oh "  \"$key\": \"$value\"";
}
print $oh "\n}\n";
close $fh;
close $oh;

sub get_uri {
    my $uri = $_[0];
    $uri =~ s/\.md$//;
    $uri =~ s/_aside$//;
    $uri =~ s/index$//;
    return "/".$uri;
}

sub normalize {
    my $kw = lc($_[0]);
    # german umlauts
    $kw =~ s/Ü/ü/g;
    $kw =~ s/Ö/ö/g;
    $kw =~ s/Ä/ä/g;
    # html escapes
    $kw =~ s/&ndash;//g;
    $kw =~ s/&dash;//g;
    $kw =~ s/&amp;//g;
    $kw =~ s/&bdquo;//g;
    $kw =~ s/&ldquo;//g;
    $kw =~ s/&raquo;//g;
    $kw =~ s/&acute;//g;
    $kw =~ s/&rsquo;//g;
    # html tags
    $kw =~ s/<[^>]+>//g;
    # markdown links
    $kw =~ s/\[([^\]]+)\]\([^\)]+\)/$1/g;
    # special chars
    $kw =~ s/['`´",;\.\-\?\!\(\)\:\[\]\|\&\/#–„“]//g;
    # whitspaces
    $kw =~ s/\&nbsp;/ /g;
    $kw =~ s/\s+/ /g;
    $kw =~ s/^\s+//g;
    $kw =~ s/\s+$//g;
    return $kw;
}

sub remove_prefix {
    my $kw = $_[0];
    while ($kw =~ s/^\s*(aus|bis|zum|für|hinter|in|im|mehr|zu|nach|vor|dem|an|auf|der|die|das|ein|eine|\d+\.?)\s+//gi) {
        # replace all prefixes
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

    if ($kw =~ /^\s*$/ or
        $kw eq "-")
    {
        return;
    }

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
    my $line = <$fh>;
    chomp $line;
    # check frontmatter
    if ($line eq "---") {
        # parse frontmatter
        _log("Start of frontmatter");
        my $key = "";
        my $value = "";
        while ($line = <$fh>) {
            chomp($line);
            if ($line eq "---") {
                # frontmatter end
                _log("End of frontmatter");
                last;
            }
            if ($line =~ /\s*([^:]+):\s+(.+)$/) {
                # simple key / value
                $key = $1;
                $value = normalize($2);
            }
            elsif ($line =~ /\s*([^:]+):\s*$/) {
                # array key
                $key = $1;
                $value = "";
            }
            elsif ($line =~ /^\s+-\s+(.*)$/) {
                # array value
                $value = $1;
            }
            else {
                # ignore blank lines
                $value = "";
            }
            if ($key =~ /^(keywords|title)$/ and $value ne "") {
                _log("Add keyphrase from \"$key\": \"$value\"");
                add_keyphrase($value, "true");
            }
        }
    }
    else {
        # no frontmatter: reopen to parse first line as content
        _log("No frontmatter found");
        close $fh;
        open $fh, $filename or die "Error opening file $filename\n";
    }    
    while ($line = <$fh>) {
        #Todo: add keywords from frontmatter
        if ($line =~ /^#+\s*(.+)\s*$/) {
            # titles
            _log("Add keyphrase from \"heading\": \"$1\"");
            add_keyphrase($1, "true");
            next;
        }
        while ($line =~ /\[([^\]]+)\]\([^\)]+\)/g) {
            # links
            _log("Add keyphrase from \"link\": \"$1\"");
            add_keyphrase($1, "false");
        }
        while ($line =~ /<a href="[^"]+">([^<]+)<\/a>/g) {
            # links
            _log("Add keyphrase from \"link\": \"$1\"");
            add_keyphrase($1, "false");
        }
    }
    close $fh;
}

# read json keys from which we grab keywords from _data files
my %datakeywords;
open $fh, ".scripts/searchindex_datakeywords.txt";
while (my $line = <$fh>) {
    chomp($line);
    $datakeywords{$line} = 1;
}
close $fh;

# parses json files in the _data directory
sub parse_data {
    my $filename = $_[0];
    open my $fh, $filename or die "Error opening file $filename\n";
    while (my $line = <$fh>) {
        chomp($line);
        if ($line =~ /"([^"]+)":\s+"(.*)",?$/) {
            # key / value pair
            if (defined $datakeywords{$1}) {
                add_keyphrase($2, "true");
            }
        }
        elsif ($line =~ /"([^"]+)":\s+\[$/) {
            if (defined $datakeywords{$1}) {
                # start of array
                while ($line = <$fh>) {
                    chomp($line);
                    if ($line =~ /\],$/) {
                        # end of array
                        last;
                    }
                    if ($line =~ /\s*"(.*)",?$/) {
                        # array value
                        add_keyphrase($1, "true");
                    }
                }
            }
        }
    }
    close $fh;
}

# get keywords from _data
opendir $dh, "_data" or die "Error in opening dir _data\n";
while (my $filename = readdir($dh)) {
    if ($filename =~ /^\./) {
        next;
    }
    parse_data("_data/".$filename);
}
closedir $dh;

# discovering keywords finished
my $keywords_count = scalar keys %keywords;
print "Discovered $keywords_count keywords\n";

print "Indexing files\n";
# add uri to index
sub add_uri {
    my $key = $_[0];
    my $inc = $_[1];
    my $filename = $_[2];

    my $nkey = defined $stompkeys{$key} ? $stompkeys{$key} : $key;
    if (defined($debug)) {
        if ($nkey ne $key) {
            _log("Stomped keyword from \"$key\" to \"$nkey\"");
        }
    }
    my $uri = get_uri($filename);
    if (defined $keywords{$nkey}{$uri}) {
        $keywords{$nkey}{$uri}+= $inc;
    }
    else {
        $keywords{$nkey}{$uri} = $inc;
    }
}

# searches the frontmatter value for keywords
sub parse_value {
    my $key = $_[0];
    my $value = $_[1];
    my $filename = $_[2];
    # default score for frontmatter
    my $inc = 1;
    for my $keyword (keys %keywords) {
        if ($keyword eq $value) {
            #exact match
            $inc = 10;
            if ($key eq "title") {
                $inc = 100;
            }
            elsif ($key eq "keywords") {
                $inc = 150;
            }
            _log("\"$key\" eq \"$keyword\": inc $inc");
            add_uri($keyword, $inc, $filename);
        }
        elsif ($value =~ /\b$keyword\b/) {
            if ($key eq "title") {
                _log("\"$key\" eq \"$keyword\": inc 200");
                $inc = 50;
            }
            elsif ($key eq "keywords") {
                $inc = 75;
            }
            _log("\"$key\" matches \"$keyword\": inc $inc");
            add_uri($keyword, $inc, $filename);
        }
    }
}

#index files
for my $filename (@files) {
    open $fh, $filename or die "Error opening file $filename\n";
    if (defined($debug)) {
        _log("Parsing \"$filename\"");
    }
    else {
        print ".";
    }
    my $line = <$fh>;
    chomp $line;
    # check frontmatter
    if ($line eq "---") {
        # parse frontmatter
        _log("Start of frontmatter");
        my $key = "";
        my $value = "";
        while ($line = <$fh>) {
            chomp($line);
            if ($line eq "---") {
                # frontmatter end
                _log("End of frontmatter");
                last;
            }
            if ($line =~ /\s*([^:]+):\s+(.+)$/) {
                # simple key / value
                $key = $1;
                $value = normalize($2);
            }
            elsif ($line =~ /\s*([^:]+):\s*$/) {
                # array key
                $key = $1;
                $value = "";
            }
            elsif ($line =~ /^\s+-\s+(.*)$/) {
                # array value
                $value = $1;
            }
            else {
                # ignore blank lines
                $value = "";
            }
            if ($key ne "" and $value ne "") {
                parse_value($key, $value, $filename);
            }
        }
    }
    else {
        # no frontmatter: reopen to parse first line as content
        _log("No frontmatter found");
        close $fh;
        open $fh, $filename or die "Error opening file $filename\n";
    }
    _log("Parse content");
    # parse content
    while ($line = <$fh>) {
        chomp $line;
        # default score for content
        my $inc = 1;
        if ($line =~ /^(#)+/) {
            # increase score for headings
            my $c = length($1);
            $inc = 30 - ($c * 5);
        }
        $line = normalize($line);
        for my $keyword (keys %keywords) {
            if ($line =~ /\b$keyword\b/) {
                _log("Matched \"$keyword\": inc $inc");
                add_uri($keyword, $inc, $filename);
            }
        }
    }
    close $fh;
}
print "\n";

#write json searchindex
open $oh, ">_data/searchindex.json";
print $oh "{\n";
$i = 0;
for my $keyword (sort keys %keywords) {
    if (scalar keys %{$keywords{$keyword}} eq 0) {
        # skip keywords with no sites
        next;
    }
    if ($i++) {
        print $oh ",\n";
    }
    print $oh "  \"$keyword\": {\n";
    $j = 0;
    # sort by value
    for my $site (sort { $keywords{$keyword}{$b} <=> $keywords{$keyword}{$a} or $a cmp $b } keys %{$keywords{$keyword}}) {
        if ($j++) {
            print $oh ",\n";
        }
        print $oh "    \"$site\": $keywords{$keyword}{$site}";
        if ($j ge 20 and $keywords{$keyword}{$site} eq 1) {
            # limit keyword results to 20 sites
            last;
        }
    }
    print $oh "\n  }";
}
print $oh "\n}\n";
close $oh;

print "$i keywords in searchindex\n";
