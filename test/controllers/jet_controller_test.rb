require 'test_helper'

class JetControllerTest < ActionDispatch::IntegrationTest
  test "should get index" do
    get jet_index_url
    assert_response :success
  end

end
