module ApplicationHelper
  def cl_img path, width, height
    url = "//res.cloudinary.com/irinarain/image/upload/fl_progressive,c_thumb,g_center,q_auto:eco,w_{width},h_{height}#{path}"
    content_tag(:div, content_tag(:noscript, image_tag(url.sub('{width}', width.to_s).sub('{height}', height.to_s))), class: 'img_prg', data: { src: url })
  end
end
