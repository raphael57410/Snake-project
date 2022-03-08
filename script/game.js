class Game {
  constructor(numOfPlayer) {
    this.numOfPlayer = numOfPlayer;
    this.turn = 1;
  }
  rollDice() {
    return Math.floor(Math.random() * 6) + 1;
  }

  turn() {}
}

export default Game;
