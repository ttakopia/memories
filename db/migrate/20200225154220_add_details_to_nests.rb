class AddDetailsToNests < ActiveRecord::Migration[6.0]
  def change
    add_column :nests, :breakfast, :string
    add_column :nests, :lunch, :string
    add_column :nests, :dinner, :string
  end
end
