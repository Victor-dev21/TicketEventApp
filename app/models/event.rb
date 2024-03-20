class Event < ApplicationRecord
  belongs_to :admin
  belongs_to :category
  belongs_to :venue
  belongs_to :location
end
