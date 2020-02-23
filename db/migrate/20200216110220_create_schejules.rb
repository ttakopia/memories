class CreateSchejules < ActiveRecord::Migration[6.0]
  def change
    create_table :schejules do |t|
      t.string :time
      t.string :action
      t.string :content
      t.string :remark

      t.timestamps
    end
  end
end
