var choices = ["paper", "rock", "scissors"];
var i = Math.floor(Math.random() * 3);
var ComputerChoice = choices[i];
var UserPoints = 0;
function score() {
    var score_div = document.getElementById("score").innerHTML = UserPoints + " - " + ComputerPoints;
}
