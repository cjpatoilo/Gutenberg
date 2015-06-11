// Responsive images compliant with vertical rhythm
// *********

// Construct the function
$.fn.imgFixHeight = function(){

	// get image original height
	var imgOriginalHeight = this.height();

	// Get Line-height
	var lineHeight = $('p').css("line-height");
	console.log(lineHeight);

	// Calculate the new image height
	var div = Math.floor(imgOriginalHeight/lineHeight);
	var imgNewHeight = lineHeight * div;

	// Apply the new image height
	this.css("height", imgNewHeight);
};