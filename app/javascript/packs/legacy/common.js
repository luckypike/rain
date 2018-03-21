import $ from 'jquery';
import Parallax from 'parallax-js';

import Cookies from 'js-cookie';


$(function(){
  var _b = $('body');
  var _h = $('.header');

  $('.header_burger').on('click', function(){
    _b.toggleClass('full_screen');
    _h.toggleClass('menu_opened');
  });

  $('.header_logo .city .current').on('click', function(){
    $(this).next().toggleClass('active');
  });


  let _ppl = $('.ppl');
  if(_ppl.length > 0) {
    var parallaxInstance = new Parallax(_ppl.get(0));
  }

  var _ref = document.referrer.replace(/^[^:]+:\/\/[^/]+/, '').replace(/#.*/, '');
  var _wlp = window.location.pathname;
  if(_ref == '' && Cookies.get('geo') == 'nizhny' && _wlp == '/') window.location.href = '/nizhny';
  if(_ref == '' && Cookies.get('geo') == 'moscow' && _wlp == '/nizhny') window.location.href = '/';

  if(Cookies.get('geo') == null)  {
    $('.geo_bg').addClass('act');
    $('body').addClass('full_screen');
  }

  $('.geo_sl .geo_ct').on('click', function() {
    $('body').removeClass('full_screen');
    Cookies.set('geo', $(this).data('geo'), {
      expires: 365
    });
    if ($(this).hasClass('geo_msk') && _wlp == '/') {
      $('.geo_bg').removeClass('act');
      return false;
    }
    if ($(this).hasClass('geo_nn') && _wlp == '/nizhny') {
      $('.geo_bg').removeClass('act');
      return false;
    }
  });

});
