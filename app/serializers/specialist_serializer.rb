class SpecialistSerializer
  include FastJsonapi::ObjectSerializer

  attributes :name, :service, :yid, :city, :weight

  attribute :photo do |specialist|
    if specialist.photo.attached?
      path = "s3://#{Rails.application.credentials.dig(:aws, :bucket)}/#{specialist.photo.key}"

      {
        key: specialist.photo.key,
        path: path,
        encoded_path: Base64.urlsafe_encode64(path).tr('=', '').scan(/.{1,16}/).join('/')
      }
    end
  end
end
