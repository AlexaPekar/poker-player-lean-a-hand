class Player {
  static get VERSION() {
    return '0.1';
  }

  static betRequest(gameState, bet) {
    console.log(gameState);
    bet(0);
  }

  static showdown(gameState) {
  }

  static getHoleCards(gameSate) {
    const players = gameSate.players;
    for (i = 0; i < players.length; i++) {
      let player = players[i];
      if (player.name === 'Lean a hand') {
        return player.hole_cards;
      }
    }
  }
}

module.exports = Player;
