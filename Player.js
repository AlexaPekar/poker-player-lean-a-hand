class Player {
  static get VERSION() {
    return '0.1';
  }

  static betRequest(gameState, bet) {


    try{

      if(this.hasPoker(gameState)){
        bet(this.getHighestBet(gameState)+100);
      }
      if(this.hasDrill(gameState)){
        bet(this.getHighestBet(gameState)+80);
      }
      if(this.hasPair(gameState)){
        bet(this.getHighestBet(gameState)+50);
      }
      bet(this.getHighestBet(gameState));
    } catch (e) {
      console.log(e);
      bet(this.getHighestBet(gameState));
    }


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

  static hasDrill(gameState) {
    let count=0;
    const allCards = this.getAllCards(gameState);
    for(let c in allCards){
      for(let k in allCards){
        if(k===c){
          count++;
        }
      }
      if (count==3){
        return true;
      }else{
        count=0;
      }
    }
    return false;
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

  static getHoleCards(gameSate) {
    const players = gameSate.players;
    for (let i = 0; i < players.length; i++) {
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

  static getHighestBet(gameState) {
    return gameState.current_buy_in;
  }

  static getMinimumRaise(gameState){
    return gameState.minimum_raise;
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
