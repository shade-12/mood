class Area < ApplicationRecord
  has_many :users, :dependent => :destroy
  validates_associated :user
  validates_presence_of :user
  belongs_to :user
end
