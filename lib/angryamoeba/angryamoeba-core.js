// Angry amoeba Core JS
// Adds necessary anchors to nice clean raw markup

// Bind to document.ready
$(document).ready(function() {
	
	// Find all .section wrappers and add a .frame and a .contents to the interior
	$(".section").wrapInner('<div class="frame"><div class="contents"></div></div>').append('<span class="break" />');
	
	// Find all .box wrappers and add a .inner to the interior
	$(".box").wrapInner('<div class="inner"></div>');
	
})