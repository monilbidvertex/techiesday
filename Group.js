class Group {
  /**
   * This class will represent a group in a game.
   * A group can have an arraylist of players and can sort them in ascending
   * order by their amount of wins
   */

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
