var player1_name=localstorage.getitem("player1key");
var player2_name=localstorage.getitem("player2key");
var player1_score=0;
var player2_score=0;
document.getElementById("player1_name").innerHTML=player1_name+":";
document.getElementById("player2_name").innerHTML=player2_name+":";
document.getElementById("player1_score").innerHTML=player1_score;
document.getElementById("player2_score").innerHTML=player2_score;
document.getElementById("player_question").innerHTML="question-turn"+player1_name;
document.getElementById("answer_turn").innerHTML="answer-turn"+plauer2name;
function calculate() {
    var n1 = Number(document.getElementById("n1").value);
    perimeter = n1 * 4;
    document.getElementById("area").innerHTML = area;
    document.getElementById("perimeter").innerHTML = perimeter;
  }
  