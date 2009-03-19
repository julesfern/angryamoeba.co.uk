<? 
	chdir("..");
	$op = -1;
	$script = ("./scripts/jekyll.sh");
	echo("executing ".$script." in working directory ".getcwd()."<br />");
	passthru($script, $op);
?>

Exited with status <?= $op ?>