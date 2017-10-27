require 'rails_helper'

RSpec.describe "specialists/new", type: :view do
  before(:each) do
    assign(:specialist, Specialist.new(
      :name => "MyString",
      :photo => "MyString",
      :service => "MyString",
      :quote => "MyText",
      :city => "MyString"
    ))
  end

  it "renders new specialist form" do
    render

    assert_select "form[action=?][method=?]", specialists_path, "post" do

      assert_select "input[name=?]", "specialist[name]"

      assert_select "input[name=?]", "specialist[photo]"

      assert_select "input[name=?]", "specialist[service]"

      assert_select "textarea[name=?]", "specialist[quote]"

      assert_select "input[name=?]", "specialist[city]"
    end
  end
end
