/**
 * @file
 * JavaScript file for hiding sidebar elements if they are longer than main content.
 *
 * Also makes one of sidebar blocks sticky
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
    if ( $("#sidebar-first").length != 0 ) {
      let sidebar = $("#sidebar-first .section").eq(0);
      let lastSidebarElem = $("#sidebar-first .section").children().first().eq(0);
      let lastSidebarElemWidth = lastSidebarElem.width();
      let lastSidebarElemHeight = lastSidebarElem.height();
      let lastSidebarElemOffset = lastSidebarElem.offset().top;
      let mainContentHeight = $('.node .content').height();
      let mainContentEndY = $('.node .content').offset().top + mainContentHeight;
      let sidebarContentInitHeight = $("#sidebar-first .section").height();
      let sidebarContentEndY = $("#sidebar-first .section").offset().top + sidebarContentInitHeight;
      var toolbarHeight = $("#toolbar").height();
      lastSidebarElem.width(lastSidebarElemWidth);

      function checkForToolbar() {
        if ( $("#toolbar") ) {
          return true;
        } else {
          return false;
        }
      }

      if (mainContentHeight < sidebarContentInitHeight) {
        while (mainContentHeight < sidebar.height()) {
          sidebar.children().last().hide();
        }
      }

      $(window).on("scroll", function(){
        if ( mainContentHeight > (sidebarContentInitHeight * 1.75) ) {
          // we scroll below last sidebar elem
          if ( $(window).scrollTop() >= sidebarContentEndY ) {
            // are we inside the main content height minus the height of the last sidebar elem?
            if ( $(window).scrollTop() < (mainContentEndY - lastSidebarElemHeight - toolbarHeight) ) {
              if ( !lastSidebarElem.hasClass("sticky") ) {
                // we scroll below it and don't have sticky class
                lastSidebarElem.addClass("sticky");
                if ( checkForToolbar() ) {
                  lastSidebarElem.css({"top": lastSidebarElem.scrollTop() + toolbarHeight});
                };
              }
            } else {
              lastSidebarElem.addClass("at-bottom");
              lastSidebarElem.css({"top": (mainContentEndY - lastSidebarElemHeight)});
            }
          } else {
            lastSidebarElem.removeClass("sticky");
            lastSidebarElem.css({"top": 0});
          }

          if ( $(window).scrollTop() < (mainContentEndY - lastSidebarElemHeight - toolbarHeight) ) {
            // we scroll above last sidebar elem and it already has stick class
            // are we inside the main content height?
            if ( lastSidebarElem.hasClass("sticky") ) {
              if (lastSidebarElem.hasClass("at-bottom")) {
                lastSidebarElem.removeClass("at-bottom");
                if ( checkForToolbar() ) {
                  lastSidebarElem.css({"top": lastSidebarElem.scrollTop() + toolbarHeight});
                } else {
                  lastSidebarElem.css({"top": 0});
                }
              }
            }
          }

          if ( $(window).scrollTop() <= sidebarContentInitHeight ) {
            if ( lastSidebarElem.hasClass("sticky") ) {
              lastSidebarElem.removeClass("sticky");
            }
          }
        }
      });
    }

  });

})(jQuery, Drupal);
