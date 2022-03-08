class Player {
  constructor(name, id) {
    this.name = name;
    this.id = id;
    this.position = 1;
  }

  updatePosition(dice) {
    this.position += dice;
    document.getElementById(
      `${this.name + this.id}`
    ).innerHTML = `Position actuelle : Case ${this.position}`;
  }

  displayPlayer() {}

  rollDice() {
    return Math.floor(Math.random() * 6) + 1;
  }
}

export default Player;
