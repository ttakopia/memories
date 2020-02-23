json.extract! trip, :id, :triptitle, :membar, :startdate, :enddate, :place, :b-hotel, :b-flight, :b-food, :date, :g-morning, :g-lunch, :g-dinner, :hotelname, :starttime, :endtime, :action, :route, :remarks, :comment, :created_at, :updated_at
json.url trip_url(trip, format: :json)
