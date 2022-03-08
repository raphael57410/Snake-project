class Player {
  constructor(name, id) {
    this.name = name;
    this.id = id;
    this.position = 1;
  }

  updatePosition(dice) {
    this.position += dice;
    console.log(this.name + this.id);
    document.getElementById(
      `${this.name + this.id}`
    ).innerHTML = `Position : Case ${this.position}`;
  }
  displayPlayer() {
    playerBloc.innerHTML += `
      <div class="bloc_player">
          <h2>Joueur ${this.id}</h2>
          <p>${this.name}</p>
          <p id="${this.name + this.id}">Position : Case ${this.position}</p>
      </div>`;
  }
}

export default Player;
