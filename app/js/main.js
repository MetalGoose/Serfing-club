$(document).ready(function(){

	var headerSlider = $(".owl-carousel");

	headerSlider.owlCarousel({
		items: 1,
		loop: true,
		dots: false,
		smartSpeed: 300,
	});

	$('#headerSliderLeft').click(function() {
	    headerSlider.trigger('next.owl.carousel');
	})

	$('#headerSliderRight').click(function() {
	    headerSlider.trigger('prev.owl.carousel');

	headerSlider.on('changed.owl.carousel', function(event){
		console.log(event.item.count)
		console.log(event.item.index)
	})
})
});