class Player {
  static get VERSION() {
    return '0.1';
  }

  static betRequest(gameState, bet) {
    
    if(this.hasPoker(gameState)){
      bet(70);
    }
    if(this.hasPair(gameState)){
      bet(20);
    }
      bet(10);
  }

  static hasPair(gameState) {
    
    let count=0;
    const allCards = this.getAllCards(gameState);
    for(let c in allCards){
      for(let k in allCards){
        if(k===c){
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

  static hasPoker(gameState) {
    
    let count=0;
    const allCards = this.getAllCards(gameState);
    for(let c in allCards){
      for(let k in allCards){
        if(k===c){
          count++;
        }
      }
      if (count==4){
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
}


module.exports = Player;
