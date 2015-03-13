$(document).ready(function() {
	// DEBUG: print ready message
	console.log("page is loaded.");

	// Mouse hover around Ryu's image
//	$('#images').hover(
		// Mouse in: Ryu gets ready
//		function() {
			// DEBUG
			//console.log("mouse in");
//			$(this).find('#ryu_stand').hide();
//			$(this).find('#ryu_ready').show();
//		},
		// Mouse out: Ryu stands still
//		function () {
			// DEBUG
			//console.log("mouse out");
//			$(this).find('#ryu_ready').hide();
//			$(this).find('#ryu_stand').show();
//			$(this).find('#ryu_throw').hide();
//		}
//	);

	$('#images').mouseenter(function() {
		$(this).find('#ryu_stand').hide();
		$('#ryu_throw').hide();
		$('#ryu_pose').hide();
		$(this).find('#ryu_ready').show();
	});

	$('#images').mouseleave(function() {
		$(this).find('#ryu_ready').hide();
		$(this).find('#ryu_throw').hide();
		$('#ryu_pose').hide();
		$(this).find('#ryu_stand').show();
	});

	// Mouse down: Ryu throws Hadouken
	$('#images').mousedown(function()
	{
		$(this).find('#ryu_ready').hide();
		$('#ryu_pose').hide();
		$('#ryu_stand').hide();
		$(this).find('#ryu_throw').show();

		$('#hadouken').finish().show();
		$('#hadouken').animate(
			{'left': '1200px'},
			500,
			'linear',
			function() {
				$('#hadouken').css('left', '420px');
				$('#hadouken').hide();
			}
		);

		playHadouken();
	});

	// Mouse up: Ryu gets ready
	$('#images').mouseup(function()
	{
		$(this).find('#ryu_throw').hide();
		$('#ryu_stand').hide();
		$('#ryu_pose').hide();
		$(this).find('#ryu_ready').show();
	});

	// Click Ryu: launch Hadouken
	$('#images').click(function() {
		
	});

	$(document).keydown( function(event) {
		 if (event.which == 88)
		 	console.log('x is pressed');
		 else
		 	console.log(event.which);
		$('#ryu_pose').show();
		$('#ryu_ready').hide();
		$('#ryu_stand').hide();
		$('#ryu_throw').hide();
	});

	$(document).keyup( function(event) {
		$('#ryu_pose').hide();
		$('#ryu_throw').hide();
		$('#ryu_stand').hide();
		$('#ryu_stand').show();	
	});
});

function playHadouken() {
	$('#hadouken-sound')[0].volume = 0.5;
	$('#hadouken-sound')[0].load();
	$('#hadouken-sound')[0].play();
}