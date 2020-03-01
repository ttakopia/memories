class Schejule < ApplicationRecord
    belongs_to :nest,inverse_of: :schejules
end
