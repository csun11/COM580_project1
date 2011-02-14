$(document).ready(function(){
	alert('tset');
  $('input.lightbox').click(function() {
	$('body').addClass('shade');
	});

  $('#header, #intro, #footer').click(function(){
		('.shade').animate({
			opacity: 1
		}, 'slow', function(){});
  });

//this js can only turn the background to black, but I cannot make the background back to white again when user clicks somewhere outside the login field. Why??

	$(window).scroll(function() {
		$('#leftpanel')
			.stop()
			.animate({top: $(document).scrollTop()}, 'slow', 'easeOutBack');
	});


});
