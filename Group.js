class Group {

  constructor() {
    this.players = [];

    }

    addPlayer(player) {
      player = new player();
      players.add(player);
    }

    sortGroup() {
      players.sort(function(a, b){return a.getWins() - b.getWins()});
      return players;
  }

    getWinner() {
      winner = players.get(0);
      return winner;
    }
}
