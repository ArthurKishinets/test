$(function() {

	var $slider = $('.container .slider');
	var $container = $('.container');
	var $slides = $container.find('.slide');
	var $currentSlide = 1, interval;
	var $right = $('.right'), $left = $('.left');
	$(".slide" + ($currentSlide - 1)  + " .round img:nth-child(1)").attr('src', 'img/favicon/hard.png');

	function start() {

		interval = setInterval(function() {
			$slider.animate({'margin-left':'-=100%'}, 1000,
			function() {
				$currentSlide++;
				//alert($currentSlide);
				console.log(".slide" + ($currentSlide - 1)  + " .round li:nth-child(" + ($currentSlide - 1) + ")");
				$(".slide" + ($currentSlide - 1)  + " .round img:nth-child(" + ($currentSlide) + ")").attr('src', 'img/favicon/hard.png');
				if($currentSlide === $slides.length) {
					$currentSlide = 1;
					$slider.css('margin-left', 0);
				}
				
			});
			
		}, 5000);
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
