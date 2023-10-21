$(document).ready(function(){
  $("#a1").click(function(){
    $("#submitted-msg").text("Incorrect Answer, Try Again.");
    $("#submitted-msg").css("background-color","red");
    $("#submitted-msg").show();
  });

  $("#a2").click(function(){
    $("#submitted-msg").text("Incorrect Answer, Try Again.");
    $("#submitted-msg").css("background-color","red");
    $("#submitted-msg").show();
  });

  $("#a3").click(function(){
    $("#submitted-msg").text("Incorrect Answer, Try Again.");
    $("#submitted-msg").css("background-color","red");
    $("#submitted-msg").show();
  });

  $("#a4").click(function(){
    $("#submitted-msg").text("Correct Answer!");
    $("#submitted-msg").css("background-color","green");
    $("#submitted-msg").show();
  });

  $(".answers").click(function(){
    $(".answers").prop("disabled", true);
    $("#a1").css("background-color", "red");
    $("#a2").css("background-color", "red");
    $("#a3").css("background-color", "red");
    $("#a4").css("background-color", "green");
    $("#a1").css("color", "black");
    $("#a2").css("color", "black");
    $("#a3").css("color", "black");
    $("#a4").css("color", "black");
  })
});