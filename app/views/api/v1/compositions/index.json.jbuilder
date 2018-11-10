json.compositions @compositions do |composition|
  json.extract! composition, :id, :name, :description, :images, :created_at, :updated_at
end