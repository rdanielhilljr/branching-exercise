$(document).ready(function() {
  var learnSomething  = prompt("Would you like to learn about turtles?");

  if (learnSomething === "yes") {
    $('#turtle').show();
  } else if (learnSomething !== "yes") {
    var snakes = prompt("What about snakes?")

    if (snakes === "yes") {
      $('#snake').show();
    } else if (snakes !== "yes") {
      var insect = prompt("Still no? What about a praying mantis?")

      if (insect === "yes")
        $('#insect').show();

        else {
          alert("Fine! Go google some cat pictures or something!")
        }
  }






}

});
