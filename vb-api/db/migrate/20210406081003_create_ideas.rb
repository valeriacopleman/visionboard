class CreateIdeas < ActiveRecord::Migration[6.0]
  def change
    create_table :ideas do |t|
      t.string :name
      t.string :description
      t.integer :urlboard_id

      t.timestamps
    end
  end
end
