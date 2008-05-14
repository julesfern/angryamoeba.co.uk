version=0
if (navigator.appVersion.indexOf("MSIE")!=-1){
	temp=navigator.appVersion.split("MSIE")
	version=parseFloat(temp[1])
}

if (version>=5.5 && version<=6.5) {
	// IE 5.5 (in case it works) and 6 (which is what we actually want to patch)
	document.write("<link href=\"/stylesheets/ie/ie_base.css\" media=\"screen\" rel=\"Stylesheet\" type=\"text/css\" />");
}