class CreateClosefriends < ActiveRecord::Migration[5.2]
  def change
    create_table :closefriends do |t|
      t.integer :user_id_1
      t.integer :user_id_2
      t.timestamps
    end
  end
end
