


// Super basic nav js
$(window).addEvent('domready', function()
{



	//
	// Scroll listener
	//
	var $window = $(window);
	var $anchors = $$('.anchor');
	var $menuItems = $$('.text-item a');
	var $welcomeSection = $('welcome-section');
	var $text = $('title-text');
	
	var t = null;
	var checker = null;

	var anchors = [];
	var offset = -65;
	var throttleInterval = 250;
	var started = false;


	// get positions of anchors and stick 'em in an array with corresponding menu item
	$anchors.each(function($anchor, key)
	{
		var position = $anchor.getPosition();
		anchors.push({
			y: position.y,
			menuItem: $menuItems[key]
		});	
	});

	// // listen for our scroll event and throttle kinda
	// $window.addEvent('scroll', function(e)
	// {
	// 	// When we start scrolling, start checking every so often
	// 	if(started === false)
	// 	{
	// 		checker = setInterval(function()
	// 		{
	// 			var scrolled = $window.getScroll();

	// 			for(var i = anchors.length - 1; i >= 0; i --)
	// 			{
	// 				if(scrolled.y > (anchors[i].y + offset))
	// 				{
	// 					// $menuItems.removeClass('active');
	// 					// $anchors[i].menuItem.addClass('active');
	// 					break;
	// 				}
	// 			}
	// 		}, throttleInterval);

	// 		started = true;
	// 	}

	// 	// At the end of this all, clear the throttled action
	// 	clearTimeout(t);
	// 	t = setTimeout(function()
	// 	{
	// 		started = false;
	// 		clearInterval(checker);
	// 	}, throttleInterval);
	// });


	//
	// Add smooth scrolling
	//
	var mySmoothScroll = new Fx.SmoothScroll(
	{
	    links: $menuItems,
	    wheelStops: false
	});




	//
	//	Calculate our vertical screen size
	//	
	var setHeight = function()
	{
		var windowDimensions = $window.getSize();
		$welcomeSection.setStyle('height', windowDimensions.y);

		// 725 x 319 @ 20px Top
		var origWidth = 725;
		var origHeight = 319;
		if(windowDimensions.y < 700)
		{
			var newHeight = 250;
			var newWidth = (newHeight / origHeight) * origWidth;

			$text.setStyles({
				width: newWidth,
				height: newHeight,
				left: (0 - (newWidth / 2))
			});
		}
		else
		{
			$text.setStyles({
				width: origWidth,
				height: origHeight,
				left: (0 - (origWidth / 2))
			});
		}
	};

	// setHeight();

	// $window.addEvent('resize', function()
	// {
	// 	setHeight();
	// });

});


