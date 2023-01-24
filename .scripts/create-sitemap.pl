#!/usr/bin/perl -w

use strict;
use File::Basename;
use feature qw(fc);

my %pages;

open my $pages_txt, "_tmp/pages.txt" or die "Error opening _tmp/pages.txt";
while (my $filename = <$pages_txt>) {
    chomp $filename;
    open my $file, "$filename" or die "Error opening $filename";
    <$file>; # skip first line
    my %page_info;
    while (my $line = <$file>) {
        chomp $line;
        if ($line =~ /^(permalink|title|order):\s+(.*)$/) {
            $page_info{$1} = $2;
            $page_info{$1} =~ s/"//g;
        }
        if ($line =~ /^---/) {
            last;
        }
    }
    close $file;
    my $key = $page_info{permalink};
    $pages{$key}{title} = $page_info{title};
    $pages{$key}{permalink} = $page_info{permalink};
    $pages{$key}{path} = $filename;
    $pages{$key}{parent} = dirname($page_info{permalink})."/";
    $pages{$key}{parent} =~ s|//|/|g;
    if (not defined($page_info{order}) and $page_info{permalink} =~ /\/$/) {
        $page_info{order} = "/111" . (defined($page_info{order}) ? $page_info{order} : $page_info{permalink});
    }
    $pages{$key}{order} = defined($page_info{order}) ? $page_info{order} : $page_info{permalink};
}
close $pages_txt;

$pages{"/"}{title} = "SpacePirates";
$pages{"/"}{permalink} = "/";
$pages{"/"}{path} = "/";
$pages{"/"}{parent} = "";
$pages{"/"}{order} = "0";

open my $sitemap, ">assets/html/sitemap.html"  or die "Error opening _includes/sitemap.html";
my @flows = ();
sub print_sitemap {
    my $key = $_[0];
    push @flows, $key;
    my $id = $pages{$key}{permalink};
    $id =~ s/[^\w]/_/g;
    $id =~ s/__/_/g;
    print $sitemap "<li id=\"sitemap-$id\">";
    print $sitemap "<a href=\"#\" class=\"sm-expand\">&#xF4FD;</a>" if $key =~ /\/$/;
    print $sitemap "<a href=\"$pages{$key}{permalink}\" data-sort=\"$pages{$key}{order}\">$pages{$key}{title}</a>";
    print $sitemap "\n<ul>" if $key =~ /\/$/;
    for my $p (sort { fc($pages{$a}{order}) cmp fc($pages{$b}{order}) } keys %pages) {
        if ($pages{$p}{parent} eq $pages{$key}{permalink}) {
            print_sitemap($p);
        }
    }
    print $sitemap "</ul>\n" if $key =~ /\/$/;
    print $sitemap "</li>\n";
}

print $sitemap "<ul class=\"sitemap\">";
print_sitemap("/");
print $sitemap "</ul>";

close $sitemap;

open my $siteflow, ">_data/sitemap.json"  or die "Error opening _data/sitemap.json";
print $siteflow "{\n";
my $i = 0;
my $num_sites = scalar(@flows);
for my $key (@flows) {
    print $siteflow ",\n" if $i > 0;
    print $siteflow "\"$key\":{";
    if ($i eq 0) {
        print $siteflow "\"prev\":\"\",";
        print $siteflow "\"firstInDir\":true,";
    }
    else {
        print $siteflow "\"prev\":\"$flows[$i - 1]\",";
        if (dirname($key) eq dirname($flows[$i - 1])) {
            print $siteflow "\"firstInDir\":false,";
        }
        else {
            print $siteflow "\"firstInDir\":true,";
        }
    }
    if (($i + 1) eq $num_sites) {
        print $siteflow "\"next\":\"\",";
        print $siteflow "\"lastInDir\":true,";
    }
    else {
        print $siteflow "\"next\":\"$flows[$i + 1]\",";
        if (dirname($key) eq dirname($flows[$i + 1])) {
            print $siteflow "\"lastInDir\":false,";
        }
        else {
            print $siteflow "\"lastInDir\":true,";
        }
    }
    my $parent = dirname($key) . "/";
    if ($parent eq "//") {
        $parent = "/";
    }
    if ($parent eq $key) {
        $parent = "";
    }
    print $siteflow "\"parent\":\"$parent\",";
    print $siteflow "\"title\":\"$pages{$key}{title}\"";
    print $siteflow "}";
    $i++;
}
print $siteflow "}\n";
close $siteflow;

exit 0;
