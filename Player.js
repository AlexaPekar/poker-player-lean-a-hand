class Player {
  static get VERSION() {
    return '0.1';
  }

  static betRequest(gameState, bet) {
    console.log(gameState);
    bet(10);
  }

  static hasPair(gameState) {

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


  static getCommunityCards(gameState) {
    return gameState.community_cards;
  }

  static getAllCards(gameState) {
    const holeCards = this.getHoleCards(gameState);
    const communityCards = this.getCommunityCards(gameState);
    return holeCards.concat(communityCards);
  }

  static hasTwoPair(gameState) {
    const allCards = this.getAllCards(gameState);
    for (i = 0; i < allCards.length; i++) {
      let card = allCards[i];
    }
  }
}


module.exports = Player;
