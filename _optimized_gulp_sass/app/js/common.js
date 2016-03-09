$(function() {
	var e = jQuery.Event( "click" );
	var $slider = $('.container .slider');
	var $container = $('.container');
	var $slides = $container.find('.slide');
	var $currentSlide = 1, interval;
	var $round = $('.round');
	var $right = $('.right'), $left = $('.left');
	var duration = 1000, tim;
	$(".slide" + ($currentSlide - 1)  + " .round img:nth-child(1)").attr('src', 'img/favicon/hard.png');

	function start() {
		
		console.log('start');
			clearInterval(interval);	
			interval = setInterval(function() {
				$slider.animate({'margin-left':'-=100%'}, 1000,
				function() {
					$currentSlide++;
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

	function next(time) {
		stop();

		console.log('tim is ' + tim);
		$slider.animate({'margin-left': '-=100%'}, {tim, complete:
			function(){
				$currentSlide++;
				$(".slide" + ($currentSlide - 1)  + " .round img:nth-child(" + ($currentSlide) + ")").attr('src', 'img/favicon/hard.png');
				tim = undefined;
				if($currentSlide === $slides.length) {
					$currentSlide = 1;
					$slider.css('margin-left', 0);
				}
			}
		});
	}

	function previous(time) {
		
		if($currentSlide !== 1){
			tim = typeof time !== undefined ?  time : duration;
			$(".slide" + ($currentSlide - 1)  + " .round img:nth-child(" + ($currentSlide) + ")").attr('src', 'img/favicon/hard.png');
				$slider.animate({'margin-left': '+=100%'}, {tim, complete:
				function(){
					$currentSlide--;
				}
			});
		}
	}

	$('.round img[src="img/favicon/light.png"]').click(function() {
   		var numb = this.className.charAt(5);
   		var count = numb - $currentSlide;
   		if(count < 0) {
   			for (var i = 0; i < -1 * count; i++) {
	  		previous();
	  		}
   		}
  		if(count > 0) {
		  	for (var i = 0; i < count; i++) {
		  		next();
		  	}
		}	
	});	

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
