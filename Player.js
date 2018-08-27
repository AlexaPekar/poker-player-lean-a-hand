class Player {
  static get VERSION() {
    return '0.1';
  }

  static betRequest(gameState, bet) {



    try {
      

      if (this.hasPoker(gameState)) {
        console.log("HAS POKER");
        console.log(this.getAllCards(gameState));
        bet(this.getHighestBet(gameState) + 100);

      }

      else if (this.hasDrill(gameState)) {
        console.log("HAS DRILL");
        console.log(this.getAllCards(gameState));
        bet(this.getHighestBet(gameState) + 80);

      }

      else if (this.hasTwoPair(gameState)) {
        console.log("HAS TWO PAIR");
        console.log(this.getAllCards(gameState));
        bet(this.getHighestBet(gameState) + 65);

      }

      else if (this.hasPair(gameState)) {
        console.log("HAS PAIR");
        console.log(this.getAllCards(gameState));
        bet(this.getHighestBet(gameState) + 50);



    }

      bet(0);

  }
    catch (e) {
      bet(this.getHighestBet(gameState));
    }


  }

  static isActivePlayer(gameState, playerName) {
    for (let player in gameState.players) {
      if (player.name === playerName && player.status == "active") {
        return true;
      } else {
        return false;
      }
    }
  }

  static hasPair(gameState) {

    let count = 0;
    const allCards = this.getAllCards(gameState);
    for (let c = 0; c<allCards.length;c++) {
      for (let k=0; k<allCards.length;k++) {
        if (allCards[k].rank === allCards[c].rank) {
          count++;
        }
      }
      if (count == 2) {
        return true;
      } else {
        count = 0;
      }
    }
    return false;
  }

  static hasPoker(gameState) {

    let count = 0;
    const allCards = this.getAllCards(gameState);
    for (let c=0; c<allCards.length;c++) {
      for (let k = 0;k<allCards.length;k++) {
        if (allCards[k].rank === allCards[c].rank) {
          count++;
        }
      }
      if (count == 4) {
        return true;
      } else {
        count = 0;
      }
    }
    return false;
  }

  static hasDrill(gameState) {
    let count = 0;
    const allCards = this.getAllCards(gameState);
    for (let c=0; c<allCards.length;c++) {
      for (let k = 0;k<allCards.length;k++) {
        if (allCards[k].rank === allCards[c].rank) {
          count++;
        }
      }
      if (count == 3) {
        return true;
      } else {
        count = 0;
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

  static getMinimumRaise(gameState) {
    return gameState.minimum_raise;
  }

  static getRound(gameState) {
    return gameState.round;
  }


  static hasTwoPair(gameState) {
    let count = 0;
    let hasOnePair = false;
    let iIndex = 0;
    let jIndex = 0;
    let allCards = this.getAllCards(gameState);

    for (let i = 0; i < allCards.length; i++) {
      for (let j = 0; j < allCards.length; j++) {
        if (allCards[i].rank === allCards[j].rank) {
          count++;
          iIndex = i;
          jIndex = j;
        }
      }
      if (count === 2) {
        hasOnePair = true;
      } else {
        count = 0;
      }
    }
    hasOnePair = false;

    allCards.splice(iIndex, 1);
    allCards.splice(jIndex, 1);

    if (!hasOnePair) {
      return false;
    } else {
      for (let c=0; c<allCards.length;c++) {
        for (let k = 0;k<allCards.length;k++) {
          if (allCards[k].rank === allCards[c].rank) {
            count++;
          }
        }
        if (count === 4) {
          return true;
        } else {
          count = 0;
        }
      }
      return false;
    }
  }

  static isfaceToFace(gameState) {
    let numberOfPlayers = 0;
    for (let p in gameState.players) {
      if (p.status == "active") {
        numberOfPlayers += 1;
      }
    }
    if (numberOfPlayers === 2) {
      return true;
    }
    return false;
  }
}


module.exports = Player;
