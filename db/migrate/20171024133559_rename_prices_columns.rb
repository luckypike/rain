class RenamePricesColumns < ActiveRecord::Migration[5.1]
  def change
    change_table :prices do |t|
      t.rename :price, :price_msk
      t.rename :pricenn, :price_nn
    end
  end
end
