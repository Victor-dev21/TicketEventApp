class CreateTickets < ActiveRecord::Migration[6.1]
  def change
    create_table :tickets do |t|
      t.integer :event_id
      t.string :seat
      t.integer :user_id

      t.timestamps
    end
  end
end
