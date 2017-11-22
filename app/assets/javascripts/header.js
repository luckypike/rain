$(function() {
  var _b = $('body');
  var _h = $('.header');
  var _c = $('.city');
  var _sc = $('.swtch_city');

  var _hb = $('.header_burger');

  _hb.on('click', function(){
    _b.toggleClass('full_screen');
    _h.toggleClass('menu_opened');
  });

  $('.header_menu_item a').on('click', function(){
    if(_h.hasClass('menu_opened')) {
      _b.toggleClass('full_screen');
      _h.toggleClass('menu_opened');
    }
  });

  $('.crnt_city').on('click', function(){
    _c.toggleClass('change');
  })

  _sc.on('click', function(){
    _c.addClass('changed');
    setTimeout(function() {  window.location.href = _sc.attr('href');}, 300);
    return false;
  })

  $('.header_menu a').smoothScroll({
    offset: -63,
  });

});