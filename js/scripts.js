$(document).ready(function() {
  $("form#calculatedate").submit(function(event) {
    var age = parseInt($("input#age").val());
    var gender = $("select#gender").val();

    if (age <= 25 && gender === "male") {
    var celebrity = ("Selena Gomez");
    $("#celebrity").text(celebrity);
      $("#answer").show();
    } else if (age >=25 && gender === "male") {
    var celebrity = ("Jennifer Ansiton");
    $("#celebrity").text(celebrity);
      $("#answer").show();
    } else if (age <=25 && gender === "female") {
    var celebrity = ("Justin Bieber");
    $("#celebrity").text(celebrity);
      $("#answer").show();
    } else if (age >=25 && gender === "female") {
    var celebrity = ("Johnn Depp");
    $("#celebrity").text(celebrity);
    $("#answer").show();
    }

    event.preventDefault();
  });
});
