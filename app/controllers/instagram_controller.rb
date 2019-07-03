class InstagramController < ApplicationController
  def index

    @media = JSON.parse(open('https://api.instagram.com/v1/users/1388142751/media/recent/?access_token=1388142751.0871ed8.a1fe16d1d5a24294b6304f061fc27512&count=20').read).with_indifferent_access[:data]
  end
end
