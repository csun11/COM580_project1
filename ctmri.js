$(document).ready(function(){


//make the vertical navigation bar to be always visible floating on right
	$(window).scroll(function() {
		$('#nav')
			.stop()
			.animate({top: $(document).scrollTop()}, 'fast');
	});



//use checkboxes to control the visibility of CT/MRI fieldset 
	$('input#ct').click(function() {
		$('.ctdata').toggle();
		});

	$('input#mri').click(function() {
		$('.mridata').toggle();
		});


//showing results only when AJAX is not supported
	$('#noajax').hide();

$("#inputdata fieldset").hover(function() {
	$(this).toggleClass("active");
	});
	
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
