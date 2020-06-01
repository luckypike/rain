class AddFieldsToOrders < ActiveRecord::Migration[6.0]
  def change
    add_column :orders, :uuid, :string
    add_column :orders, :url, :string
  end
end
