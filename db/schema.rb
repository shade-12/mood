# This file is auto-generated from the current state of the database. Instead
# of editing this file, please use the migrations feature of Active Record to
# incrementally modify your database, and then regenerate this schema definition.
#
# Note that this schema.rb definition is the authoritative source for your
# database schema. If you need to create the application database on another
# system, you should be using db:schema:load, not running all the migrations
# from scratch. The latter is a flawed and unsustainable approach (the more migrations
# you'll amass, the slower it'll run and the greater likelihood for issues).
#
# It's strongly recommended that you check this file into your version control system.

ActiveRecord::Schema.define(version: 2020_01_12_161238) do

  # These are extensions that must be enabled in order to support this database
  enable_extension "plpgsql"

  create_table "areas", force: :cascade do |t|
    t.string "name"
    t.string "latitude"
    t.string "longitude"
    t.string "image"
    t.datetime "created_at", null: false
    t.datetime "updated_at", null: false
  end

  create_table "closefriends", force: :cascade do |t|
    t.bigint "user_id"
    t.integer "user_id_2"
    t.datetime "created_at", null: false
    t.datetime "updated_at", null: false
    t.index ["user_id"], name: "index_closefriends_on_user_id"
  end

  create_table "monsters", force: :cascade do |t|
    t.bigint "area_id"
    t.bigint "user_id"
    t.string "name"
    t.string "task"
    t.integer "image_id"
    t.boolean "done"
    t.datetime "created_at", null: false
    t.datetime "updated_at", null: false
    t.index ["area_id"], name: "index_monsters_on_area_id"
    t.index ["user_id"], name: "index_monsters_on_user_id"
  end

  create_table "users", force: :cascade do |t|
    t.bigint "area_id"
    t.string "name"
    t.string "password"
    t.integer "no_of_hearts"
    t.integer "joy_level"
    t.datetime "created_at", null: false
    t.datetime "updated_at", null: false
    t.index ["area_id"], name: "index_users_on_area_id"
  end

  add_foreign_key "closefriends", "users"
  add_foreign_key "monsters", "areas"
  add_foreign_key "monsters", "users"
  add_foreign_key "users", "areas"
end
