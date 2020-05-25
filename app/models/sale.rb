class Sale < ApplicationRecord
  enum state: { Абонимент: 0, Сертификат: 1 }
end
