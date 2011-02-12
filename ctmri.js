$(document).ready(function(){
	alert('tset');
  $('input.lightbox').click(function(e) {
	// hide scrollbars
	$('body').css('overflow', 'hidden');
	$('<div id="overlay"></div>')
		.css('top', $(document).scrollTop())
		.css('opacity', '0')
		.animate({'opacity': '0.5'}, 'slow')
		.appendTo('body');
	$('<div id="lightbox"></div>')
		.hide()
		.appendTo('body');
	$('#lightbox') //this portion needs to be fixed so that the form loads, instead of a picture!!!!!!!!!!!!!!!!
		.attr('src', $(this).attr('href'))
		.load(function() {
			positionLightboxImage();
		})
		.click(function() {
			removeLightbox();
			})
		.appendTo('#lightbox');
	return false;
	});
});

function removeLightbox() {
$('#overlay, #lightbox')
.fadeOut('slow', function() {
$(this).remove();
$('body').css('overflow-y', 'auto'); // show scrollbars!
});
}