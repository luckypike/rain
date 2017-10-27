require 'rails_helper'

RSpec.describe "specialists/show", type: :view do
  before(:each) do
    @specialist = assign(:specialist, Specialist.create!(
      :name => "Name",
      :photo => "Photo",
      :service => "Service",
      :quote => "MyText",
      :city => "City"
    ))
  end

  it "renders attributes in <p>" do
    render
    expect(rendered).to match(/Name/)
    expect(rendered).to match(/Photo/)
    expect(rendered).to match(/Service/)
    expect(rendered).to match(/MyText/)
    expect(rendered).to match(/City/)
  end
end
