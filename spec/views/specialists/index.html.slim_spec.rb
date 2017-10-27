require 'rails_helper'

RSpec.describe "specialists/index", type: :view do
  before(:each) do
    assign(:specialists, [
      Specialist.create!(
        :name => "Name",
        :photo => "Photo",
        :service => "Service",
        :quote => "MyText",
        :city => "City"
      ),
      Specialist.create!(
        :name => "Name",
        :photo => "Photo",
        :service => "Service",
        :quote => "MyText",
        :city => "City"
      )
    ])
  end

  it "renders a list of specialists" do
    render
    assert_select "tr>td", :text => "Name".to_s, :count => 2
    assert_select "tr>td", :text => "Photo".to_s, :count => 2
    assert_select "tr>td", :text => "Service".to_s, :count => 2
    assert_select "tr>td", :text => "MyText".to_s, :count => 2
    assert_select "tr>td", :text => "City".to_s, :count => 2
  end
end
