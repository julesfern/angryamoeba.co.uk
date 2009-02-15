// Get the title of the most recent blog post from Tumblr
$(document).ready(function() {
	var t = tumblr_api_read;
	if(t) {
		// find most recent text post		
		var p = false;
		jQuery.each(t["posts"], function() {
			if(this["type"] == "regular") {
				p = this;
				return false;
			}
		});
		console.log("p is "+p['id']);
		$("#singlecell-most-recent").html(
			"Most recent blog entry '" + p["regular-title"] + "'"
		).attr("href", p["url"]);
	}
})