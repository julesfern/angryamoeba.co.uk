<? 
	chdir("..");
	$op = array();
	$status = -1;
	exec((getcwd()."/scripts/jekyll.sh"), $op, $status);
?>
<?
	foreach($op as $line) {
		echo($line);
		echo("<br />");
	}
	echo("Exited with status ".$status);
?>