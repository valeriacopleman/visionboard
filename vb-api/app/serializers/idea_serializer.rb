class IdeaSerializer < ActiveModel::Serializer
  attributes :id, :title, :description, :url, :board_id
  belongs_to :board
end
