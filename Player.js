class Player {
  static get VERSION() {
    return '0.1';
  }

  static betRequest(gameState, bet) {
    if(this.hasPair(gameState)){
      bet(20);
    }
      bet(0);
  }

  static hasPair(gameState) {
    
    let count=0;
    const allCards = this.getAllCards(gameState);
    for(let c in allCards){
      for(let k in allCards){
        if(allCards[k]==allCards[c]){
          count++;
        }
      }
      if (count==2){
        return true;
      }else{
        count=0;
      }
    }
    return false;
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
    let count = 0;
    const allCards = this.getAllCards(gameState);
    for(let c in allCards) {
      for (let k in allCards) {
        if (c === k) {
          count++;
        }
      }
      if (count === 2){
        return true;
      }else{
        count = 0;
      }
    }
  }
}


module.exports = Player;
