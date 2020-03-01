class CreateNests < ActiveRecord::Migration[6.0]
  def change
    create_table :nests do |t|
      t.string :date
      t.references :trip, null: false, foreign_key: true

      t.timestamps
    end
  end
end
