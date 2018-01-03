(function ($, Drupal) {

  $(document).ready(function(){

    $(window).on("scroll", function(){
      let menuBottomCoords = $("#navigation").height() + $("#navigation").offset().top;
      if ( $(window).scrollTop() > menuBottomCoords ) {
        $('#page').css("margin-top", "5em");
        $('.nav-group1-desktop').css("position", "fixed");
        $('.nav-group1-desktop').css("top", "0");
      } else {
        $('#page').css("margin-top", "");
        $('.nav-group1-desktop').css("position", "");
      }
    });

  });

})(jQuery, Drupal);
