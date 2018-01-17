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



  $(window).load(function(){
    if ( $(".sidebar-first").length != 0 ) {
      let sidebar = $(".sidebar-first").eq(0);
      let lastSidebarElem = $(".sidebar-first").find('.block').first().eq(0);
      let lastSidebarElemWidth = lastSidebarElem.width();
      let lastSidebarElemHeight = lastSidebarElem.height();
      let lastSidebarElemOffset = lastSidebarElem.offset().top;
      let mainContentHeight = $('.main .content').height();
      let mainContentEndY = $('.main .content').offset().top + mainContentHeight;
      let sidebarContentInitHeight = $(".sidebar-first > .inside").height();
      let sidebarContentEndY = $(".sidebar-first").offset().top + sidebarContentInitHeight;
      var stickyMenuHeight = $(".nav-group1-desktop").height();
      var toolbarHeight = $("#toolbar").height();
      lastSidebarElem.width(lastSidebarElemWidth);
      var isIE11 = !!window.MSInputMethodContext && !!document.documentMode;
      if (isIE11) {
        return;
      }

      function checkForToolbar() {
        if ( $("#toolbar") ) {
          return $("#toolbar").height();
        } else {
          return false;
        }
      }

      function checkForAdminMenu() {
        if ( $("#admin-menu") ) {
          return $("#admin-menu").height();
        } else {
          return false;
        }
      }

      function checkForStickyMenu() {
        if ( $(".nav-group1-desktop").css("position") == 'fixed' ) {
          return $(".nav-group1-desktop").height();
        } else {
          return false;
        }
      }

      function checkForStatus() {
        let statusHeight = 0;
        $(".status").each(function(){
          statusHeight += $(this).height();
        });
        return statusHeight === 0 ? false : statusHeight;
      }

      if (mainContentHeight < sidebarContentInitHeight) {
        while (mainContentHeight < sidebar.height()) {
          sidebar.find(".block").last().hide();
        }
      }

      $(window).on("scroll", function(){
        let mainContentHeight = $('.main .content').height();
        let mainContentEndY = $('.main .content').offset().top + mainContentHeight;
        if ( mainContentHeight > (sidebarContentInitHeight * 1.75) ) {
          // we scroll below last sidebar elem
          if ( $(window).scrollTop() >= sidebarContentEndY ) {
            // are we inside the main content height minus the height of the last sidebar elem?
            if ( $(window).scrollTop() < (mainContentEndY - lastSidebarElemHeight - checkForStickyMenu() - checkForToolbar() - checkForAdminMenu()) ) {
              if ( !lastSidebarElem.hasClass("sticky") ) {
                // we scroll below it and don't have sticky class
                lastSidebarElem.addClass("sticky");
                lastSidebarElem.css({"top": (lastSidebarElem.scrollTop() + checkForStickyMenu() + checkForToolbar() )});
              }
            } else {
              lastSidebarElem.css({ "top": mainContentEndY - lastSidebarElemHeight - (checkForStickyMenu()*2) - checkForToolbar() - checkForAdminMenu()*4 - checkForStatus() });
              lastSidebarElem.addClass("at-bottom");
            }
          } else {
            lastSidebarElem.removeClass("sticky");
            lastSidebarElem.css({"top": 0 + checkForStickyMenu() + checkForToolbar()});
          }

          if ( $(window).scrollTop() < (mainContentEndY - lastSidebarElemHeight - checkForStickyMenu() - checkForToolbar() ) ) {
            // we scroll above last sidebar elem and it already has sticky class
            // are we inside the main content height?
            // if ( lastSidebarElem.hasClass("sticky") ) {
              if (lastSidebarElem.hasClass("at-bottom")) {
                lastSidebarElem.removeClass("at-bottom");
                lastSidebarElem.css({"top": 0 + checkForStickyMenu() + checkForToolbar()});
              }
            // }
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
