// This file is automatically compiled by Webpack, along with any other files
// present in this directory. You're encouraged to place your actual application logic in
// a relevant structure within app/javascript and only use these pack files to reference
// that code so it'll be compiled.

require("@rails/ujs").start()
require("turbolinks").start()
require("@rails/activestorage").start()
require("channels")

import '../javascript/application'
import '../stylesheet/application'
import 'cocoon-js'

$(document).ready(function() {
    $('#nests')
      .on('cocoon:before-insert', function() {
        $("#owner_from_list").hide();
        $("#owner a.add_fields").hide();
      })
      .on('cocoon:after-insert', function() {
        console.log('after insert');
      })
      .on("cocoon:before-remove", function() {
        $("#owner_from_list").show();
        $("#owner a.add_fields").show();
      })
      .on("cocoon:after-remove", function() {
        /* e.g. recalculate order of child items */
      });
    $(this).on('cocoon:before-insert', function () {
        data("association-insertion-method", 'append').
        data("association-insertion-node", '#nests');
          console.log('before insert');
      })
    $(".links").on('cocoon:after-insert', function () {
        console.log('after insert');
    })
    .on("cocoon:before-remove", function () {
        console.log('before remove');
    })
    .on("cocoon:after-remove", function () {
        console.log('after remove');
    });
   $(".links").on('click', function(){
    console.log('after remove');
    flatpickr("[data-behavior='flatpickr-time']", {
        enableTime: true,
        noCalendar: true,
        dateFormat: "H:i",
      })
      $('.flatpickr-time').flatpickr({
        enableTime: true,
        noCalendar: true,
        dateFormat: "H:i"
      });
   });
});

// Uncomment to copy all static images under ../images to the output folder and reference
// them with the image_pack_tag helper in views (e.g <%= image_pack_tag 'rails.png' %>)
// or the `imagePath` JavaScript helper below.
//
const images = require.context('../images', true)
// const imagePath = (name) => images(name, true)
// Support component names relative to this directory:
var componentRequireContext = require.context("components", true);
var ReactRailsUJS = require("react_ujs");
ReactRailsUJS.useContext(componentRequireContext);
