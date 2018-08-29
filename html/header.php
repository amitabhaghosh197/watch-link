<!doctype html>
<!--[if lt IE 7]>      <html class="no-js lt-ie9 lt-ie8 lt-ie7" lang=""> <![endif]-->
<!--[if IE 7]>         <html class="no-js lt-ie9 lt-ie8" lang=""> <![endif]-->
<!--[if IE 8]>         <html class="no-js lt-ie9" lang=""> <![endif]-->
<!--[if gt IE 8]><!--> <html class="no-js" lang=""> <!--<![endif]-->
    <head>
        <meta charset="utf-8">
        <meta http-equiv="X-UA-Compatible" content="IE=edge,chrome=1">
        <title>Watch Link</title>
        <meta name="description" content="">
        <meta name="viewport" content="width=device-width, initial-scale=1">
        <link rel="apple-touch-icon" href="apple-touch-icon.png">


        <link rel="stylesheet" href="assets/css/main.css">

         <script defer="defer" src="assets/js/apps.min.js"></script>
        <script defer="defer" src="assets/js/defaultModel.js"></script>
        <script defer="defer" src="assets/js/defaultViews.js"></script>
        <script defer="defer" src="assets/js/main.js"></script>
        <script defer="defer" src="assets/js/vendor/modernizr-2.8.3-respond-1.4.2.min-webp.js"></script>
    </head>

    <body>
    <!--[if lt IE 8]>
      <p class="browserupgrade">You are using an <strong>outdated</strong> browser. Please <a href="http://browsehappy.com/">upgrade your browser</a> to improve your experience.</p>
    <![endif]-->

    <div id="wathchLinksite" class="page-wrapper" >
       <header class="site-header full-width-grid">
         <div class="site-header__inner-wrapper">
           <div class="site-header__logo-wrapper">
              <a href="" class="site-header--logo">
                <?php include('templates/svg/white-logo.php'); ?>
              </a>
           </div>
             <div class="site-header__navbar-wrapper">
                <section class="site-header__top">
                  <div class="language_section ">
                    <div class="form-group">
                      <span class="header__language">EN</span>
                    </div>
                  </div>
                  <div class="search__section ">
                     <form class="search__section__form" id="" action="/">
                       <div class="form-group">
                         <input type="search"
                         class="form-control search--form-control"
                         placeholder="Search your favourite watches..." >
                           <button class="btn btn--search-submit">
                             <i class="fa fa-search" aria-hidden="true"></i>
                           </button>
                       </div>
                     </form>
                  </div>
                  <div class="locate__section ">
                    <button class="btn btn--locate-us">
                      <i class="icon-locate"></i>Locate us
                   </button>
                  </div>

                </section>
                <!-- site-header__top -->

                  <nav class="site-header__navbar">
                    <ul class="site-header__navbar-nav">
                      <li>
                        <a href="">Home</a>
                      </li>
                      <li>
                        <a href="">Brand</a>
                      </li>
                      <li>
                        <a href="">Men</a>
                      </li>
                      <li>
                        <a href="">Women</a>
                      </li>
                      <li>
                        <a href="">Contact</a>
                      </li>
                    </ul>

                  </nav>
             </div>

         </div>
       </header>
     <!--  For Desktop Only -->
   <div class="full-width-grid" data-screen="desktop">
       <?php include 'banner.php' ; ?>
   </div>
