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
<script>
!function(a,b){"function"==typeof define&&define.amd?define([],function(){return a.svg4everybody=b()}):"object"==typeof module&&module.exports?module.exports=b():a.svg4everybody=b()}(this,function(){function a(a,b,c){if(c){var d=document.createDocumentFragment(),e=!b.hasAttribute("viewBox")&&c.getAttribute("viewBox");e&&b.setAttribute("viewBox",e);for(var f=c.cloneNode(!0);f.childNodes.length;)d.appendChild(f.firstChild);a.appendChild(d)}}function b(b){b.onreadystatechange=function(){if(4===b.readyState){var c=b._cachedDocument;c||(c=b._cachedDocument=document.implementation.createHTMLDocument(""),c.body.innerHTML=b.responseText,b._cachedTarget={}),b._embeds.splice(0).map(function(d){var e=b._cachedTarget[d.id];e||(e=b._cachedTarget[d.id]=c.getElementById(d.id)),a(d.parent,d.svg,e)})}},b.onreadystatechange()}function c(c){function e(){for(var c=0;c<o.length;){var h=o[c],i=h.parentNode,j=d(i),k=h.getAttribute("xlink:href")||h.getAttribute("href");if(!k&&g.attributeName&&(k=h.getAttribute(g.attributeName)),j&&k){if(f)if(!g.validate||g.validate(k,j,h)){i.removeChild(h);var l=k.split("#"),q=l.shift(),r=l.join("#");if(q.length){var s=m[q];s||(s=m[q]=new XMLHttpRequest,s.open("GET",q),s.send(),s._embeds=[]),s._embeds.push({parent:i,svg:j,id:r}),b(s)}else a(i,j,document.getElementById(r))}else++c,++p}else++c}(!o.length||o.length-p>0)&&n(e,67)}var f,g=Object(c),h=/\bTrident\/[567]\b|\bMSIE (?:9|10)\.0\b/,i=/\bAppleWebKit\/(\d+)\b/,j=/\bEdge\/12\.(\d+)\b/,k=/\bEdge\/.(\d+)\b/,l=window.top!==window.self;f="polyfill"in g?g.polyfill:h.test(navigator.userAgent)||(navigator.userAgent.match(j)||[])[1]<10547||(navigator.userAgent.match(i)||[])[1]<537||k.test(navigator.userAgent)&&l;var m={},n=window.requestAnimationFrame||setTimeout,o=document.getElementsByTagName("use"),p=0;f&&e()}function d(a){for(var b=a;"svg"!==b.nodeName.toLowerCase()&&(b=b.parentNode););return b}return c});
</script>
<script>svg4everybody(); </script>
    </head>

    <body>
    <!--[if lt IE 8]>
      <p class="browserupgrade">You are using an <strong>outdated</strong> browser. Please <a href="http://browsehappy.com/">upgrade your browser</a> to improve your experience.</p>
    <![endif]-->

    <div id="wathchLinksite" class="page-wrapper" >
      <?php
      /**
       * Desktop Header
       * Hidden upto 991px
      */
       ?>
       <header class="site-header full-width-grid hidden-upto-991">
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
                     <form class="search__section__form" id="" action="/" >
                       <div class="form-group">
                         <input type="search"
                         class="form-control search--form-control"
                         placeholder="Search your favourite watches..." data-role="none">
                           <button class="btn btn--search-submit" data-role="none">
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
                        <a href="" data-role="none">Home</a>
                      </li>
                      <li>
                        <a href="" data-role="none">Brand</a>
                      </li>
                      <li>
                        <a href="" data-role="none">Men</a>
                      </li>
                      <li>
                        <a href="" data-role="none">Women</a>
                      </li>
                      <li>
                        <a href="javascript:void(0);" data-toggle="modal" data-target="#contactModal" data-role="none">Contact</a>
                      </li>
                    </ul>

                  </nav>
             </div>

         </div>
       </header>
       <?php
       /**
        * Mobile Header Visible Upto 991px
       */
         include 'mob-header.php';
       ?>
     <!--  For Desktop Only -->
   <div class="full-width-grid hidden-upto-1023" >
       <?php include 'banner.php' ; ?>
   </div>
   <!-- For Mobile & Tablet Potrait -->
   <div class="hidden-from-992">
      <?php include 'mob-banner.php'; ?>
   </div>
