

function setHeading(heading) {
  document.querySelector("h1").innerHTML = `${heading}`;
}

function writeHeading(randomNumber1, randomNumber2, playerOneName, playerTwoName) {
var heading = "";

  if (randomNumber1 > randomNumber2) {
    heading = `${playerOneName} wins!`
    //heading = "Player 1 wins!";
  }
  else if (randomNumber2 > randomNumber1) {
    heading = `${playerTwoName} wins!`
    //heading = "Player 2 wins!";
  }
  else if (randomNumber1 === randomNumber2) {
    heading = "Draw! Roll again";
  }
  else {
    heading = "error";
  }

  setHeading(heading);

}

function getRandomDice(playerOneName, playerTwoName) {
  var randomNumber1 = Math.ceil(Math.random() * 6);
  var randomNumber2 = Math.ceil(Math.random() * 6);
  document.querySelector(".img1").src = `img/dice${randomNumber1}.png`;
  document.querySelector(".img2").src = `img/dice${randomNumber2}.png`;
  writeHeading(randomNumber1, randomNumber2, playerOneName, playerTwoName);
}

function getPlayerNames() {
  var playerOneName = prompt("Player 1's name:")
  var playerTwoName = prompt("Player 2's name:")

  document.querySelector(".player1").innerHTML = playerOneName;
  document.querySelector(".player2").innerHTML = playerTwoName;
  getRandomDice(playerOneName, playerTwoName);
}

function refresh() {
  getPlayerNames();
}
