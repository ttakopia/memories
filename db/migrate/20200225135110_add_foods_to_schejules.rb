class AddFoodsToSchejules < ActiveRecord::Migration[6.0]
  def change
    add_column :schejules, :breakfast, :string
    add_column :schejules, :lunch, :string
    add_column :schejules, :dinner, :string
    add_column :schejules, :hotel, :string
  end
end
