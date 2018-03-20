class Specialist < ApplicationRecord
  has_one_attached :photo

  validates_presence_of :name, :city
end
