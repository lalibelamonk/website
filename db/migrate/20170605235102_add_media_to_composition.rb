class AddMediaToComposition < ActiveRecord::Migration[5.1]
  def change
    add_column :compositions, :media, :string
  end
end
