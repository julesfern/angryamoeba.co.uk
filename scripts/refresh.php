<? 
	chdir("..");
	$op = array();
	$status = -1;
	exec((getcwd()."/scripts/jekyll.sh"), $op, $status);
?>
<?=
	getcwd();
?>
<?
	foreach($op as $line) {
		echo($line);
		echo("<br />");
	}
	echo("Exited with status ".$status);
?>