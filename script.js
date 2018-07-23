$(function() {
	$('.toggles button').click(function(){
		var get_id = this.id;
		var get_current = $('.posts .' + get_id);

		$('.post').not(get_current).hide(100);
		get_current.show(900);
	});

	$('#showall').click(function(){
		$('.post').show(700);
	});
});


$(document).ready(function(){
  $(".owl-carousel").owlCarousel({
  	items:8
  });
});
 

if($(window).width() < 520){
	$(".owl-carousel").owlCarousel({
  	items:4
  });
};