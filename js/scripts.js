$(document).ready(function() {
  $("form#calculatedate").submit(function(event) {
    var age = parseInt($("input#age").val());
    var gender = $("select#gender").val();

    if (age <= 25 && gender === "male") {
    var celebrity = ("Selena Gomez");
    $("#celebrity").text(celebrity);
      $("#answer").show();
    } else {
      $("#celebrity").text("Jennifer Aniston");
        $("#answer").show();
    }


    event.preventDefault();
  });
});
