class MemoryGame {
  constructor(cards, pickedCards, pairsClicked, pairsGuessed) {
    this.cards = cards;
    // Add the rest of the properties here
    this.pickedCards = [];
    this.pairsClicked = 0;
    this.pairsGuessed = 0;
  }

  shuffleCards() {
    let shuffle = cards => {
      let indexOfCard = cards.length;
      // While there remain elements to shuffle...
      while (indexOfCard !== 0) {
        // Pick a remaining element...

        let randomIndex = Math.floor(Math.random() * indexOfCard);
        indexOfCard--;

        // And swap it with the current element.

        let randomCard = cards[indexOfCard];
        cards[indexOfCard] = cards[randomIndex];
        cards[randomIndex] = randomCard;
      }
      return cards;
    };
    shuffle(this.cards);
  }

  checkIfPair(card1, card2) {
    if (card1 !== card2) {
      this.pairsClicked++;
      return false;
    } else if (card1 === card2) {
      this.pairsGuessed++;
      return true;
    }
  }

  isFinished() {
    if (this.pairsGuessed === this.cards.length / 2) {
      return true;
    } else {
      return false;
    }
  }
}
