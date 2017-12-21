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

  $(document).ready(function(){

    $(".menu-attach-block-wrapper").width($(".nav-menu-div").first().width());

    $(window).resize(function(){
      let targetSize = $(".nav-menu-div").first().width();
      $(".menu-attach-block-wrapper").width(targetSize);
      let pdleft = $(".menu-attach-block-wrapper").find(".block").css("paddingLeft");
      let pdright = $(".menu-attach-block-wrapper").find(".block").css("paddingRight");
      $(".menu-attach-block-wrapper").find(".block").width(targetSize - pdleft - pdright);

    });

    var timer;

    $("a.attached-block").on("mouseenter", function() {
      clearTimeout(timer);
      $(this).parent(".attached-block").siblings().each(function(){
        $(this).find(".menu-attach-block-wrapper").removeClass("open");
      });
      openSubmenu($(this));

      // resize images inside megamenu
      if ( Modernizr.objectfit ) {
        let thisBlockImgWidth = $(this).siblings(".menu-attach-block-wrapper").children(".block").find('img').first().width();
        $(this).siblings(".menu-attach-block-wrapper").children(".block").find('img').first().height(thisBlockImgWidth/16*9);
        let thisBlockImgHeight = $(this).siblings(".menu-attach-block-wrapper").children(".block").find('img').first().height();

        $(this).siblings(".menu-attach-block-wrapper").children(".block").find('img').each(function(item){
          $(this).height(thisBlockImgWidth/16*9);
        });
      }
    });

    $("a.attached-block").on("mouseleave", function() {
        let self = $(this);
        timer = setTimeout(function(){
          closeSubmenu(self)
        }
        , 1000);
    });

    $(".menu-attach-block-wrapper > .block ").on("mouseenter", function() {
      clearTimeout(timer);
    });
    $(".menu-attach-block-wrapper > .block ").on("mouseleave", function() {
      closeSubmenuOnBlockLeave($(this));
    });


    function openSubmenu(thisObj) {
      thisObj.siblings(".menu-attach-block-wrapper").addClass("open");
      if ($(window).width() > 767) {
        $("#main-wrapper").css("filter", "brightness(0.5)");
      }
    }
    function closeSubmenu(thisObj) {
      thisObj.siblings(".menu-attach-block-wrapper").removeClass("open");
      if ($(window).width() > 767) {
        $("#main-wrapper").css("filter", "brightness(1)");
      }
    }
    function closeSubmenuOnBlockLeave(thisObj) {
      thisObj.parent(".menu-attach-block-wrapper").removeClass("open");
      if ($(window).width() > 767) {
        $("#main-wrapper").css("filter", "brightness(1)");
      }
    }

  });

})(jQuery, Drupal);
