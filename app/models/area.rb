class Area < ApplicationRecord
  has_many :users, :dependent => :destroy
end
