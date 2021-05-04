// Create a deck of card A deck of cards consists of 52 cards.
// It looks like this:
// 1 of Spades, 2 of Spades, 3 of Spades,... 13 of Spades.
// 1 of Hearts, 2 of Hearts, 3 of Hearts, ...13 of Hearts.
// 1 of Diamonds, 2 of Diamonds, 3 of Diamonds,...13 of Diamonds.
// 1 of Clubs, 2 of Clubs, 3 of Clubs...13 of Clubs.

// 1. Initialze the deck of cards programmatically(don’t just hard code).
// 2. Print out all cards
// 3. Shuffle cards
// 4. Print out shuffled cards again
// 5. Sort by value or suit

const numberOfSets = ['Spades', 'Hearts', 'Diamonds', 'Clubs'];
const numberOfCardsPerSet = 13;

const cardDeckSet = () => {
    let temporaryDeck = [];

    for (i = 0; i < numberOfSets.length; i++) {
        for (j = 1; j <= numberOfCardsPerSet; j++) {
            temporaryDeck.push(`${j} of ${numberOfSets[i]}`)
        }
    }

    return temporaryDeck;
}

const shuffleDeck = (deckToShuffle) => {
    let lengthOfDeckToShuffle;
    lengthOfDeckToShuffle = deckToShuffle.length;

    while (lengthOfDeckToShuffle) {
        let generatedRamdomNumber;
        let temporaryCardShuffling;
        generatedRamdomNumber = Math.floor(Math.random() * lengthOfDeckToShuffle--);

        temporaryCardShuffling = deckToShuffle[lengthOfDeckToShuffle];

        deckToShuffle[lengthOfDeckToShuffle] = deckToShuffle[generatedRamdomNumber];

        deckToShuffle[generatedRamdomNumber] = temporaryCardShuffling;
    }
    return deckToShuffle;
}

(function cardDeck() {
    const cardDeck = cardDeckSet();
    console.log('+_+_+__print_deck', cardDeck);
    console.log('+_+_+__shuffled_deck', shuffleDeck(cardDeck));
    console.log('+_+_+__sorted_shuffled_deck', cardDeck.sort((a, b) => a.localeCompare(b, 'en', { numeric: true })));
})()
