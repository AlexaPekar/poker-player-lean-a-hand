class Player {
  static get VERSION() {
    return '0.1';
  }

  static betRequest(gameState, bet) {


    try{

      if(this.hasPoker(gameState)){
        bet(70);
      }
      if(this.hasPair(gameState)){
        bet(20);
      }
      bet(10);
    } catch (e) {
      console.log(e);
      bet(10);
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
    let highestBet = 0;
    const players = gameState.players;
    for (let player in players) {
      if (player.bet > highestBet) {
        highestBet = player.bet;
      }
    }
    if (highestBet === 0) {
      highestBet = 50;
    }
    return highestBet;
  }

  static hasTwoPair(gameState) {
    let count = 0;
    let hasOnePair = false;
    let allCards = this.getAllCards(gameState);

    for (let i = 0; i < allCards.length; i++) {
      for (let j = 0; j < allCards.length; i++) {
        if (allCards[i] === allCards[j]){
          count++;
          allCards.splice(i, 1);
          allCards.splice(j, 1);
        }
      }
      if (count === 1) {
        hasOnePair = true;
      } else {
        count = 0;
      }
    }
    hasOnePair = false;

    if (!hasOnePair) {
      return false;
    } else {
      for (let cardI in allCardsI){
        for(let cardJ in allCardsJ){
          if(cardI === cardJ){
            count++;
          }
        }
        if (count === 4) {
          return true;
        }else{
          count=0;
        }
      }
      return false;
    }
  }
}


module.exports = Player;
