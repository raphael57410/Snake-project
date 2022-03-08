class Game extends Player {
  constructor(numOfPlayer) {
    this.numOfPlayer = numOfPlayer;
  }

  displayPlayers() {
    for (let i = 1; i <= this.numOfPlayer; i++) {
      document.getElementById("playerBloc").innerHTML += `
            <div class="bloc_player">
                <h2>Joueur ${i}</h2>
                <p></p>
                <p id="${this.name + this.number}">Position : Case ${
        this.position
      }</p>
            </div>`;
    }
  }
}
