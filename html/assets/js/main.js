const DefaultWLMainScripts = (function(){
	"use strict";
 const DefaultWLModel = new DefaultModel();

    const WindowWidth    = DefaultWLModel.get('Win_W');
    const WindowHeight   = DefaultWLModel.get('Win_H');



 var BannerSliderScripts = function(){
 	var bannerSliderContainer = DefaultWLModel.get('BANNERSLIDER');
 	var $slides = bannerSliderContainer.find('.banner-slider__featured-img');
	var $slidesHeight = parseInt($slides.innerHeight());

    var $window = ag(window);
   function setBannerUlSize() {
   	bannerSliderContainer.css({
   		"width": WindowWidth,
   		//"height": $slidesHeight
			"height": WindowHeight
   	});
   bannerSliderContainer.closest('.banner-section').height(WindowHeight);

   }
    setBannerUlSize();

    $window.on("resize", _.debounce(function(){
     setBannerUlSize();
     location.reload(true);
    },300));




    var SlickSlider = new slickSliderView({el: bannerSliderContainer });
    SlickSlider.render({
    	slidesToShow : 1,
    	slidesToScroll :1,
    	infinite: true,
			arrows : true,
			autoplay: true,
			fade : true,
			autoplaySpeed:4000,
			speed:2000
    });

    // Set Width & Height of Banner Slides

    var BannerSliderWidth = parseInt(bannerSliderContainer.innerWidth());
    var BannerSlideHeight = parseInt(bannerSliderContainer.innerHeight());
    $slides.css({
    	'width': BannerSliderWidth,
    	'height': WindowHeight
    });






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
