class CreateEvents < ActiveRecord::Migration[6.1]
  def change
    create_table :events do |t|
      t.string :name
      t.integer :location_id
      t.integer :admin_id
      t.date :date
      t.integer :category_id
      t.integer :ticket_quantity
      t.integer :venue_id
      t.integer :ticket_availability
      t.string :status

      t.timestamps
    end
  end
end
