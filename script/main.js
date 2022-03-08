const numberPlayer = document.getElementById("numberPlayer");
const startButton = document.getElementById("startGame");
const playerName = document.getElementById("playerName");
const startingPage = document.getElementById("startingPage");
let playerNumber = 0;
//Choix du nombre de joueur et génération du formulaire pour les pseudos
numberPlayer.addEventListener("change", function (event) {
  let innerString = "";
  playerNumber = event.target.value;
  for (let i = 1; i <= playerNumber; i++) {
    innerString += `<label for="pName">Nom du joueur ${i} : </label>
        <input type="text" name="pName"/>`;
  }
  playerName.innerHTML = innerString;
});

//Création de la partie

startButton.addEventListener("click", function () {
  startingPage.hidden = true;
});
