class OrderMailer < ApplicationMailer
  def pay(order)
    @order = order
    mail(
      to: Rails.application.credentials.dig(:mail, :username),
      subject: "Заказ № #{order.id}"
    )
  end
end
