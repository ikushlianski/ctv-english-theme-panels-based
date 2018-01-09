/**
 * @file
 * A JavaScript file for the theme.
 *
 * In order for this JavaScript to be loaded on pages, see the instructions in
 * the README.txt next to this file.
 */

// JavaScript should be made compatible with libraries other than jQuery by
// wrapping it with an "anonymous closure". See:
// - https://drupal.org/node/1446420
// - http://www.adequatelygood.com/2010/3/JavaScript-Module-Pattern-In-Depth
(function ($, Drupal) {



  // To understand behaviors, see https://drupal.org/node/756722#behaviors
  Drupal.behaviors.my_custom_behavior = {
    attach: function (context, settings) {
      // Place your code here.
    }
  };

  $(document).ready(function(){

    // Initialize elements' behavior
    $('.region-sitemap-nav').removeAttr('style');
    $(".toggle_largeScreens.fa-bars").click(function(){
      if ( $(window).scrollTop > $('.nav-group1-desktop').height() ) {
        $('.nav-group1-desktop').css("visibility", "hidden");
      }
      $('.region-sitemap-nav').css("top", $("#toolbar").length > 0 ? $("#toolbar").height() : 0 );
    });
    $(".toggle_largeScreens.fa-times").click(function(){
      $('.nav-group1-desktop').css("visibility", "visible");
    });

    // mobile menu toggle behavior
    $('.toggle').on('click', function () {
      $('.nav-group-mobile, .nav-group-mobile .menu, #main-wrapper, .mobile-search-form, .logo_lang').toggleClass('toggled-on');
      $(this).toggleClass('fa-bars').toggleClass('fa-times');
    });

    // large screen toggle menu behavior
    $('.toggle_largeScreens').on('click', function () {
      $('.region-sitemap-nav').toggleClass('toggled-on');
      // $('.region-sitemap-nav .toggle_largeScreens').toggleClass('fa-bars').toggleClass('fa-times');
      if ( $('.region-sitemap-nav').hasClass('toggled-on') ) {
        $('body').css({'overflow':'hidden'});
      } else {
        $('body').css({'overflow':'auto'});
      }
    });


    // if ( $(window).width() > 768 ) {
    //   // $('.login-menu').detach();
    //   $('.login-menu').appendTo('.login-menu-hider');
    //   $('.login-menu').css({});
    //   if ($('.login-menu-hider').children().length > 0) {
    //     $('.login-menu-hider-link').show();
    //   }
    // }

    // $(window).on("click", function(event){
    //   if ($('.login-menu').hasClass('toggled-on') && event.target.className != "login-menu-hider") {
    //     $('.login-menu').removeClass('toggled-on');
    //     event.stopPropagation();
    //   }
    // });

    // $('.login-menu-hider').on('click', function(event){
    //   if ( !$('.login-menu').hasClass('toggled-on') ) {
    //     $('.login-menu').addClass('toggled-on');
    //     event.stopPropagation();
    //   }
    // });

    // hide menu on scroll down and show on scroll up
    var lastScrollTop = 0;
    $(window).scroll(function(event){
      if ( $('.nav-group').css('position') == "fixed" ) {
        var st = $(this).scrollTop();
        if (st > lastScrollTop && st > 100){
          // downscroll
          if (!$('.nav-group').hasClass('toggled-on')) {$('.nav-group').fadeOut(100);}
        } else {
          // upscroll
          if (!$('.nav-group').hasClass('toggled-on')) {$('.nav-group').fadeIn(100);}
        }
        lastScrollTop = st;
      }
    });


    // move top-fixed menu under toolbar if user logged in
    if ($('body').hasClass('logged-in')) {
      var toolbarHeight = $('div.toolbar').height();
      if ($(".nav-group-mobile").css('position') == 'fixed') {
        $(".nav-group-mobile").css({"top":toolbarHeight});
      }
      // $(".messages").css({"marginTop":toolbarHeight});
    }


  });

})(jQuery, Drupal);
