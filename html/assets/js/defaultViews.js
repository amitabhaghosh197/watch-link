const slickSliderView = Backbone.View.extend({
	el:'',
	initialialize: function(){

	},
	render:function(n){
		var Element  = this.$el;
		if(Element.length){
			_.each(Element,function(element){
				var _thisSlider = ag(element);
				 _thisSlider.slick(n);
			},this);
		}

    return this;
	}
});

const imageElevateZoomView = Backbone.View.extend({
	el:'',
	render:function(options){
		var $el = this.$el;
		if($el.length){
			_.each($el, function(item){
				 var Element = ag(item);
				 var $id = Element.attr('id');
				 var $datagal =  Element.data('gall');
				 //console.log($datagal);

				 //console.log($sliderContainer);

				  ag('#'+$id).elevateZoom({
								    zoomType: "inner",
								cursor: "crosshair",
								gallery:  $datagal,
								galleryActiveClass:'active'

           });

       // Change of Click Event on Gallery Thumbnails to
			 // Hover Event
			   var _a = ag('#'+$datagal + ' a');
				_a.on('mouseenter',function(e){
				     e.preventDefault();
				    ag(this).trigger('click');
			   });

			}, this);
		}

		return this;
	}
});
