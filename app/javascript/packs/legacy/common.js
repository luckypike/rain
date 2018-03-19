import $ from 'jquery';
import Parallax from 'parallax-js';


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

});
