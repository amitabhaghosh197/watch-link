const DefaultModel = Backbone.Model.extend({
    defaults: {
        Win_W: viewportSize.getWidth(),
        Win_H: viewportSize.getHeight(),

        BODY: ag('body'),
        PAGEWRAPPER: ag('.page-wrapper'),
        BANNERSLIDER: ag('#deskTopBannerSlider'),
        MOBILEBANNERWRAPPER: ag('.js-mob-banner-container'),
        
    }
})