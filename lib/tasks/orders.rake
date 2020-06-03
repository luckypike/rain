namespace :orders do
  desc "TODO"
  task send_notice: :environment do
    OrderMailer.pay(@order).deliver
  end
end
