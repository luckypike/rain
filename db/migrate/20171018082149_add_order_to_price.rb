class AddOrderToPrice < ActiveRecord::Migration[5.1]
  def change
    add_column :prices, :order, :integer
  end
end
