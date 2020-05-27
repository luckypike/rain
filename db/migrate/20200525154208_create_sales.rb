class CreateSales < ActiveRecord::Migration[6.0]
  def change
    create_table :sales do |t|
      t.integer :state
      t.string :price_sale_msk
      t.string :price_sale_nn
      t.string :price_origin_msk
      t.string :price_origin_nn
      t.string :quantity

      t.timestamps
    end
  end
end
