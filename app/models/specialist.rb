class Specialist < ApplicationRecord
  has_one_attached :photo

  default_scope { order(weight: :asc) }

  validates :name, :city, presence: true
end
