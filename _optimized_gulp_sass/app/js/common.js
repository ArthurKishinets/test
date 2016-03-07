$(function() {

	var $slider = $('.container .slider');
	var $container = $('.container');
	var $slides = $container.find('.slide');
	var $currentSlide = 1;
	
	var start = setInterval(function() {
		$slider.animate({'margin-left':'-=100%'}, 1000,
		function() {
			
			if(++$currentSlide === $slides.length) {
				$currentSlide = 1;
				$slider.css('margin-left', 0);
				
				
			}
		});
		
	}, 3000);
		



	//Chrome Smooth Scroll
	try {
		$.browserSelector();
		if($("html").hasClass("chrome")) {
			$.smoothScroll();
		}
	} catch(err) {

	};

	$("img, a").on("dragstart", function(event) { event.preventDefault(); });

});
