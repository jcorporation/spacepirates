#!/usr/bin/perl -w
use strict;

my $out = "";
my $type = "";
while (<STDIN>) {
    if (/<table data-type="(\w+)">/) {
        $type = $1;
        $out.= "    ".ucfirst($type).":\n";
    }
    elsif (/<caption>([^<]+)<\/caption>/) {
        my $name = $1;
        my $key = $1;
        $key =~ s/\s+/_/g;
        $out.= "        ".$key.":\n";
        $out.= "            Name: \"$name\"\n";
    }
    elsif (/<tr><th>([^<]+)<\/th><td>([^<]+)<\/td><\/tr>/) {
        my $key = $1;
        my $value = $2;
        if ($key eq "Erwähnungen") { next; }
        if ($value =~ /\[([^\]]+)\]/) {
            $value = $1;
        }
        $out.= "            ".$key.": \"$value\"\n";
    }
}
if ($type eq "slc") {
    $out.= "            Position: \"\"\n";
}
print "\n\n".$out;
