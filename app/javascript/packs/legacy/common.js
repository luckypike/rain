import $ from 'jquery';

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
});
