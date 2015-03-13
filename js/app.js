$(document).ready(function() {
	// DEBUG: print ready message
	console.log("page is loaded.");

	// Mouse hover around Ryu's image
	$('#images').hover(
		// Mouse in: Ryu gets ready
		function() {
			// DEBUG
			//console.log("mouse in");
			$(this).find('#ryu_stand').hide();
			$(this).find('#ryu_ready').show();
		},
		// Mouse out: Ryu stands still
		function () {
			// DEBUG
			//console.log("mouse out");
			$(this).find('#ryu_ready').hide();
			$(this).find('#ryu_stand').show();
			$(this).find('#ryu_throw').hide();
		}
	);

	// Mouse down: Ryu throws Hadouken
	$('#images').mousedown(function()
	{
		$(this).find('#ryu_ready').hide();
		$(this).find('#ryu_throw').show();
	});

	// Mouse up: Ryu gets ready
	$('#images').mouseup(function()
	{
		$(this).find('#ryu_throw').hide();
		$(this).find('#ryu_ready').show();
	});

	// Click Ryu: launch Hadouken
	$('#images').click(function() {
		$(this).find('#hadouken').finish().show();
		$(this).find('#hadouken').animate(
			{'left': '1200px'},
			500,
			'linear',
			function() {
				$('#hadouken').css('left', '420px');
				$('#hadouken').hide();
			}
		);
	});
});