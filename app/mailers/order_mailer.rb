class OrderMailer < ApplicationMailer
  def pay(order)
    @order = order
    mail(
      to: Rails.application.credentials.dig(:mail, :username),
      subject: "Заказ № #{order.id}"
    )
  end

  def customer_notice(order)
    @order = order
    mail(
      to: order.email,
      subject: "#{Rails.application.credentials.dig(:mail, :prefix)}
      - Ваш заказ №#{order.id} успешно оплачен"
    )
  end
end
