class Specialist < ApplicationRecord
  has_one_attached :photo

  default_scope { order(weight: :asc) }

  validates_presence_of :name, :city
end
