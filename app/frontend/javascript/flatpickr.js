require("flatpickr/dist/flatpickr.css")
import flatpickr from "flatpickr"
import { Japanese } from "flatpickr/dist/l10n/ja.js"
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
    dateFormat: "Y年m月d日(D)",
    mode: "range",
    minDate: "today"
  })
  flatpickr("[data-behavior='flatpickr-time']", {
    enableTime: true,
    noCalendar: true,
    dateFormat: "H:i",
  })
})