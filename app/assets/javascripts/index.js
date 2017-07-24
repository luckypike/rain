$(function() {
  var _sc = $('.page_index_swiper .swiper-container');
  var _sw = $('.swiper-wrapper', _sc);

  if(_sc.length > 0) {
    var index_swiper;
    $(window).on('resize', function() {
      if(_sw.css('flex-wrap') == 'wrap') {
        if(index_swiper != undefined) {
          index_swiper.destroy(true, true);
          index_swiper = undefined;
        }
      } else {
        if(index_swiper == undefined) {
          index_swiper = new Swiper (_sc, {
            loop: true,
          });
        }
      }
    }).trigger('resize');
  }
});