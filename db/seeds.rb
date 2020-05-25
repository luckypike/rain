# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the rails db:seed command (or created alongside the database with db:setup).
#
# Examples:
#
#   movies = Movie.create([{ name: 'Star Wars' }, { name: 'Lord of the Rings' }])
#   Character.create(name: 'Luke', movie: movies.first)

Sale.create(state: 0, price_sale_msk: 4680, price_origin_msk: 5200, price_sale_nn: 3960, price_origin_nn: 4400, quantity: 2)
Sale.create(state: 0, price_sale_msk: 6630, price_origin_msk: 7800, price_sale_nn: 5610, price_origin_nn: 6600, quantity: 3)
Sale.create(state: 0, price_sale_msk: 10400, price_origin_msk: 13000, price_sale_nn: 8800, price_origin_nn: 11000, quantity: 5)
Sale.create(state: 1, price_sale_msk: 3000, price_sale_nn: 3000)
Sale.create(state: 1, price_sale_msk: 5000, price_sale_nn: 5000)
Sale.create(state: 1, price_sale_msk: 7000, price_sale_nn: 7000)
