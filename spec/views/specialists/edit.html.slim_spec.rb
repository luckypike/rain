require 'rails_helper'

RSpec.describe "specialists/edit", type: :view do
  before(:each) do
    @specialist = assign(:specialist, Specialist.create!(
      :name => "MyString",
      :photo => "MyString",
      :service => "MyString",
      :quote => "MyText",
      :city => "MyString"
    ))
  end

  it "renders the edit specialist form" do
    render

    assert_select "form[action=?][method=?]", specialist_path(@specialist), "post" do

      assert_select "input[name=?]", "specialist[name]"

      assert_select "input[name=?]", "specialist[photo]"

      assert_select "input[name=?]", "specialist[service]"

      assert_select "textarea[name=?]", "specialist[quote]"

      assert_select "input[name=?]", "specialist[city]"
    end
  end
end
