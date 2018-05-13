"use strict";
$(document).ready(function () {
  
  $('#submitButton').click(function () {
    var a = Math.random();
    var b = Math.round (a * 100);
    $('#details').html(b);
  });
});
