module.exports = {

	root_dir : "../html",
	assets_dir : "../html/assets",
	js_files : {
		 jQueryLib: '/js/vendor/jquery-1.11.2.min.js',
        jQueryMigrate: '/js/vendor/jquery-migrate-1.4.1.js',
        jQueryMobile :'/js/vendor/jquery.mobile-events.js',
        bootstrap: '/js/vendor/bootstrap4/bootstrap.bundle.min.js',
        enquire: '/lib/enquire/enquire.min.js',
        isMobile :'/lib/isMobile/isMobile.min.js',
        calc: '/lib/other-js/calc.min.js',
        bowser: '/lib/other-js/bowser.js',
        buggyFill: '/lib/other-js/viewport-units-buggyfill.js',
        viewportSize: '/lib/other-js/viewportSize-min.js',
        imagesLoaded: '/lib/other-js/imagesloaded.pkgd.min.js',
				mousewheel: '/lib/scrolls/jquery.mousewheel.min.js',
        scrollSpeed: '/lib/scrolls/jQuery.scrollSpeed.js',
        niceScroll: '/lib/scrolls/jquery.nicescroll.min.js',
        slimScroll :'/lib/scrolls/jquery.slimscroll.min.js',
        slick: '/lib/slickSlideer/slick.min.js',
        Typed: '/lib/typed/typed.min.js',
        simpleParallax: '/lib/scrolls/parallax.min.js',
        scrollify: '/lib/scrolls/jquery.scrollify.js',
        waypoints: '/lib/waypoint/jquery.waypoints.min.js',
        inview: '/lib/inview/jquery.inview.min.js',
        tweenMax: '/lib/greensock-js/TweenMax.min.js',
        GSAPScrollto: '/lib/greensock-js/plugins/ScrollToPlugin.min.js',
				elevateZoom : '/lib/elevatezoom/jquery.elevatezoom.js',
        //pictureFillPlugin : '/lib/picturefill/pf.intrinsic.min.js',
        pictureFill : '/lib/picturefill/picturefill.js',
        underScore: '/js/underscore-min.js',
        backBone: '/js/backbone.js',
        noConflictJS: '/js/noConflict.js'
	},
	jsFilesArr : function(){
       var assets_Dir = this.assets_dir;
       this.arr = [
         assets_Dir + this.js_files.jQueryLib,
         assets_Dir + this.js_files.jQueryMigrate,
         assets_Dir + this.js_files.jQueryMobile,
         assets_Dir + this.js_files.bootstrap,
         assets_Dir + this.js_files.enquire,
         assets_Dir + this.js_files.isMobile,
         assets_Dir + this.js_files.calc,
         assets_Dir + this.js_files.bowser,
         assets_Dir + this.js_files.buggyFill,
         assets_Dir + this.js_files.viewportSize,
         assets_Dir + this.js_files.imagesLoaded,
				 assets_Dir + this.js_files.mousewheel,
         assets_Dir + this.js_files.scrollSpeed,
         assets_Dir + this.js_files.niceScroll,
         assets_Dir + this.js_files.slimScroll,
         assets_Dir + this.js_files.slick,
         assets_Dir + this.js_files.Typed,
         assets_Dir + this.js_files.simpleParallax,
         assets_Dir + this.js_files.scrollify,
         assets_Dir + this.js_files.waypoints,
         assets_Dir + this.js_files.inview,
         assets_Dir + this.js_files.tweenMax,
         assets_Dir + this.js_files.GSAPScrollto,
				 assets_Dir + this.js_files.elevateZoom,
         //assets_Dir + this.js_files.pictureFillPlugin,
         assets_Dir + this.js_files.pictureFill,
         assets_Dir + this.js_files.underScore,
         assets_Dir + this.js_files.backBone,
         assets_Dir + this.js_files.noConflictJS


       ];

       return this.arr;
	}
}
