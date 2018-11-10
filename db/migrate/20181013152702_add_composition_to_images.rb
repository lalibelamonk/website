class AddCompositionToImages < ActiveRecord::Migration[5.2]
  def change
    add_reference :images, :composition, foreign_key: true
  end
end
