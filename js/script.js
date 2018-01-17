"use strict";!function(o,t){o(window).load(function(){Modernizr.objectfit||o(".view img").each(function(){o(this).css({height:"auto",width:"100%"}),"none"==o(this).css("display")&&(o(this).css("display","block"),o(this).css({height:"auto",width:"100%"}),o(this).css("display",""))})})}(jQuery,Drupal),function(o,t){t.behaviors.my_custom_behavior={attach:function(o,t){}},o(document).ready(function(){function t(){for(var t=arguments.length,e=Array(t),i=0;i<t;i++)e[i]=arguments[i];Array.prototype.slice.apply(arguments).forEach(function(t){o(".block ."+t+" .views-row").length<2&&o("."+t).parents(".block").hide()})}function e(t,e){if(e){o("."+e+" ."+t+":last-of-type").each(function(t){var e=o(this).width();o(this).siblings().length>0&&o(this).prev().width()+30<e&&o(this).hide()})}else{o("."+t+":last-of-type").each(function(t){var e=o(this).width();o(this).siblings().length>0&&o(this).prev().width()+30<e&&o(this).hide()})}}t("view-more-from-same-story","view-more-from-same-theme","view-more-from-same-person"),e("views-row","view-more-from-same-theme"),e("views-row","view-more-from-same-story"),e("views-row","view-more-from-same-person"),o(".views-row").hover(function(){o(this).children(".views-field-title").find("a").css({color:"#ef5223"})}),o(".views-row").mouseleave(function(){o(this).children(".views-field-title").find("a").css({color:""})})})}(jQuery,Drupal),function(o,t){t.behaviors.my_custom_behavior={attach:function(o,t){}},o(document).ready(function(){o(".carousel").carousel({interval:!1})})}(jQuery,Drupal),function(o,t){o(document).ready(function(){function t(){return!!o("#toolbar")}o(window).on("scroll",function(){var e=o("#navigation").height()+o("#navigation").offset().top;o(window).scrollTop()>e?(o("#page").css("margin-top","5em"),o(".nav-group1-desktop").css("position","fixed"),o(".nav-group1-desktop").css("top","0"),o(".nav-group1-desktop").css("width","100%"),t()&&o(".nav-group1-desktop").css("top",o("#toolbar").height())):(o("#page").css("margin-top",""),o(".nav-group1-desktop").css("position",""),o(".nav-group1-desktop").css("top",""))})})}(jQuery,Drupal),function(o,t){t.behaviors.my_custom_behavior={attach:function(o,t){}},o(document).ready(function(){o(".itemLink").hover(function(){o(this).siblings(".itemTitle").children(".itemTitleText").css({textDecoration:"underline"})}),o(".itemLink").mouseleave(function(){o(this).siblings(".itemTitle").children(".itemTitleText").css({textDecoration:"none"})})})}(jQuery,Drupal),function(o,t){t.behaviors.my_custom_behavior={attach:function(o,t){}},o(document).ready(function(){})}(jQuery,Drupal),function(o,t){o(document).ready(function(){function t(t){t.siblings(".menu-attach-block-wrapper").addClass("open"),o(window).width()>767&&o("#main-wrapper").css("filter","brightness(0.5)")}function e(t){t.siblings(".menu-attach-block-wrapper").removeClass("open"),o(window).width()>767&&o("#main-wrapper").css("filter","brightness(1)")}function i(t){t.parent(".menu-attach-block-wrapper").removeClass("open"),o(window).width()>767&&o("#main-wrapper").css("filter","brightness(1)")}var n;o(".nav-group1-desktop > .menu > .menu__item > a").on("mouseenter",function(){clearTimeout(n),o(this).parent(".menu__item").siblings().each(function(){o(this).find(".menu-attach-block-wrapper").removeClass("open")}),t(o(this))}),o(".nav-group1-desktop > .menu > .menu__item > a").on("mouseleave",function(){var t=o(this);n=setTimeout(function(){e(t)},1e3)}),o(".menu-attach-block-wrapper > .block ").on("mouseenter",function(){clearTimeout(n)}),o(".menu-attach-block-wrapper > .block ").on("mouseleave",function(){i(o(this))})})}(jQuery,Drupal),function(o,t){t.behaviors.my_custom_behavior={attach:function(o,t){}},o(document).ready(function(){o(".region-sitemap-nav").removeAttr("style"),o(".toggle_largeScreens.fa-bars").click(function(){o(window).scrollTop>o(".nav-group1-desktop").height()&&o(".nav-group1-desktop").css("visibility","hidden"),o(".region-sitemap-nav").css("top",o("#toolbar").length>0?o("#toolbar").height():0)}),o(".toggle_largeScreens.fa-times").click(function(){o(".nav-group1-desktop").css("visibility","visible")}),o(".toggle").on("click",function(){o(".nav-group-mobile, .nav-group-mobile .menu, #main-wrapper, .mobile-search-form, .logo_lang").toggleClass("toggled-on"),o(this).toggleClass("fa-bars").toggleClass("fa-times")}),o(".toggle_largeScreens").on("click",function(){o(".region-sitemap-nav").toggleClass("toggled-on"),o(".region-sitemap-nav").hasClass("toggled-on")?o("body").css({overflow:"hidden"}):o("body").css({overflow:"auto"})});var t=0;if(o(window).scroll(function(e){if("fixed"==o(".nav-group").css("position")){var i=o(this).scrollTop();i>t&&i>100?o(".nav-group").hasClass("toggled-on")||o(".nav-group").fadeOut(100):o(".nav-group").hasClass("toggled-on")||o(".nav-group").fadeIn(100),t=i}}),o("body").hasClass("logged-in")){var e=o("div.toolbar").height();"fixed"==o(".nav-group-mobile").css("position")&&o(".nav-group-mobile").css({top:e})}})}(jQuery,Drupal),function(o,t){o(window).load(function(){if(0!=o(".sidebar-first").length){var t=function(){return!!o("#toolbar")&&o("#toolbar").height()},e=function(){return!!o("#admin-menu")&&o("#admin-menu").height()},i=function(){return"fixed"==o(".nav-group1-desktop").css("position")&&o(".nav-group1-desktop").height()},n=function(){var t=0;return o(".status").each(function(){t+=o(this).height()}),0!==t&&t},s=o(".sidebar-first").eq(0),a=o(".sidebar-first").find(".block").first().eq(0),r=a.width(),c=a.height(),l=(a.offset().top,o(".main .content").height()),u=(o(".main .content").offset().top,o(".sidebar-first > .inside").height()),h=o(".sidebar-first").offset().top+u;o(".nav-group1-desktop").height(),o("#toolbar").height();a.width(r);if(!!window.MSInputMethodContext&&!!document.documentMode)return;if(l<u)for(;l<s.height();)s.find(".block").last().hide();o(window).on("scroll",function(){var s=o(".main .content").height(),r=o(".main .content").offset().top+s;s>1.75*u&&(o(window).scrollTop()>=h?o(window).scrollTop()<r-c-i()-t()-e()?a.hasClass("sticky")||(a.addClass("sticky"),a.css({top:a.scrollTop()+i()+t()})):(a.css({top:r-c-2*i()-t()-4*e()-n()}),a.addClass("at-bottom")):(a.removeClass("sticky"),a.css({top:0+i()+t()})),o(window).scrollTop()<r-c-i()-t()&&a.hasClass("at-bottom")&&(a.removeClass("at-bottom"),a.css({top:0+i()+t()})),o(window).scrollTop()<=u&&a.hasClass("sticky")&&a.removeClass("sticky"))})}})}(jQuery,Drupal),function(o,t){t.behaviors.my_custom_behavior={attach:function(o,t){}},o(document).ready(function(){})}(jQuery,Drupal);