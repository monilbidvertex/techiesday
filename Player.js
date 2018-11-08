class Player {
  /**
  * This class will represent a player in a game.
  * A player can have a name and their wins and losses can be calculated.
  */

  constructor(name) {
    /**
    * Constructor method.
    *
    * @param {string} name: The name of the player.
    */
    this.name = name;
    this.wins = 0;
    this.losses = 0;
    this.points = this.wins - this.losses;
  }

  getPlayerName() {
    return this.name;
  }

  addWin() {
    this.wins += 1;
  }

  subtractWin() {
    this.wins -= 1;
  }

  getWins() {
    return this.wins;
  }

  addLoss() {
    this.losses += 1;
  }

  subtractLoss() {
    this.losses -= 1;
  }

  getLosses() {
    return this.losses;
  }

  getPoints() {
    return this.points;
  }

  setPoints(points) {
    this.points += points;
  }
}
