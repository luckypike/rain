class Price < ApplicationRecord
  validates_presence_of :title, :position
end
