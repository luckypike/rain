class AddYidToSpecialists < ActiveRecord::Migration[5.2]
  def change
    add_column :specialists, :yid, :string
  end
end
