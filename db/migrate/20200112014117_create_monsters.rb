class CreateMonsters < ActiveRecord::Migration[5.2]
  def change
    create_table :monsters do |t|
      t.references :area, index: true, foreign_key: true
      t.references :user, index: true, foreign_key: true
      t.string  :name
      t.string  :task
      t.integer :image_id
      t.boolean :done
      t.timestamps
    end
  end
end
