#!/usr/bin/perl -w
use strict;

my $out = "sitedata:\n";
my $type = "";
while (<STDIN>) {
    if (/<table data-type="(\w+)">/) {
        $type = $1;
        if ($type eq "konzern") { $type = "konzerne"; }
        elsif ($type eq "organisation") { $type = "organisationen"; }
        elsif ($type eq "planet") { $type = "planeten"; }
        elsif ($type eq "rasse") { $type = "rassen"; }
        elsif ($type eq "raumstation") { $type = "raumstationen"; }
        elsif ($type eq "sektor") { $type = "sektoren"; }
        elsif ($type eq "stadt") { $type = "staedte"; }
        elsif ($type eq "sternensystem") { $type = "sternensysteme"; }
        elsif ($type eq "phänomen") { $type = "weltraumphaenomen"; }
        elsif ($type eq "weltraumtier") { $type = "weltraumtiere"; }
        $out.= "    ".ucfirst($type).":\n";
    }
    elsif (/<caption>([^<]+)<\/caption>/) {
        my $name = $1;
        my $key = $1;
        $key =~ s/[\s\.]/_/g;
        $out.= "        ".$key.":\n";
        $out.= "            Name: \"$name\"\n";
    }
    elsif (/<tr><th>([^<]+)<\/th><td>([^<]+)<\/td><\/tr>/) {
        my $key = $1;
        my $value = $2;
        if ($key eq "Erwähnungen") { next; }
        $key =~ s/Ä/AE/g;
        $key =~ s/Ö/OE/g;
        $key =~ s/Ü/UE/g;
        $key =~ s/ä/ae/g;
        $key =~ s/ö/oe/g;
        $key =~ s/ü/ue/g;
        $key =~ s/ß/ss/g;
        $value =~ s/\[([^\]]+)\]\([^\)]+\)/$1/g;
        $value =~ s/^\s+$//;
        $out.= "            ".$key.": \"$value\"\n";
    }
}
if ($type eq "slc") {
    $out.= "            Position: \"\"\n";
}
print "\n\n".$out;
