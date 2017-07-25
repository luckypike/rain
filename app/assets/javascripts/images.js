const hasWindow = typeof window !== 'undefined';
const environment = hasWindow ? (window.devicePixelRatio || 1) : 1;

$(function() {
  var _ip = $('.img_prg');

  _ip.on('update', function() {
    var _this = $(this);
    var src = _this.data('src');
    var old_image = _this.css('background-image');
    var width = Math.ceil(_this.width());
    var height = Math.ceil(_this.height());

    if(environment >= 2) {
      width *= 2;
      height *= 2;
    }

    if(src != undefined) {
      src = src.replace("{height}", height).replace("{width}", width);

      if(old_image == 'none') {
        _this.css({
          'background-image': 'url("' + src + '")'
        });
      } else {
        var img = new Image();
        img.onload = function() {
          _this.css({
            'background-image': 'url("' + src + '")'
          });
        };
        img.src = src;
      }
    }
  });

  $(window).on("debouncedresize", function( event ) {
    _ip.trigger('update');
  }).trigger('debouncedresize');
});