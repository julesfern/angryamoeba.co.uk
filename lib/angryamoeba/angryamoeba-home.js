// Get the title of the most recent blog post from Tumblr
$(document).ready(function() {
	var posts = singlecell_posts;
	if(posts) {
		$("#singlecell-most-recent").html(
			"Most recent blog entry '" + posts[0]["title"] + "'"
		).attr("href", posts[0]["permalink"]);
	}
})