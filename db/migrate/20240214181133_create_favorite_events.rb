class CreateFavoriteEvents < ActiveRecord::Migration[6.1]
  def change
    create_table :favorite_events do |t|
      t.integer :user_id
      t.integer :event_id

      t.timestamps
    end
  end
end
