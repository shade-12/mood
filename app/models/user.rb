class User < ApplicationRecord
  has_many :closefriends
  has_many :monsters
end