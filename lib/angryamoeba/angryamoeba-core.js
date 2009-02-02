// Angry amoeba Core JS
// Adds necessary anchors to nice clean raw markup

// Bind to document.ready
$(document).ready(function() {
	
	// Find all .section wrappers and add a .frame and a .contents to the interior
	$(".section").wrapInner('<div class="frame"><div class="contents"></div></div>')
	$(".section .frame .contents").append('<span class="break" />');
	
	// Find all .box wrappers and add a .inner to the interior
	$(".box").wrapInner('<div class="inner"></div>');
	
	// Sort out code snippets
	$("code").wrapInner('<pre></pre>');
	
	// Quotations need a wrapper
	$("blockquote").wrapInner('<div class="inner"></div>');
	
	// Append a clearing marker to the bottom of all project headers
	$(".projects h4").append('<span class="break" />');
	
	//  Bind to accordion lists
	$(".accordion li h4 a").click(function() {
		// Hide all items
		$(".description", $(this).parent().parent().parent()).slideUp("fast");		
		// Show item in this element
		$(".description", $(this).parent().parent()).slideDown("fast");		
		return false;
	});	
	// Set initial state to hide
	$(".accordion .description").hide();		
	
})