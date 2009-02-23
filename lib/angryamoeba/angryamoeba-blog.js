// Load disqus commenting system
$(document).ready(function() {

	if($("#disqus_thread").length) {
		var disqus_title = $("title").html();
		var head = document.getElementsByTagName('head')[0];
		$(document.createElement('link'))
			.attr({type: 'text/css', href: '/stylesheets/disqus.css', rel: 'stylesheet', media: 'screen'})
			.appendTo(head);
		$.getScript('/lib/disqus/embed.js');
	}
	
});