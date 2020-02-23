require 'test_helper'

class TripsControllerTest < ActionDispatch::IntegrationTest
  setup do
    @trip = trips(:one)
  end

  test "should get index" do
    get trips_url
    assert_response :success
  end

  test "should get new" do
    get new_trip_url
    assert_response :success
  end

  test "should create trip" do
    assert_difference('Trip.count') do
      post trips_url, params: { trip: { action: @trip.action, b-flight: @trip.b-flight, b-food: @trip.b-food, b-hotel: @trip.b-hotel, comment: @trip.comment, date: @trip.date, enddate: @trip.enddate, endtime: @trip.endtime, g-dinner: @trip.g-dinner, g-lunch: @trip.g-lunch, g-morning: @trip.g-morning, hotelname: @trip.hotelname, membar: @trip.membar, place: @trip.place, remarks: @trip.remarks, route: @trip.route, startdate: @trip.startdate, starttime: @trip.starttime, triptitle: @trip.triptitle } }
    end

    assert_redirected_to trip_url(Trip.last)
  end

  test "should show trip" do
    get trip_url(@trip)
    assert_response :success
  end

  test "should get edit" do
    get edit_trip_url(@trip)
    assert_response :success
  end

  test "should update trip" do
    patch trip_url(@trip), params: { trip: { action: @trip.action, b-flight: @trip.b-flight, b-food: @trip.b-food, b-hotel: @trip.b-hotel, comment: @trip.comment, date: @trip.date, enddate: @trip.enddate, endtime: @trip.endtime, g-dinner: @trip.g-dinner, g-lunch: @trip.g-lunch, g-morning: @trip.g-morning, hotelname: @trip.hotelname, membar: @trip.membar, place: @trip.place, remarks: @trip.remarks, route: @trip.route, startdate: @trip.startdate, starttime: @trip.starttime, triptitle: @trip.triptitle } }
    assert_redirected_to trip_url(@trip)
  end

  test "should destroy trip" do
    assert_difference('Trip.count', -1) do
      delete trip_url(@trip)
    end

    assert_redirected_to trips_url
  end
end
