<? 
	header("Expires: 0"); 
	header("Last-Modified: " . gmdate("D, d M Y H:i:s") . " GMT"); 
	header("cache-control: no-store, no-cache, must-revalidate"); 
	header("Pragma: no-cache");
?>

<? 
	
	ob_start(); 

	chdir("..");
	$script = "git pull && jekyll --pygments --lsi ./_jekyll_singlecell ./singlecell";
	
	echo("executing ".$script." in working directory ".getcwd()."<br />");
	passthru($script);
	
	$text = ob_get_contents(); 
	ob_end_clean();
?>

<code>
	<?= $text ?>
</code>