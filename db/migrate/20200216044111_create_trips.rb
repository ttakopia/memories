class CreateTrips < ActiveRecord::Migration[6.0]
  def change
    create_table :trips do |t|
      t.string :triptitle
      t.string :membar
      t.string :startdate
      t.string :enddate
      t.string :place
      t.string :bhotel
      t.string :bflight
      t.string :bfood
      t.datetime :date
      t.string :gmorning
      t.string :glunch
      t.string :gdinner
      t.string :hotelname
      t.string :starttime
      t.string :endtime
      t.string :action
      t.string :route
      t.string :remarks
      t.text :comment

      t.timestamps
    end
  end
end
