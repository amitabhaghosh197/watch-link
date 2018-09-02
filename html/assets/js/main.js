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
			arrows : false,
			dots:true,
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

var brandSliderAnim = function(){
	var brandSlider = ag('#brandSlider');
	var sliderView = new slickSliderView({ el: brandSlider });
	sliderView.render({
		dots: false,
		arrows: true,
		infinite:true,
		slidesToShow: 4,
		autoplaySpeed:0,
		speed:10000,
		autoplay: true,
		responsive:[
			{

				breakpoint: 2500,
				settings: {
					slidesToShow: 5,
					infinite: true
				}

			},

			{

      breakpoint: 1450,
      settings: {
        slidesToShow: 4,
        infinite: true
      }

    }
	]

	})
};

var ProductModalScript = function(){
	var targetModalBtn = ag('.js-product-modal');
	var ThumbSliderContainer = ag(document).find('[data-thumb_slide]');
		function zoomProductImages(){
			var imagedata = ag('[data-zoomy="zoom"]');
			var ElevateZoom = new imageElevateZoomView({el:imagedata});
				 ElevateZoom.render();




				 var ThumbSliderView = new slickSliderView({ el: ThumbSliderContainer });
	 			ThumbSliderView.render({
	 				infinite:false,
	 				slidesToShow: 4,
	 			});
				ThumbSliderContainer.slick('setPosition');
				ThumbSliderContainer.slick('slickPrev');


		};

	_.each(targetModalBtn, function(item){
		  var Ele = ag(item);
			var _thisModal = Ele.data('target');
				 ag(_thisModal).on('shown.bs.modal',function(){
					  zoomProductImages();
				 });

				 ag(_thisModal).on('hidden.bs.modal',function(){
					  ThumbSliderContainer.slick('unslick');
				 })
	},this);
}

var removePlaceHolder = function(){
	ag('input,textarea').focus(function(){
   ag(this).data('placeholder',ag(this).attr('placeholder'))
          .attr('placeholder','');
}).blur(function(){
   ag(this).attr('placeholder',ag(this).data('placeholder'));
});
}

var headeronScrollAnimation = function(){
 var $window = ag(window);
 var $header = ag('.site-header');
 var $headerHeight = parseInt($header.outerHeight());
 var $body = DefaultWLModel.get('BODY');
 var $logoWrapper = ag('.site-header__logo-wrapper');
 var $siteHeaderTop = ag('.site-header__top');
 var $siteHeaderLogo = ag('.site-header--logo');
 var $navbar = ag('.site-header__navbar');

  // Add Timeline function

		var tl = new TimelineMax({paused:true, delay: 0.2});
		   tl.to($header, 0.60,{backgroundColor: 'rgba(14,14,14,0.7)', ease: Linear.easeNone});
			 //tl.to($logoWrapper, 0.30,{paddingTop: 36, ease:Linear.easeNone});
			 tl.to($navbar, 0.20,{opacity:0, ease:Linear.easeNone});
			 tl.to($siteHeaderLogo, 0.20,{maxWidth: '63.33%', opacity: 0, ease:Linear.easeNone});
			 tl.to($siteHeaderTop, 0.30,{minHeight: 'auto', marginBottom:3, delay:0.2, ease:Linear.easeNone});
			  tl.to($siteHeaderLogo, 0.50,{maxWidth: '63.33%', delay:0.2, opacity: 1.0, ease:Linear.easeNone});
			 tl.to($navbar,0.6,{opacity:1.0, delay:0.2, ease:Linear.easeNone});


 $window.on('scroll', _.throttle(function(){

	 var $scroll = $window.scrollTop();
	 if($scroll >= $headerHeight ){
		 $body.addClass('header-dark');
		 tl.play();
	 } else {
		 $body.removeClass('header-dark');
		 tl.reverse();
	 }
 },1));

}

var superScrolling = function(){
	ag.scrollSpeed(100, 800);
}
	return{
		init: function(){
          BannerSliderScripts();
					brandSliderAnim();
					ProductModalScript();
					removePlaceHolder();
					headeronScrollAnimation();
					//superScrolling();
		}
	}
}());

ag(function(){
	DefaultWLMainScripts.init();
}());
