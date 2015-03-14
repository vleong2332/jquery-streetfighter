$(document).ready(function() {
	// DEBUG: print ready message
	console.log("page is loaded.");

//	// Mouse hover around Ryu's image
//	$('#images').hover(
//		// Mouse in: Ryu gets ready
//		function() {
//			// DEBUG
//			//console.log("mouse in");
//			$(this).find('#ryu_stand').hide();
//			$(this).find('#ryu_ready').show();
//		},
//		// Mouse out: Ryu stands still
//		function () {
//			// DEBUG
//			//console.log("mouse out");
//			$(this).find('#ryu_ready').hide();
//			$(this).find('#ryu_stand').show();
//			$(this).find('#ryu_throw').hide();
//		}
//	);

	// Ryu gets in his stance on mouse hover
	$('#images').mouseenter(function() {
		$('#ryu_stand').hide();
		$('#ryu_ready').show();
		$('#ryu_throw').hide();
		$('#ryu_pose').hide();
	});

	// Ryu stands still on mouse out
	$('#images').mouseleave(function() {
		$('#ryu_stand').show();
		$('#ryu_ready').hide();
		$('#ryu_throw').hide();
		$('#ryu_pose').hide();
	});

	// Ryu throws Hadouken when he's clicked
	$('#images').mousedown(function()
	{
		// Show Ryu's throwing stance
		$('#ryu_stand').hide();
		$('#ryu_ready').hide();
		$('#ryu_throw').show();
		$('#ryu_pose').hide();

		// Animate Hadouken
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

		// Hadouken's sound
		playHadouken();
	});

	// Ryu goes back to normal stance after firing Hadouken
	$('#images').mouseup(function()
	{
		$('#ryu_stand').hide();
		$('#ryu_ready').show();
		$('#ryu_throw').hide();
		$('#ryu_pose').hide();
	});

	// Ryu poses glamorously when 'x' is pressed
	$(document).keydown( function(event) {
		 if (event.which == 88)
		 {
			$('#ryu_stand').hide();
			$('#ryu_ready').hide();
			$('#ryu_throw').hide();
		 	$('#ryu_pose').show();
		 	backgroundMusic();
		 }
		 else
		 	// Print which key is pressed if it's not 'x'
		 	console.log(event.which + 'is pressed');
	});

	// $document.keypress(function(event) {
	// 	backgroundMusic();
	// });
 
	// Ryu returns to acting normal when 'x' is no longer pressed
	$(document).keyup( function(event) {
		$('#ryu_ready').show();
		$('#ryu_stand').hide();
		$('#ryu_throw').hide();
		$('#ryu_pose').hide();
		$('#pose_music')[0].pause();
	});
});


/* FUNCTION DEFINITION */
function playHadouken() {
	$('#hadouken-sound')[0].volume = 0.5;
	$('#hadouken-sound')[0].load();
	$('#hadouken-sound')[0].play();
}
function backgroundMusic() {
	$('#pose_music')[0].volume = 0.5;
	if ($('#pose_music')[0].paused)
	{
		$('#pose_music')[0].load();
		$('#pose_music')[0].play();
	}
}