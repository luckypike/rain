class AddWeightToSpecialists < ActiveRecord::Migration[5.2]
  def change
    add_column :specialists, :weight, :interger, default: 0
  end
end
