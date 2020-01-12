class CreateClosefriends < ActiveRecord::Migration[5.2]
  def change
    create_table :closefriends do |t|
      t.references :user, index: true, foreign_key: true
      t.integer :user_id_2
      t.timestamps
    end
  end
end
