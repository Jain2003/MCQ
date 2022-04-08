var correctOptions = ["A1", "B2", "C3", "D4"];
var userChosenOptions = [];
var remark=[];
var score=0;
var result;
var evaluate = true;
$("input").click(function() {
  userChosenOptions.push($(this).attr("id"));
});
$("button.submit").click(function() {
  if (evaluate) {
    for (var i = 0; i <= 3; i++) {
      if (correctOptions[i] == userChosenOptions[i]) {
        remark.push("correct")
        score++;
      }
      else {
        remark.push("Wrong");
        score--;
      }
    }
  }
  if (score >= 2) {
    result = "passed";
  } else {
    result = "failed";
  }
  $(".marks").text("You have Scored " + score + "/4. You have " + result + " the test");
    evaluate = false;
});
$(".result").click(function(){
  if(!evaluate){
    for(var i=1; i<=4; i++){
      $(".qNo"+ i).text(i);
      $(".Correct"+ i).text(correctOptions[i-1]);
      $(".sAns"+i).text(userChosenOptions[i-1]);
      $(".remarkAns"+i).text(remark[i-1]);
    }
  }
});
$(".clear").click(function() {
  userChosenOptions = [];
  $("input").prop("checked", false);
});
