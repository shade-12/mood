class Monster < ApplicationRecord
  validates_associated :user
  validates_presence_of :user
  validates_associated :area
  validates_presence_of :area
  belongs_to :area
  belongs_to :user
end
