class RemoveImageFromComposition < ActiveRecord::Migration[5.2]
  def change
    remove_column :compositions, :image, :text
  end
end
