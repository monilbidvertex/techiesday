class Player {
  constructor(name) {
    this.name = name;
    this.wins = 0;
    this.losses = 0;
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
}
