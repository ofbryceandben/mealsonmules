/* ======================================
Table of Contents:
1. Flickity Slider
2.

========================================*/
$(document).ready(function(){

    $('.cat-carousel').flickity({
        // options
        contain: true,
        prevNextButtons: false,
        wrapAround: true,
        cellAlign: 'center',
        pageDots: false
      });

    $('.special-carousel').flickity({
        // options
        cellAlign: 'center',
        contain: true,
        wrapAround: true,
        pageDots: false,
        autoPlay: true
      });
});
