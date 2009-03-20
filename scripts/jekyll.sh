#!/bin/bash

echo "Updating from git origin...<br />";

git pull > last_pull
sleep 20
echo "`cat last_pull` <br />"

echo "Git pull completed, recompiling jekyll <br />"

echo "" > last_jekyll
jekyll --pygments "`pwd`/_jekyll_singlecell" "`pwd`/singlecell" > last_jekyll
sleep 10
echo "`cat last_jekyll`<br />"

exit 0;