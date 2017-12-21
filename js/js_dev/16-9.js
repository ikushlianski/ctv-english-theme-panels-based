/**
* This file resizes images all over website, except for megamenu, which has separate resizing function
*/
(function ($, Drupal) {


  $(window).load(function(){



    let blocksToExcludeFrom16_9 = [
      "block-views-bc4d82ca41b3690bfc18d1f53c06d20c",
      "recommended-content-tabs",
      "block-views-editor-s-picks-block"
      //,
      // "block-views-mega-menu-politics-block"
    ];

    let blocksToIncludeIn16_12 = [
      "block-views-bc4d82ca41b3690bfc18d1f53c06d20c",
      "block-views-editor-s-picks-block"
    ];

    // make related news' images 16:9
    $('.block').each(function(){

      let currentElemId = $(this).attr("id");

      if ( Modernizr.objectfit && !blocksToExcludeFrom16_9.indexOf(currentElemId) >= 0 ) {
        let thisBlockImgWidth = $(this).find('img').first().width();
        let thisBlockFirstItemWidth = $(this).find(".views-row").first().width();
        $(this).find('img').first().height(thisBlockImgWidth/16*9);
        let thisBlockImgHeight = $(this).find('img').first().height();

        $(this).find('img').each(function(item){
          if ($(this).width() == thisBlockImgWidth) {
            $(this).height(thisBlockImgWidth/16*9);
          } else {
            // $(this).width(thisBlockImgWidth);
            $(this).css({flexBasis: thisBlockImgWidth});
            $(this).height($(this).width()/16*9);
            // $(this).parents(".views-row").css({flexBasis: thisBlockFirstItemWidth, flexGrow: "0"});
          }
        });
      }
    });

    // make view items' images in taxonomy 16:9
    $('.page-taxonomy-term .view-taxonomy-term .views-field-field-image').each(function(){
      if ( Modernizr.objectfit ) {
        let thisViewImgWidth = $(this).find('img').first().width();
        $(this).find('img').each(function(item){
          $(this).height(thisViewImgWidth /16 * 9);
        });
      }
    });

    // make carousel images 16:12
    $('.block').each(function(){
      let currentElemId = $(this).attr("id");
      if ( blocksToExcludeFrom16_9.indexOf(currentElemId) >= 0 && blocksToIncludeIn16_12.indexOf(currentElemId) >= 0 && Modernizr.objectfit) {
        let thisBlockImgWidth = $(this).find('img').first().width();
        let thisBlockImgHeight = $(this).find('img').first().height();
        $(this).find('img').each(function(item){
          if ($(this).width() == thisBlockImgWidth) {
            $(this).height(thisBlockImgWidth/16*12);
          } else {
            $(this).width(thisBlockImgWidth);
            $(this).height($(this).width()/16*12);
          }
        });
      }
    });

    // make tabs images all 16:9
    $(".tab-content > .tab-pane").each(function(){
      if ( !$(this).hasClass('active') && Modernizr.objectfit ) {
        $(this).css("display", "block");
        $(this).find(".block").each(function(){
          let thisBlockImgWidth = $(this).find('img').first().width();
          $(this).find('img').first().height(thisBlockImgWidth/16*9);
          let thisBlockImgHeight = $(this).find('img').first().height();
          $(this).find('img').each(function(item){
            if ($(this).width() == thisBlockImgWidth) {
              $(this).height(thisBlockImgWidth/16*9);
            } else {
              $(this).width(thisBlockImgWidth);
              $(this).height($(this).width()/16*9);
            }
          });
        });
        $(this).css("display", "");
      }
      if ($(this).hasClass('active') && !Modernizr.objectfit ) {
        $(this).css({ height: "auto", width: "100%"});
        if ($(this).css("display") == "none") {
          $(this).css("display", "block");
          $(this).css({ height: "auto", width: "100%"});
          $(this).css("display", "");
        }
      }
    });

    // fixing ie 11 lack of object-fit support
    if ( ! Modernizr.objectfit ) {
      $('.view img').each(function () {
        $(this).css({ height: "auto", width: "100%"});
        if ($(this).css("display") == "none") {
          $(this).css("display", "block");
          $(this).css({ height: "auto", width: "100%"});
          $(this).css("display", "");
        }
      });
    }

  });

})(jQuery, Drupal);
