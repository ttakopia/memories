class Nest < ApplicationRecord
  belongs_to :trip,inverse_of: :nests
  has_many :schejules, inverse_of: :nest
  accepts_nested_attributes_for :schejules, allow_destroy: true
end
