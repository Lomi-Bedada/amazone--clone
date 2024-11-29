$(document).ready(function () {
  $(".toggle-button").click(function () {
    $(".toggle-div").slideToggle(); // Toggle all divs with the class 'toggle-div'

    // Change the button text based on the current visibility
    if ($(".toggle-div").is(":visible")) {
      $(this).text("Toggle Divs (-)");
    } else {
      $(this).text("Toggle Divs (+)");
    }
  });
});
