import $ from 'jquery';

import Swiper from 'swiper';

$(function() {
  let _window = $(window);

  var _sc = $('.page_index_swiper .swiper-container');
  var _sw = $('.swiper-wrapper', _sc);

  if(_sc.length > 0) {
    var index_swiper;
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

  var _scm = $('.page_index_space .masters_list');
  var _swm = $('.swiper-wrapper', _scm);

  if(_scm.length > 0) {
    var masters_swiper;
    _window.on('resize', function() {
      if(_swm.css('flex-wrap') == 'wrap') {
        if(masters_swiper != undefined) {
          masters_swiper.destroy(true, true);
          masters_swiper = undefined;
        }
      } else {
        if(masters_swiper == undefined) {
          masters_swiper = new Swiper (_scm, {
            slidesPerView: 'auto',
          });
        }
      }
    });
  }

  _window.trigger('resize');
});
