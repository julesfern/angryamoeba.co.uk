#!/bin/bash
echo "Running jekyll recompile in directory" `pwd` '<br />';
echo "Updating from git origin...<br />";

cd `pwd` && git pull;

echo "Recompiling and highlighting with Jekyll...<br />";

jekyll --pygments "`pwd`/_jekyll_singlecell" "`pwd`/singlecell"

exit 0;