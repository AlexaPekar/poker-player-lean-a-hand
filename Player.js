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

  static hasDrill(allCards) {

  }

  static showdown(gameState) {
  }

  static isDecentHand(cards) {

    if (this.pairInHand(cards)) {
      return true;
    }

    const decentCardValues = ['A', 'K', 'Q', 'J', '10'];
    let decentCards = [];


    for (let i = 0; i < decentCardValues.length; i++) {
      for (let k = 0; k < cards.length; k++) {
        if (decentCardValues[i] === cards[k].rank) {
          decentCards.push(cards[k]);
        }
      }

    }

    if (decentCards.length > 1) {
      return true;
    }
    return false;
  }

  static pairInHand(handCards) {
    return cards[0].rank === cards[1].rank;
  }


  static getCommunityCards(gameState) {
    return gameState.community_cards;
  }
}


module.exports = Player;
