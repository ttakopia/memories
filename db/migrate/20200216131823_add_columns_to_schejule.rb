class AddColumnsToSchejule < ActiveRecord::Migration[6.0]
  def change
    add_column :schejules, :trip_id, :integer
  end
end
