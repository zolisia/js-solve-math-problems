"use strict";
$(document).ready(function () {

  $('#factorialButton').click(function () {
    const MIN_BOUND = 0;
    const MAX_BOUND = 25;
    var f = 1;
    var x = parseInt($("#factorialInput").val());

    if ( (x > MIN_BOUND) && (x < MAX_BOUND) ) {

      switch (x) {
      case 22:
        alert('The fact that you chose this number makes you an adorable creature , so just to let you know , that we are actually sorry for this delay.');
        break;
      case 21:
        alert('You have done nothing wrong, but your choice (of a number) is simply not oryginal. If it was , why did I predict it ?? I am not gonna keep you any longer, just TRY HARDER. ');
        break;
      default:
        break;
      }

      while (x > 1)
      {
        f = f * x;
        x = x - 1;
        console.log(x + "|" + f);
      }
      $('#factorialProduct').html("The <b>factorial</b> is " + f + ".");
    } else {
      alert('The value must be greater than ' + MIN_BOUND + ' and less than '+ MAX_BOUND + '.');
    }
  });
});
