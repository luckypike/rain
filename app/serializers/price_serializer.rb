class PriceSerializer
  include FastJsonapi::ObjectSerializer

  attributes :title, :price_msk, :price_nn, :description, :position, :order
end
