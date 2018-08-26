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

   	enquire.register("screen and (max-width:1280px)",{
   		match:function(){
   			bannerSliderContainer.css({
   		"width": WindowWidth  ,
   		"height": WindowHeight - 350
   	      });
   		}
   	})
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
    	infinite: true
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
