$(document).ready(function(){

	const shopSlider = $("#shopSlider");

	// shopSlider.on('changed.owl.carousel', function(event){
	// 	$('.slides-controls-number__active').text(event.item.index + 1);
	// 	$('.slides-controls-number__total').text(event.item.count);
	// })

// 	headerSlider.on('initialize.owl.carousel', function(event){
// 		$('.slides-controls-number__active').text(event.item.index + 1);
// 		$('.slides-controls-number__total').text(event.item.count);
// 	})

	shopSlider.owlCarousel({
		items: 3,
		loop: true,
		dots: false,
		smartSpeed: 300,
		margin: 2,
	});

	$('#shopSliderLeft').click(function() {
	    shopSlider.trigger('prev.owl.carousel');
	})

	$('#shopSliderRight').click(function() {
	    shopSlider.trigger('next.owl.carousel');
})

});