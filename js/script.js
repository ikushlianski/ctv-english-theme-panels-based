"use strict";!function(t,e){t(window).load(function(){})}(jQuery,Drupal),function(t,e){e.behaviors.my_custom_behavior={attach:function(t,e){}},t(document).ready(function(){function e(){for(var e=arguments.length,o=Array(e),i=0;i<e;i++)o[i]=arguments[i];Array.prototype.slice.apply(arguments).forEach(function(e){t(".block ."+e+" .views-row").length<2&&t("."+e).parents(".block").hide()})}function o(e,o){if(o){t("."+o+" ."+e+":last-of-type").each(function(e){var o=t(this).width();t(this).siblings().length>0&&t(this).prev().width()+30<o&&t(this).hide()})}else{t("."+e+":last-of-type").each(function(e){var o=t(this).width();t(this).siblings().length>0&&t(this).prev().width()+30<o&&t(this).hide()})}}e("view-more-from-same-story","view-more-from-same-theme","view-more-from-same-person"),o("views-row","view-more-from-same-theme"),o("views-row","view-more-from-same-story"),o("views-row","view-more-from-same-person"),t(".views-row").hover(function(){t(this).children(".views-field-title").find("a").css({color:"#ef5223"})}),t(".views-row").mouseleave(function(){t(this).children(".views-field-title").find("a").css({color:""})})})}(jQuery,Drupal),function(t,e){e.behaviors.my_custom_behavior={attach:function(t,e){}},t(document).ready(function(){t(".carousel").carousel({interval:!1})})}(jQuery,Drupal),function(t,e){e.behaviors.my_custom_behavior={attach:function(t,e){}},t(document).ready(function(){t(".itemLink").hover(function(){t(this).siblings(".itemTitle").children(".itemTitleText").css({textDecoration:"underline"})}),t(".itemLink").mouseleave(function(){t(this).siblings(".itemTitle").children(".itemTitleText").css({textDecoration:"none"})})})}(jQuery,Drupal),function(t,e){e.behaviors.my_custom_behavior={attach:function(t,e){}},t(document).ready(function(){})}(jQuery,Drupal),function(t,e){t(document).ready(function(){function e(e){e.siblings(".menu-attach-block-wrapper").addClass("open"),t(window).width()>767&&t("#main-wrapper").css("filter","brightness(0.5)")}function o(e){e.siblings(".menu-attach-block-wrapper").removeClass("open"),t(window).width()>767&&t("#main-wrapper").css("filter","brightness(1)")}function i(e){e.parent(".menu-attach-block-wrapper").removeClass("open"),t(window).width()>767&&t("#main-wrapper").css("filter","brightness(1)")}t(".menu-attach-block-wrapper").width(t(".nav-menu-div").first().width()),t(window).resize(function(){var e=t(".nav-menu-div").first().width();t(".menu-attach-block-wrapper").width(e);var o=t(".menu-attach-block-wrapper").find(".block").css("paddingLeft"),i=t(".menu-attach-block-wrapper").find(".block").css("paddingRight");t(".menu-attach-block-wrapper").find(".block").width(e-o-i)});var n;t("a.attached-block").on("mouseenter",function(){if(clearTimeout(n),t(this).parent(".attached-block").siblings().each(function(){t(this).find(".menu-attach-block-wrapper").removeClass("open")}),e(t(this)),Modernizr.objectfit){var o=t(this).siblings(".menu-attach-block-wrapper").children(".block").find("img").first().width();t(this).siblings(".menu-attach-block-wrapper").children(".block").find("img").first().height(o/16*9);t(this).siblings(".menu-attach-block-wrapper").children(".block").find("img").first().height();t(this).siblings(".menu-attach-block-wrapper").children(".block").find("img").each(function(e){t(this).height(o/16*9)})}}),t("a.attached-block").on("mouseleave",function(){var e=t(this);n=setTimeout(function(){o(e)},1e3)}),t(".menu-attach-block-wrapper > .block ").on("mouseenter",function(){clearTimeout(n)}),t(".menu-attach-block-wrapper > .block ").on("mouseleave",function(){i(t(this))})})}(jQuery,Drupal),function(t,e){e.behaviors.my_custom_behavior={attach:function(t,e){}},t(document).ready(function(){t(".region-sitemap-nav").removeAttr("style"),t(".toggle").on("click",function(){t(".nav-group-mobile, .nav-group-mobile .menu, #main-wrapper, .mobile-search-form, .logo_lang").toggleClass("toggled-on"),t(this).toggleClass("fa-bars").toggleClass("fa-times")}),t(".toggle_largeScreens").on("click",function(){t(".region-sitemap-nav").toggleClass("toggled-on"),t(".region-sitemap-nav").hasClass("toggled-on")?t("body").css({overflow:"hidden"}):t("body").css({overflow:"auto"})});var e=0;if(t(window).scroll(function(o){if("fixed"==t(".nav-group").css("position")){var i=t(this).scrollTop();i>e&&i>100?t(".nav-group").hasClass("toggled-on")||t(".nav-group").fadeOut(100):t(".nav-group").hasClass("toggled-on")||t(".nav-group").fadeIn(100),e=i}}),t("body").hasClass("logged-in")){var o=t("div.toolbar").height();"fixed"==t(".nav-group").css("position")&&t(".nav-group").css({top:o})}})}(jQuery,Drupal),function(t,e){e.behaviors.my_custom_behavior={attach:function(t,e){}},t(document).ready(function(){if(0!=t("#sidebar-first").length){var e=function(){return!!t("#toolbar")},o=t("#sidebar-first .section").eq(0),i=t("#sidebar-first .section").children().first().eq(0),n=i.width(),s=i.height(),a=(i.offset().top,t(".node .content").height()),r=t(".node .content").offset().top+a,c=t("#sidebar-first .section").height(),l=t("#sidebar-first .section").offset().top+c,h=t("#toolbar").height();if(i.width(n),a<c)for(;a<o.height();)o.children().last().hide();t(window).on("scroll",function(){a>1.75*c&&(t(window).scrollTop()>=l?t(window).scrollTop()<r-s-h?i.hasClass("sticky")||(i.addClass("sticky"),e()&&i.css({top:i.scrollTop()+h})):(i.addClass("at-bottom"),i.css({top:r-s})):(i.removeClass("sticky"),i.css({top:0})),t(window).scrollTop()<r-s-h&&i.hasClass("sticky")&&i.hasClass("at-bottom")&&(i.removeClass("at-bottom"),e()?i.css({top:i.scrollTop()+h}):i.css({top:0})),t(window).scrollTop()<=c&&i.hasClass("sticky")&&i.removeClass("sticky"))})}})}(jQuery,Drupal),function(t,e){e.behaviors.my_custom_behavior={attach:function(t,e){}},t(document).ready(function(){})}(jQuery,Drupal);