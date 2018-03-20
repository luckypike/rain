class User < ApplicationRecord
  devise :database_authenticatable, :rememberable, :trackable, :validatable

   def remember_me
     true
   end
end
