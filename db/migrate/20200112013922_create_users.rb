class CreateUsers < ActiveRecord::Migration[5.2]
  def change
    create_table :users do |t|
      t.references :area, index: true, foreign_key: true
      t.string  :name
      t.string  :password
      t.integer :no_of_hearts
      t.integer :joy_level
      t.timestamps
    end
  end
end
