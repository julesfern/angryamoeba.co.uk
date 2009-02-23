var disqus_href = window.location.href;
var disqus_date = new Date();
var disqus_hashIndex = disqus_href.indexOf('#');
if(disqus_hashIndex != -1) {
	disqus_href = disqus_href.substring(0, disqus_hashIndex);
}

var disqus_script = document.createElement('script');
if(typeof(disqus_url) == 'undefined') {
	if(disqus_href.indexOf(".dev") > 0) {
		// Development mode
		disqus_url = "http://www.angryamoeba.co.uk/singlecell/test-page";
		disqus_developer = 1;
	} else {
		disqus_url = disqus_href;
	}
}
if(typeof(disqus_title) == 'undefined') {
	disqus_title = '';
}
if(typeof(disqus_message) == 'undefined') {
	disqus_message = '';
} else {
	var disqus_isUTF8 = false;
	if(/msie/i.test(navigator.userAgent) && !/opera/i.test(navigator.userAgent)) { // if IE
		for(var i=0; i<disqus_message.length; i++) {
			if(disqus_message.charCodeAt(i) > 256) {
				disqus_isUTF8 = true;
				break;
			}
		}
	}

	

	if(disqus_isUTF8) {
		disqus_message = '';
	} else {
		if(disqus_message.length > 400) {
			disqus_message = disqus_message.substring(0, disqus_message.indexOf(' ', 350));
		}
	}
}
if(typeof(disqus_sort) == 'undefined') {
	disqus_sort = '';
}
if(typeof(disqus_container_id) == 'undefined') {
	disqus_container_id = 'disqus_thread';
}
if(typeof(disqus_category_id) == 'undefined') {
	disqus_category_id = '';
}
if(typeof(disqus_developer) == 'undefined') {
	disqus_developer = '';
}
if(typeof(disqus_iframe_css) == 'undefined') {
	disqus_iframe_css = '';
}
if(typeof(disqus_identifier) == 'undefined') {
	disqus_identifier = '';
}
if(typeof(disqus_def_email) == 'undefined') {
	disqus_def_email = '';
}
if(typeof(disqus_def_name) == 'undefined') {
	disqus_def_name = '';
}


disqus_script.type = 'text/javascript';
disqus_script.src = 'http://disqus.com/forums/singlecell/thread.js'
	+ '?url='			+ encodeURIComponent(disqus_url)
	+ '&message='		+ encodeURIComponent(disqus_message)
	+ '&title=' 		+ encodeURIComponent(disqus_title)
	+ '&sort='			+ encodeURIComponent(disqus_sort)
	+ '&category_id='	+ encodeURIComponent(disqus_category_id)
	+ '&developer='		+ encodeURIComponent(disqus_developer)
	+ '&ifrs='			+ encodeURIComponent(disqus_iframe_css)
	+ '&identifier='	+ encodeURIComponent(disqus_identifier)
	+ '&def_email='		+ encodeURIComponent(disqus_def_email)
	+ '&def_name='		+ encodeURIComponent(disqus_def_name)
	+ '&'				+ disqus_date.getTime();
disqus_script.charset = 'UTF-8';

var disqus_dataContainer = document.createElement('div');
disqus_dataContainer.id = 'dsq-content';
disqus_dataContainer.appendChild(disqus_script);

document.getElementById(disqus_container_id).appendChild(disqus_dataContainer);
