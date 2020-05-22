class CreateOrders < ActiveRecord::Migration[6.0]
  def change
    create_table :orders do |t|
      t.string :name
      t.string :surname
      t.string :phone
      t.string :email

      t.timestamps
    end
  end
end
