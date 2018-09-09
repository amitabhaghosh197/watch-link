const DefaultWLMainScripts = (function() {
    "use strict";
    const DefaultWLModel = new DefaultModel();

    const WindowWidth = DefaultWLModel.get('Win_W');
    const WindowHeight = DefaultWLModel.get('Win_H');

    /**
     * ALL MOBILE SCRIPTS
     */
    var MobileScripts = {
        bannerHeight: function() {
            var $mobileBannerWrapper = DefaultWLModel.get('MOBILEBANNERWRAPPER');
            $mobileBannerWrapper.css({
                "width": WindowWidth,
                "height": WindowHeight
            });
        },
        mobHeaderHeight:function(){
            var mobHeader = ag('.mob-site-header');
            
            this.mobHeaderHeight.height = parseInt(mobHeader.outerHeight());
            
            return this.mobHeaderHeight.height;
            
        },

        mobSetSliderMarginTop: function(){
          this.mobHeaderHeight();
          var HeaderHeight = this.mobHeaderHeight.height;
          var mob_banner = ag('.js-mob-banner__slider-wrapper');
          var mobileBannerContainer =  DefaultWLModel.get('MOBILEBANNERWRAPPER');
          var mobileBannerContainerHeight = parseInt(mobileBannerContainer.outerHeight());
          var mobileSliderBalanceHeight = mobileBannerContainerHeight - HeaderHeight;
          mob_banner.css({'margin-top': HeaderHeight, 'height' : mobileSliderBalanceHeight });
        },
        mobSlickSlider: function(){
            /**
             * Mobile Banner Slider Animation
             */
          var $mobSliderContainer = ag('#mobBannerSlider');
          var mobSliderView = new slickSliderView({el: $mobSliderContainer });
          mobSliderView.render({
              infinite:true,
              arrows: false,
              dots:true,
              slidesToShow: 1,
              speed: 1000
          });
        },
        // On Orientation Window Reload
        addBodyClassonOrientation: function(){
          var $body = DefaultWLModel.get('BODY');
          
          var WindowWidth =  DefaultWLModel.get('Win_W');
          var $window = ag(window);
          $window.on("orientationchange",function(e){
              
              location.reload(true);
  
          });
        },

        ShiftingofBrandSectionbelowProduct : function(){
            var $brandSection = ag(".brand-wrapper");
            var $productWrapper = ag(".wl-product-wrapper");
            /**
             * On Mobile the 
             * Brand Section 
             * inserts after the Products
             */
            function shiftSection(){
                $brandSection.remove().insertAfter($productWrapper);
            };

            enquire.register("screen and (max-width:991px)",{
                match:function(){
                    shiftSection();
                }
            });
        },

        MobileHeaderAnimation: function(){
            
          this.mobHeaderHeight();
          var $mobHeader = ag('.mob-site-header');
          var $window = ag(window);
          var $mobHeaderHeight = this.mobHeaderHeight.height;
          
          var tl = new TimelineMax({paused: true, delay: 0.5});
          /**
           * Timeline Set
           * To Mobile Header
           */
           tl.to($mobHeader, 1.0, {background:"rgba(11,11,11,0.90)", ease: Linear.easeNone});
           $window.on("scroll", _.throttle(function(){
             var $scroll = $window.scrollTop();
  
               if( $scroll >= $mobHeaderHeight ){
                   tl.play();
                   
               }
               else {
                   tl.reverse();
               }
           },1));

        },

        visibilityofChatBox: function(){
            var $footer = ag('.site-footer');
            var $chatbox = ag('.chat-bubble');
            var $siteFooteroFFsetTop = $footer.offset().top;
            var $window = ag(window);
            var tl = new TimelineMax({paused: true, delay:0.3});

           /**
            * Timeline Set 
            * of Chat Box
            * It Shows only on scroll
            * to Footer
            */
            tl.to( $chatbox, 1.0,{visibility:'visible', autoAlpha: 1.0, ease : Linear.easeNone });
            
            $window.on('scroll', function(){
                var ScrollTop = $window.scrollTop();
                //console.log(ScrollTop);
                //console.log($siteFooteroFFsetTop);
                if( ScrollTop >= ($siteFooteroFFsetTop -400)){
                    
                    tl.play();
                } else {
                    tl.reverse();
                }
                
            })
           
            
        },
        mobileSearchFormAction: function(){

            var mobileSearchFormBtn = ag('#mobileSearchBtn');
            var mobileSearchFormWrapper = ag('#mobSearchForm');
            var mobSearchFormOpen = ag('#SearchForm');
            var mobSearchBtnClose = ag('#CloseSearchForm');
            /**
             * 
             * function to addClass on Mobile
             * search Forms
             */
            function mobSearchFormContent(n){
                if( n === true ){
                    mobileSearchFormWrapper.addClass('open-mob-search-form');
                    mobileSearchFormWrapper.find('.mob-search__form').addClass('mob-search-in');
                }
                else{
                    mobileSearchFormWrapper.removeClass('open-mob-search-form');
                    mobileSearchFormWrapper.find('.mob-search__form').removeClass('mob-search-in');
                }
                
 
            };

            /**
             * 
             * Creation of Mob 
             * Search Form Timelines
             */

            var tl = new TimelineMax({paused: true});
            tl.to(mobileSearchFormWrapper,0.1,{
                visibility:'visible',
                opacity:1.0,
                x:0,
                y:0

            });

            tl.to(mobileSearchFormWrapper, 0.3,{
                width:'100%',
                height:'100%',
                x:0,
                y:0,
                top:0,
                left:0,
                //delay:0.1,
                visibility:'visible',
                background:'rgb(222,18,85)',
                opacity:1.0,
                borderRadius:0,
                zIndex:9999,
                //ease: Linear.easeNone
            });

            tl.to(mobSearchFormOpen,0.5,{
                scale:1.0,
                x:'-50%',
                y:'-50%',
                opacity: 1.0,
                
            });
            tl.to(mobSearchBtnClose,0.3,{
                visibility:'visible',
                opacity:1.0,
                ease: Linear.easeNone
            });

            /**
             * On Click Action Mobile Search Form Button icon
             * on Mobile Header
             */

           
            mobileSearchFormBtn.on('click',function(e){
               e.preventDefault();
               tl.play();
               mobSearchFormContent(true);
            });

            /**
             * On click Mobile Search Form Close 
             * Button
             * Closes the Search Form Wrapper
             */

            mobSearchBtnClose.on('click',function(e){
                e.preventDefault();
                tl.reverse();
               mobSearchFormContent(false);
            });

            /**
             * On Submit the search form
             * Search Form Button triggers Click 
             * Function
             */

            mobSearchFormOpen.on('submit',function(){
                mobSearchBtnClose.trigger('click');
            })
        },

        mobNavbarAnimation: function(){
          var mobileNavbarTargetBtn = ag('#openSidebar');
          var sideBarCloseBtn = ag('#closeSidebar');
          var $body = DefaultWLModel.get('BODY');
          var mobSidebarNav = ag('#mobSidebarNav');
          /**
           * Adds Body Class
           * for Mobile Side Navbar
           */

          function BodyToggleClass(n){
            if(n === true){
                $body.toggleClass('mob-side-navbar-in');
            } else {
                $body.removeClass('mob-side-navbar-in'); 
            }
          };

          mobileNavbarTargetBtn.on('click',function(){
            BodyToggleClass(true);
          } );

          sideBarCloseBtn.on('click',function(){
            BodyToggleClass(false);
          });
          /**
           * For Mobile Only
           * Slimscroll Attach to the
           * Sidebar Nav
           */

          mobSidebarNav.slimScroll({
              height:'350px'
          })

          
        }


    };

    var BannerSliderScripts = function() {
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

        $window.on("resize", _.debounce(function() {
            setBannerUlSize();
            if(! isMobile.phone && ! isMobile.tablet ){
                location.reload(true);
            }
            
        }, 300));




        var SlickSlider = new slickSliderView({ el: bannerSliderContainer });
        SlickSlider.render({
            slidesToShow: 1,
            slidesToScroll: 1,
            infinite: true,
            arrows: false,
            dots: true,
            autoplay: true,
            fade: true,
            autoplaySpeed: 4000,
            speed: 2000
        });

        // Set Width & Height of Banner Slides

        var BannerSliderWidth = parseInt(bannerSliderContainer.innerWidth());
        var BannerSlideHeight = parseInt(bannerSliderContainer.innerHeight());
        $slides.css({
            'width': BannerSliderWidth,
            'height': WindowHeight
        });


}



    var brandSliderAnim = function() {

        /**
         * Brand Carousel
         */
        var brandSlider = ag('#brandSlider');
        var sliderView = new slickSliderView({ el: brandSlider });
        sliderView.render({
            dots: false,
            arrows: true,
            infinite: true,
            slidesToShow: 4,
            autoplaySpeed: 0,
            speed: 10000,
            autoplay: true,
            responsive: [{

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

                },

                {

                    breakpoint: 1025,
                    settings: {
                        slidesToShow: 3,
                        infinite: true
                    }

                },

                {

                    breakpoint: 992,
                    settings: {
                        slidesToShow: 2,
                        infinite: true
                    }

                }
            ]

        })
    };

    var ProductModalScript = function() {
        var targetModalBtn = ag('.js-product-modal');
        var ThumbSliderContainer = ag(document).find('[data-thumb_slide]');
            /**
             * Render ElevateZoom Function
             */
        function zoomProductImages() {
            var imagedata = ag('[data-zoomy="zoom"]');
            var ElevateZoom = new imageElevateZoomView({ el: imagedata });
            ElevateZoom.render();
             var ThumbSliderView = new slickSliderView({ el: ThumbSliderContainer });
            ThumbSliderView.render({
                infinite: false,
                slidesToShow: 4,
            });
            ThumbSliderContainer.slick('setPosition');
            ThumbSliderContainer.slick('slickPrev');


        };
        /**
         * On Mobile and Desktop
         * Remove Elevate Zoom and 
         * attach the Slick Slider 
         * with full size Image
         */
            var MobileModalProductImageSlider = function(){
                var ThumbSliderView = new slickSliderView({ el: ThumbSliderContainer });
                ThumbSliderView.render({
                    infinite: false,
                    slidesToShow: 1,
                });
                ThumbSliderContainer.slick('setPosition');

                /**
                 * Remove the thumbnail src
                 * from the image and put the large 
                 * image source init
                 */
                var $img = ThumbSliderContainer.find('[data-zoomy="zoom"]');
                _.each($img, function(item){
                    var $item = ag(item);
                    var $imgParent = $item.closest('a');
                    var $largeImgSrc = $imgParent.data('zoom-image');
                    $item.attr({'src': $largeImgSrc });
                },this);
            }
         /**
          * Open and activate all sub events on 
          * Product Button Click Action
          */

        _.each(targetModalBtn, function(item) {
            var Ele = ag(item);
            var _thisModal = Ele.data('target');

            /**
             * Initiate all 
             * events on Bootstrap Modal Load
             */
            ag(_thisModal).on('shown.bs.modal', function() {
                
                /**
                 * Activate Zoom Effect only on desktop
                 * */  
                enquire.register("screen and (min-width:1025px)",{
                    match: function(){
                        zoomProductImages();
                    }
                });
                /**
                 * Activate Product Gallery
                 * with Slick Slider 
                 * On Mobile
                 */

                enquire.register("screen and (max-width:1024px)",{
                    match: function(){
                        MobileModalProductImageSlider();
                    }
                });
               
            });

            ag(_thisModal).on('hidden.bs.modal', function() {
                /**
                 * Unslick Due to reload 
                 * all sliders on Modal easily
                 * 
                 */
                
                 ThumbSliderContainer.slick('unslick');
               });
        }, this);
    }

    var removePlaceHolder = function() {
        ag('input,textarea').focus(function() {
            ag(this).data('placeholder', ag(this).attr('placeholder'))
                .attr('placeholder', '');
        }).blur(function() {
            ag(this).attr('placeholder', ag(this).data('placeholder'));
        });
    }

    var headeronScrollAnimation = function() {
        var $window = ag(window);
        var $header = ag('.site-header');
        var $headerHeight = parseInt($header.outerHeight());
        var $body = DefaultWLModel.get('BODY');
        var $logoWrapper = ag('.site-header__logo-wrapper');
        var $siteHeaderTop = ag('.site-header__top');
        var $siteHeaderLogo = ag('.site-header--logo');
        var $navbar = ag('.site-header__navbar');

        // Add Timeline function

        var tl = new TimelineMax({ paused: true, delay: 0.2 });
        tl.to($header, 0.60, { backgroundColor: 'rgba(14,14,14,0.7)', ease: Linear.easeNone });
        //tl.to($logoWrapper, 0.30,{paddingTop: 36, ease:Linear.easeNone});
        tl.to($navbar, 0.20, { opacity: 0, ease: Linear.easeNone });
        tl.to($siteHeaderLogo, 0.20, { maxWidth: '63.33%', opacity: 0, ease: Linear.easeNone });
        tl.to($siteHeaderTop, 0.30, { minHeight: 'auto', marginBottom: 3, delay: 0.2, ease: Linear.easeNone });
        tl.to($siteHeaderLogo, 0.50, { maxWidth: '63.33%', delay: 0.2, opacity: 1.0, ease: Linear.easeNone });
        tl.to($navbar, 0.6, { opacity: 1.0, delay: 0.2, ease: Linear.easeNone });


        $window.on('scroll', _.throttle(function() {

            var $scroll = $window.scrollTop();
            if ($scroll >= $headerHeight) {
                $body.addClass('header-dark');
                tl.play();
            } else {
                $body.removeClass('header-dark');
                tl.reverse();
            }
        }, 1));



    }

    var superScrolling = function() {
        ag.scrollSpeed(100, 800);
    }

    var AllmobileBannerScript = function() {
        enquire.register("screen and (max-width:991px)", {
            match: function() {
                MobileScripts.bannerHeight();
                MobileScripts.mobSetSliderMarginTop();
                MobileScripts.mobSlickSlider();
                MobileScripts.addBodyClassonOrientation();
                MobileScripts.ShiftingofBrandSectionbelowProduct();
                MobileScripts.MobileHeaderAnimation();
                MobileScripts.visibilityofChatBox();
                MobileScripts.mobileSearchFormAction();
                MobileScripts.mobNavbarAnimation();
            }
        });
    }
    return {
        init: function() {
            BannerSliderScripts();
            brandSliderAnim();
            ProductModalScript();
            removePlaceHolder();
            headeronScrollAnimation();
            //superScrolling();
            AllmobileBannerScript();

           
        }
    }
}());

ag(function() {
    DefaultWLMainScripts.init();
}());