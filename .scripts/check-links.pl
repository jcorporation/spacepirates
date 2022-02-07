#!/usr/bin/perl -w
use strict;

my $checkfile = $ARGV[0];
my $rc = 0;

sub checklink {
    my ($href, $line) = @_;

    if ($href =~ /^(http|mailto)/) {
        return;
    }
    if ($href =~ /^\{\{ site\.baseurl \}\}\/(.*)$/) {
        my $file = $1;
        if ($file =~ /\/$/) {
            $file .= "index";
        }
        if (not $file =~ /\.(pdf|png|jpg|svg)$/) {
            $file .= ".md";
        }
        if (not -f $file) {
            print "$checkfile:$line - Invalid link: \"$file\" (file not found)\n";
            $rc = 1;
        }
    }
    else {
        print "$checkfile:$line - Invalid link: \"$href\" (missing {{ site.baseurl }}/)\n";
        $rc = 1;
    }
}

open my $fh, $checkfile or die "Error opening file $checkfile";
my $line = 0;
while (<$fh>) {
    $line++;
    while (/<a href="([^"]+)"/g) {
        checklink($1, $line);
    }
    while (/\[[^\]]+\]\(([^)]+)\)/g) {
        checklink($1, $line);
    }
    while (/src="([^"]+)"/g) {
        checklink($1, $line);
    }
    while (/image="([^"]+)"/g) {
        checklink("{{ site.baseurl }}/assets/images".$1, $line);
    }
    while (/link="([^"]+)"/g) {
        checklink("{{ site.baseurl }}".$1, $line);
    }
}
close $fh;

exit $rc;
