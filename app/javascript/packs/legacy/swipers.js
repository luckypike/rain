import $ from 'jquery';

import Swiper from 'swiper';

$(function() {
  let _window = $(window);

  var _sc = $('.page_index_swiper .swiper-container');
  var _sw = $('.swiper-wrapper', _sc);

  if(_sc.length > 0) {
    let index_swiper;
    _window.on('resize', function() {
      if(_sw.css('flex-wrap') == 'wrap') {
        if(index_swiper != undefined) {
          index_swiper.destroy(true, true);
          index_swiper = undefined;
        }
      } else {
        if(index_swiper == undefined) {
          index_swiper = new Swiper (_sc, {
            loop: true,
            slidesPerView: 'auto',
          });
        }
      }
    });
  }
  _window.trigger('resize');

  let _sml = $('.page_index_masters_list .masters_list');

  if(_sml.length > 0) {
    let masters_swiper = new Swiper (_sml, {
      slidesPerView: 'auto',
    });
  }
});
