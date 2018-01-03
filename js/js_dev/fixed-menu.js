(function ($, Drupal) {

  $(document).ready(function(){

    function checkForToolbar() {
      if ( $("#toolbar") ) {
        return true;
      } else {
        return false;
      }
    }

    $(window).on("scroll", function(){
      let menuBottomCoords = $("#navigation").height() + $("#navigation").offset().top;
      if ( $(window).scrollTop() > menuBottomCoords ) {
        $('#page').css("margin-top", "5em");
        $('.nav-group1-desktop').css("position", "fixed");
        $('.nav-group1-desktop').css("top", "0");
        if (checkForToolbar()) {
          $('.nav-group1-desktop').css("top", $("#toolbar").height());
        }
      } else {
        $('#page').css("margin-top", "");
        $('.nav-group1-desktop').css("position", "");
        $('.nav-group1-desktop').css("top", "");
      }
    });

  });

})(jQuery, Drupal);
