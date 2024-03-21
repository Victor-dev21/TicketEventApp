class AddLocationNameToEvents < ActiveRecord::Migration[6.1]
  def change
    add_column :events, :location_name, :string
  end
end
