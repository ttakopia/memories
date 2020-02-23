require "application_system_test_case"

class TripsTest < ApplicationSystemTestCase
  setup do
    @trip = trips(:one)
  end

  test "visiting the index" do
    visit trips_url
    assert_selector "h1", text: "Trips"
  end

  test "creating a Trip" do
    visit trips_url
    click_on "New Trip"

    fill_in "Action", with: @trip.action
    fill_in "B-flight", with: @trip.b-flight
    fill_in "B-food", with: @trip.b-food
    fill_in "B-hotel", with: @trip.b-hotel
    fill_in "Comment", with: @trip.comment
    fill_in "Date", with: @trip.date
    fill_in "Enddate", with: @trip.enddate
    fill_in "Endtime", with: @trip.endtime
    fill_in "G-dinner", with: @trip.g-dinner
    fill_in "G-lunch", with: @trip.g-lunch
    fill_in "G-morning", with: @trip.g-morning
    fill_in "Hotelname", with: @trip.hotelname
    fill_in "Membar", with: @trip.membar
    fill_in "Place", with: @trip.place
    fill_in "Remarks", with: @trip.remarks
    fill_in "Route", with: @trip.route
    fill_in "Startdate", with: @trip.startdate
    fill_in "Starttime", with: @trip.starttime
    fill_in "Triptitle", with: @trip.triptitle
    click_on "Create Trip"

    assert_text "Trip was successfully created"
    click_on "Back"
  end

  test "updating a Trip" do
    visit trips_url
    click_on "Edit", match: :first

    fill_in "Action", with: @trip.action
    fill_in "B-flight", with: @trip.b-flight
    fill_in "B-food", with: @trip.b-food
    fill_in "B-hotel", with: @trip.b-hotel
    fill_in "Comment", with: @trip.comment
    fill_in "Date", with: @trip.date
    fill_in "Enddate", with: @trip.enddate
    fill_in "Endtime", with: @trip.endtime
    fill_in "G-dinner", with: @trip.g-dinner
    fill_in "G-lunch", with: @trip.g-lunch
    fill_in "G-morning", with: @trip.g-morning
    fill_in "Hotelname", with: @trip.hotelname
    fill_in "Membar", with: @trip.membar
    fill_in "Place", with: @trip.place
    fill_in "Remarks", with: @trip.remarks
    fill_in "Route", with: @trip.route
    fill_in "Startdate", with: @trip.startdate
    fill_in "Starttime", with: @trip.starttime
    fill_in "Triptitle", with: @trip.triptitle
    click_on "Update Trip"

    assert_text "Trip was successfully updated"
    click_on "Back"
  end

  test "destroying a Trip" do
    visit trips_url
    page.accept_confirm do
      click_on "Destroy", match: :first
    end

    assert_text "Trip was successfully destroyed"
  end
end
