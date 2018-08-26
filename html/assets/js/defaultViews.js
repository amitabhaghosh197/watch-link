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
})