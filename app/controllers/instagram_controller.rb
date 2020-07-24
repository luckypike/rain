class InstagramController < ApplicationController
  def index
    url = "https://graph.instagram.com/me/media?fields=id,media_type,media_url,permalink&access_token=#{Rails.application.credentials.dig(:instagram, :token)}"

    @media = JSON.parse(Net::HTTP.get(URI(url)))
  end
end
