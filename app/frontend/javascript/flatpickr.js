require("flatpickr/dist/flatpickr.css")
import flatpickr from "flatpickr"
import { Japanese } from "flatpickr/dist/l10n/ja.js"
import moment from "moment"
flatpickr.localize(Japanese);

document.addEventListener("turbolinks:load", () => {
  flatpickr("[data-behavior='flatpickr']", {
    altInput: true,
    altFormat: "F j, Y",
    dateFormat: "Y年m月d日"
  })
  flatpickr("[data-behavior='flatpickr-range']", {
    altInput: true,
    altFormat: "m-j-Y(D)",
    mode: "range",
    ariaDateFormat:'d.m.Y',
    dateFormat:'d.m.Y',
    onChange: [function(selectedDates){
      const dateArr = selectedDates.map(date => this.formatDate(date, "Y-m-d"));
      console.log(dateArr);
      moment
    }]
  })
  flatpickr("[data-behavior='flatpickr-time']", {
    enableTime: true,
    noCalendar: true,
    dateFormat: "H:i",
  })
})