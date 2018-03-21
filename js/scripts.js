$(document).ready(function(){
  $("form#food-survey").submit(function(event) {
    event.preventDefault();
    var question1input = $("#date").val();
    var question2input = $("#beverage").val();
    var question3input = $("input:radio[name=flavor]:checked").val();
    var question4input = $("#color").val();

    $(".container").html("Your answers as following: </br><p>"+question1input+"</p></br><p>"+question2input+"</p><p>"+question3input+"</p><p>"+question4input+"</p>");

  });
});
