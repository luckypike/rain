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
    $(window).on('resize', function() {
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

  $(window).trigger('resize');

  var _insta = $('.insta');

  if(_insta.length > 0) {
    $.getJSON('https://api.instagram.com/v1/users/1388142751/media/recent/?access_token=1388142751.0871ed8.91a000466c7e4f9eafcfd716eae218e4&count=20&callback=?', function(data) {
      var works = [];
      $.each(data.data, function(i, el) {
        if(works.length < 4) $.each(el.tags, function(i, tag) {
          if(tag == 'irinaraincom' && el.type == 'image') {
            works.push(el);
          }
        });
      });

      $.each(works, function(i, work) {
        var _img = $('<a></a>');
        _img.attr('href', work.link).css({
          'background-image': "url('" + work.images.standard_resolution.url + "')"
        });

        $('<ul><li class="likes">' + work.likes.count + '</li><li class="comments">' + work.comments.count + '</li></ul>').appendTo(_img);
        _img.appendTo(_insta);
        _img.wrap('<div class="insta_item"></div>');
      });
    });
  }
});