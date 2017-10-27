class Specialist < ApplicationRecord
  mount_uploader :photo, ImageUploader

  validates_presence_of :name, :city
end
