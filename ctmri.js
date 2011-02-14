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
		$('#nav')
			.stop()
			.animate({top: $(document).scrollTop()}, 'slow', 'easeOutBack');
	});

//use checkboxes to control the visibility of CT/MRI fieldset 
	$('input#ct').click(function() {
		$('.ctdata').toggle();
		});

	$('input#mri').click(function() {
		$('.mridata').toggle();
		});


//showing results only when AJAX cannot function
	$('#noajax').hide();
		
});

//adding AJAX to the result page
function loadXMLDoc() {
	var xmlhttp;
	if (window.XMLHttpRequest)
		{// code for IE7+, Firefox, Chrome, Opera, Safari
	  xmlhttp=new XMLHttpRequest();
	  }
	else
		{// code for IE6, IE5
	  xmlhttp=new ActiveXObject("Microsoft.XMLHTTP");
	  }
	
	xmlhttp.open("GET","fever.txt",false);
	xmlhttp.send();
	document.getElementById("ajax").innerHTML=xmlhttp.responseText;
}
