class Closefriend < ApplicationRecord
  validates_associated :user
  validates_presence_of :user
  belongs_to :user
end

