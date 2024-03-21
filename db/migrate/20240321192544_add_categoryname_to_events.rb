class AddCategorynameToEvents < ActiveRecord::Migration[6.1]
  def change
    add_column :events, :category_name, :string
  end
end
