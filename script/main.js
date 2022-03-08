const numberPlayer = document.getElementById("numberPlayer");
const startButton = document.getElementById("startGame");
const playerName = document.getElementById("playerName");

numberPlayer.addEventListener("change", function (event) {
  let innerString = "";
  for (let i = 1; i <= event.target.value; i++) {
    innerString += `<label for="pName">Nom du joueur ${i} : </label>
        <input type="text" name="pName"/>`;
  }
  playerName.innerHTML = innerString;
});
