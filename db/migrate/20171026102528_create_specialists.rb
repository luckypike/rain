class CreateSpecialists < ActiveRecord::Migration[5.1]
  def change
    create_table :specialists do |t|
      t.string :name
      t.string :photo
      t.string :service
      t.text :quote
      t.string :city

      t.timestamps
    end
  end
end
