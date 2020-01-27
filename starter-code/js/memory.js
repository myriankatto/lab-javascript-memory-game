class MemoryGame {
  constructor(cards, pickedCards, pairsClicked, pairsGuessed) {
    this.cards = cards;
    // Add the rest of the properties here
    this.pickedCards = [];
    this.pairsClicked = 0;
    this.pairsGuessed = 0;
  }

  

  shuffleCards(cards) {
    for (let i = cards.length - 1; i > 0 ; i--) {
      const j = Math.floor(Math.random() * i);
      
      // const temp = cards[i]
      // cards[i] = cards[j]
      // cards[j] = temp
    }
    return undefined;
  };

  checkIfPair(card1, card2) {
    if (card1 !== card2) {
      this.pairsClicked ++;
      return false;
    } else if (card1 === card2){
      this.pairsGuessed ++;
      return true;
    }
  };

  isFinished() {
    if (pairsGuessed === this.pickedCards.length) {
      return true;
    } else if (pairsGuessed < this.pickedCards.length) {
      return false;
    }  return false;
  } 
};



