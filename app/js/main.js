$(document).ready(function(){

	var headerSlider = $(".owl-carousel");

	headerSlider.on('changed.owl.carousel', function(event){
		$('.slides-controls-number__active').text(event.item.index + 1);
		$('.slides-controls-number__total').text(event.item.count);
	})

	headerSlider.on('initialize.owl.carousel', function(event){
		$('.slides-controls-number__active').text(event.item.index + 1);
		$('.slides-controls-number__total').text(event.item.count);
	})

	headerSlider.owlCarousel({
		items: 1,
		// loop: true,
		dots: false,
		smartSpeed: 300,
	});

	$('#headerSliderLeft').click(function() {
	    headerSlider.trigger('prev.owl.carousel');
	})

	$('#headerSliderRight').click(function() {
	    headerSlider.trigger('next.owl.carousel');





})
});