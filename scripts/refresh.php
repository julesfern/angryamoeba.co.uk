<? 
	chdir("..");
	$op = -1;
	$script = (getcwd()."/scripts/jekyll.sh");
	echo("executing ".$script."<br />");
	passthru($script, $op);
?>

Exited with status <?= $op ?>