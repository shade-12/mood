class CreateAreas < ActiveRecord::Migration[5.2]
  def change
    create_table :areas do |t|
      t.string :name
      t.string :latitude
      t.string :longitude
      t.string :image
      t.timestamps
    end
  end
end
