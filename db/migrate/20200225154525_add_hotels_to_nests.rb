class AddHotelsToNests < ActiveRecord::Migration[6.0]
  def change
    add_column :nests, :hotel, :string
  end
end
