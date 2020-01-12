class User < ApplicationRecord
  has_many :monsters
  has_many :closefriends
end
