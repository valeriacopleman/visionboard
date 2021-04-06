class AddUrlToIdeas < ActiveRecord::Migration[6.0]
  def change
    add_column :ideas, :url, :string
  end
end
