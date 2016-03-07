$(function() {

	var $slider = $('.container .slider');
	var $container = $('.container');
	var $slides = $container.find('.slide');
	var $currentSlide = 1, interval;
	var $right = $('.right'), $left = $('.left');
	
	function start() {
		interval = setInterval(function() {
			$slider.animate({'margin-left':'-=100%'}, 1000,
			function() {
				$currentSlide++;
				if($currentSlide === $slides.length) {
					$currentSlide = 1;
					$slider.css('margin-left', 0);
				}
				
			});
			
		}, 4000);
	}	

	function stop(){
		clearInterval(interval);
	}

	function next() {
		$slider.animate({'margin-left': '-=100%'}, 1000,
			function(){
				$currentSlide++;
				if($currentSlide === $slides.length) {
					$currentSlide = 1;
					$slider.css('margin-left', 0);
				}
			}
		);
	}

	function previous() {
		if($currentSlide !== 1){
			$slider.animate({'margin-left': '+=100%'}, 1000,
			function(){
				$currentSlide--;
			}
		);
		}
	}

	$container.on('mouseenter', stop).on('mouseleave', start);

	$left.on('click', previous);
	$right.on('click', next);

	start();



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
