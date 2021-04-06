class RemoveUrlboardIdFromIdeas < ActiveRecord::Migration[6.0]
  def change
    remove_column :ideas, :urlboard_id, :integer
  end
end
