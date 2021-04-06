class BoardSerializer < ActiveModel::Serializer
  attributes :id, :title, :createdby, :description
  has_many :ideas
end
