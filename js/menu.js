// Listen for when the user clicks on the hamburger icon
$('.hamburger').on('click', function () {
	//  if menu is closed, slide down
	// if menu is open, side up
	$('.menu').slideToggle();
});