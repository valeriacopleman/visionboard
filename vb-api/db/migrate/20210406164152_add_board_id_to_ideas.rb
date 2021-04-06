class AddBoardIdToIdeas < ActiveRecord::Migration[6.0]
  def change
    add_column :ideas, :board_id, :integer
  end
end
