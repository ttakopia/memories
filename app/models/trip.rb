class Trip < ApplicationRecord
    has_many_attached :images
    has_many :nests, inverse_of: :trip
    accepts_nested_attributes_for :nests, allow_destroy: true, update_only: true
end