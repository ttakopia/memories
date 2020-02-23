class Trip < ApplicationRecord
    has_many_attached :images
    has_many :schejules
    accepts_nested_attributes_for :schejules, allow_destroy: true
end
