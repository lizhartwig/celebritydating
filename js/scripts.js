$(document).ready(function() {
  $("form#calculatedate").submit(function(event) {
    var age = parseInt($("input#age").val());

    if (age <= 25) {
    var celebrity = ("Selena Gomez");
    $("#celebrity").text(celebrity);
      $("#answer").show();
    }

    event.preventDefault();
  });
});
