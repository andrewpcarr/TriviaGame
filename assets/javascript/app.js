// Declaring variables to hold number correct, incorrect, and no response
var correct = 0;
var wrong = 0;
var noResponse = 0;

// Our timer variables
var count = 61; // set at 61 so the user sees 60 displayed initially
var counter = setInterval(timer, 1000); //1000 will  run it every 1 second

// This is the logic for the timer
function timer()
{
  count = count-1;
  // If timer reaches 0 before the user finishes, this logic checks their score
  if (count <= 0) {
     clearInterval(counter);
     if ($('#correct1').is(':checked')) {
		correct++;
	} else if ($('.wrong1').is(':checked')) {
		wrong++;
	} else {
		noResponse++;
	}

	if ($('#correct2').is(':checked')) {
		correct++;
	} else if ($('.wrong2').is(':checked')) {
		wrong++;
	} else {
		noResponse++;
	}

	if ($('#correct3').is(':checked')) {
		correct++;
	} else if ($('.wrong3').is(':checked')) {
		wrong++;
	} else {
		noResponse++;
	}

	if ($('#correct4').is(':checked')) {
		correct++;
	} else if ($('.wrong4').is(':checked')) {
		wrong++;
	} else {
		noResponse++;
	}

	if ($('#correct5').is(':checked')) {
		correct++;
	} else if ($('.wrong5').is(':checked')) {
		wrong++;
	} else {
		noResponse++;
	}

	if ($('#correct6').is(':checked')) {
		correct++;
	} else if ($('.wrong6').is(':checked')) {
		wrong++;
	} else {
		noResponse++;
	}

	if ($('#correct7').is(':checked')) {
		correct++;
	} else if ($('.wrong7').is(':checked')) {
		wrong++;
	} else {
		noResponse++;
	}

	if ($('#correct8').is(':checked')) {
		correct++;
	} else if ($('.wrong8').is(':checked')) {
		wrong++;
	} else {
		noResponse++;
	}

	if ($('#correct9').is(':checked')) {
		correct++;
	} else if ($('.wrong9').is(':checked')) {
		wrong++;
	} else {
		noResponse++;
	}

	if ($('#correct10').is(':checked')) {
		correct++;
	} else if ($('.wrong10').is(':checked')) {
		wrong++;
	} else {
		noResponse++;
	}

	$('html, body').animate({ scrollTop: 0 }, 'fast');

	$('.questions').css('display', 'none');
	$('.score').css('display', 'block');
	$('.fixed').css('display', 'none');

	$('#right').html('Number right: ' + correct);
	$('#wrong').html('Number wrong: ' + wrong);

	if (noResponse > 0) {
		$('#noResponse').html('No response: ' + noResponse);
	} else {
		$('#noResponse').empty();
	}
  }
  if (count <= 10) {
  	$('.fixed').css('color', '#c50331');
  	$('.fixed').css('font-size', '52px');
  	$('.fixed').css('border', '3px solid yellow');
  }

  $('.fixed').html('Time:' + count);
}



// Start Game button
$('.startGame').on('click', function() {
	$('#preGame').css('display', 'none');

	count = 61;

	$('.fixed').css('display', 'block');
	$('.questions').css('display', 'block');

	timer();
});

// This button tabulates the score and moves to the score screen
$('.checkScore').on('click', function() {
	if ($('#correct1').is(':checked')) {
		correct++;
	} else if ($('.wrong1').is(':checked')) {
		wrong++;
	} else {
		noResponse++;
	}

	if ($('#correct2').is(':checked')) {
		correct++;
	} else if ($('.wrong2').is(':checked')) {
		wrong++;
	} else {
		noResponse++;
	}

	if ($('#correct3').is(':checked')) {
		correct++;
	} else if ($('.wrong3').is(':checked')) {
		wrong++;
	} else {
		noResponse++;
	}

	if ($('#correct4').is(':checked')) {
		correct++;
	} else if ($('.wrong4').is(':checked')) {
		wrong++;
	} else {
		noResponse++;
	}

	if ($('#correct5').is(':checked')) {
		correct++;
	} else if ($('.wrong5').is(':checked')) {
		wrong++;
	} else {
		noResponse++;
	}

	if ($('#correct6').is(':checked')) {
		correct++;
	} else if ($('.wrong6').is(':checked')) {
		wrong++;
	} else {
		noResponse++;
	}

	if ($('#correct7').is(':checked')) {
		correct++;
	} else if ($('.wrong7').is(':checked')) {
		wrong++;
	} else {
		noResponse++;
	}

	if ($('#correct8').is(':checked')) {
		correct++;
	} else if ($('.wrong8').is(':checked')) {
		wrong++;
	} else {
		noResponse++;
	}

	if ($('#correct9').is(':checked')) {
		correct++;
	} else if ($('.wrong9').is(':checked')) {
		wrong++;
	} else {
		noResponse++;
	}

	if ($('#correct10').is(':checked')) {
		correct++;
	} else if ($('.wrong10').is(':checked')) {
		wrong++;
	} else {
		noResponse++;
	}

	$('html, body').animate({ scrollTop: 0 }, 'fast');

	$('.questions').css('display', 'none');
	$('.score').css('display', 'block');
	$('.fixed').css('display', 'none');

	$('#right').html('Number right: ' + correct);
	$('#wrong').html('Number wrong: ' + wrong);

	if (noResponse > 0) {
		$('#noResponse').html('No response: ' + noResponse);
	} else {
		$('#noResponse').empty();
	}


	console.log(correct);
	console.log(wrong);
});

// Button to reset the game
$('.replay').on('click', function() {
	count = 61;
	correct = 0;
	wrong = 0;
	noResponse = 0;

	$('.questions').css('display', 'block');
	$('.score').css('display', 'none');
	$('.fixed').css('display', 'block');

	$('.fixed').css('color', '#ffee83');
  	$('.fixed').css('font-size', '48px');
  	$('.fixed').css('border', '2px solid black');

	$('html, body').animate({ scrollTop: 0 }, 'slow');
	clearInterval(counter);
	counter = setInterval(timer, 1000);
	timer();
});