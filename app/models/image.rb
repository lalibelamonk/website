class Image < ApplicationRecord
    belongs_to :composition
    has_one_attached :file
end
