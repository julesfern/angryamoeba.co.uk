#!/bin/bash
echo "Running jekyll recompile in directory" `pwd` '<br />';
echo "Updating from git origin...<br />";
git pull
echo "Recompiling and highlighting with Jekyll...<br />";
jekyll --pygments ./_jekyll_singlecell ./singlecell
exit 0;