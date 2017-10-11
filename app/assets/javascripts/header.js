$(function() {
  var _b = $('body');
  var _h = $('.header');

  var _hb = $('.header_burger');

  _hb.on('click', function(){
    _b.toggleClass('full_screen');
    _h.toggleClass('menu_opened');
  });

});