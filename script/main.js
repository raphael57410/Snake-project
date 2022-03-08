import Game from "./game.js";
import generateMap from "./map.js";
import Player from "./player.js";

const numberPlayer = document.getElementById("numberPlayer");
const startButton = document.getElementById("startGame");
const playerName = document.getElementById("playerName");
const startingPage = document.getElementById("startingPage");
const diceBloc = document.getElementById("diceBloc");
let playerNumber = 0;
let player = [];
//Choix du nombre de joueur et génération du formulaire pour les pseudos
numberPlayer.addEventListener("change", function (event) {
  let innerString = "";
  playerNumber = event.target.value;
  for (let i = 1; i <= playerNumber; i++) {
    innerString += `<label for="pName">Nom du joueur ${i} : </label>
        <input type="text" name="pName" id="player${i}"/>`;
  }
  playerName.innerHTML = innerString;
});

//Création de la partie
startButton.addEventListener("click", function () {
  for (let i = 1; i <= playerNumber; i++) {
    switch (i) {
      case 1:
        const player1 = new Player(
          document.getElementById(`player${i}`).value,
          1
        );
        player1.displayPlayer();
        break;
      case 2:
        const player2 = new Player(
          document.getElementById(`player${i}`).value,
          2
        );
        player2.displayPlayer();
        break;
      case 3:
        const player3 = new Player(
          document.getElementById(`player${i}`).value,
          3
        );
        player3.displayPlayer();
        break;
      case 4:
        const player4 = new Player(
          document.getElementById(`player${i}`).value,
          4
        );
        player4.displayPlayer();
        break;
    }
  }
  const party = new Game(playerNumber);
  startingPage.hidden = true;
  diceBloc.hidden = false;
  generateMap();
});
