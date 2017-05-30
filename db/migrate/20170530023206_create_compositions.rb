class CreateCompositions < ActiveRecord::Migration[5.1]
  def change
    create_table :compositions do |t|
      t.text :name
      t.text :description
      t.text :dimension
      t.text :materials
      t.text :image

      t.timestamps
    end
  end
end
