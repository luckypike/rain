class AddSaleToOrders < ActiveRecord::Migration[6.0]
  def change
    add_column :orders, :sale_id, :integer
  end
end
