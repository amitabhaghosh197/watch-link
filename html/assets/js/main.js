const DefaultWLMainScripts = (function(){
	"use strict";
 const DefaultWLModel = new DefaultModel();

    const WindowWidth    = DefaultWLModel.get('Win_W');
    const WindowHeight   = DefaultWLModel.get('Win_H');



 var BannerSliderScripts = function(){
 	var bannerSliderContainer = DefaultWLModel.get('BANNERSLIDER');
 	var $slides = bannerSliderContainer.find('.banner-slider__featured-img');

    var $window = ag(window);
   function setBannerUlSize() {
   	bannerSliderContainer.css({
   		"width": WindowWidth,
   		"height": WindowHeight
   	});


   }
    setBannerUlSize();

    $window.on("resize", _.debounce(function(){
     setBannerUlSize();
     location.reload(true);
    },300));

		// BannerSlider Container Height for 1280px X 1024px

		enquire.register("screen and (max-width:1280px) and (max-height:1024px)",{
   		match:function(){
   			bannerSliderContainer.css({
   		       "width": WindowWidth  ,
   		        "height": 634
   	      });
				var bannerSliderContainerHeight = parseInt(bannerSliderContainer.innerHeight());
				bannerSliderContainer.closest(".banner-section").css("height", bannerSliderContainerHeight);
   		}
   	});

    var SlickSlider = new slickSliderView({el: bannerSliderContainer });
    SlickSlider.render({
    	slidesToShow : 1,
    	slidesToScroll :1,
    	infinite: true,
			arrows : true,
			autoplay: true,
			fade : true,
			autoplay: true,
			autoplaySpeed:6000,
			speed:3000
    });

    // Set Width & Height of Banner Slides

    var BannerSliderWidth = parseInt(bannerSliderContainer.innerWidth());
    var BannerSlideHeight = parseInt(bannerSliderContainer.innerHeight());
    $slides.css({
    	'width': BannerSliderWidth,
    	'height': BannerSlideHeight
    })





 }

	return{
		init: function(){
          BannerSliderScripts();
		}
	}
}());

ag(function(){
	DefaultWLMainScripts.init();
}());
