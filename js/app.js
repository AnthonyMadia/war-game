/*-------------------------------- Constants --------------------------------*/
const deck = ["dA","dQ","dK","dJ","d10","d09","d08","d07","d06","d05","d04","d03","d02","hA","hQ","hK","hJ","h10","h09","h08","h07","h06","h05","h04","h03","h02","cA","cQ","cK","cJ","c10","c09","c08","c07","c06","c05","c04","c03","c02","sA","sQ","sK","sJ","s10","s09","s08","s07","s06","s05","s04","s03","s02"]



const cardValues = [
  {suit: "dA", rank: 11},
  {suit: "dQ", rank: 10},
  {suit: "dK", rank: 10},
  {suit: "dJ", rank: 10},
  {suit: "d10", rank: 10},
  {suit: "d09", rank: 10},
  {suit: "d08", rank: 8},
  {suit: "d07", rank: 7},
  {suit: "d06", rank: 6},
  {suit: "d05", rank: 5},
  {suit: "d04", rank: 4},
  {suit: "d03", rank: 3},
  {suit: "d02", rank: 2},
  {suit: "hA", rank: 11},
  {suit: "hQ", rank: 10},
  {suit: "hK", rank: 10},
  {suit: "hJ", rank: 10},
  {suit: "h10", rank: 10},
  {suit: "h09", rank: 9},
  {suit: "h08", rank: 8},
  {suit: "h07", rank: 7},
  {suit: "h06", rank: 6},
  {suit: "h05", rank: 5},
  {suit: "h04", rank: 4},
  {suit: "h03", rank: 3},
  {suit: "h02", rank: 2},
  {suit: "cA", rank: 11},
  {suit: "cQ", rank: 10},
  {suit: "cK", rank: 10},
  {suit: "cJ", rank: 10},
  {suit: "c10", rank: 10},
  {suit: "c09", rank: 9},
  {suit: "c08", rank: 8},
  {suit: "c07", rank: 7},
  {suit: "c06", rank: 6},
  {suit: "c05", rank: 5},
  {suit: "c04", rank: 4},
  {suit: "c03", rank: 3},
  {suit: "c02", rank: 2},
  {suit: "sA", rank: 11},
  {suit: "sQ", rank: 10},
  {suit: "sK", rank: 10},
  {suit: "sJ", rank: 10},
  {suit: "s10", rank: 10},
  {suit: "s09", rank: 9},
  {suit: "s08", rank: 8},
  {suit: "s07", rank: 7},
  {suit: "s06", rank: 6},
  {suit: "s05", rank: 5},
  {suit: "s04", rank: 4},
  {suit: "s03", rank: 3},
  {suit: "s02", rank: 2}
]

// for (let i = 0; i < deck.length; i++) {
//   for (let j = 0; j < cardValues.length; j++) {
//    if (deck[i] === cardValues[j].suit) {
//      console.log(cardValues[j].rank)
//    }
//   }
// }
// console.log(cardValues[0].suit) // this gets suit





/*---------------------------- Variables (state) ----------------------------*/
let playerDeck, warArray, computerDeck, winner


/*------------------------ Cached Element References ------------------------*/
const turnCard = document.querySelector('#turn-btn')
const restartBtn = document.querySelector('#restart-btn')
const message = document.querySelector('.message')
const playerCard = document.querySelector('.player-card')
const computerCard = document.querySelector('.comp-card')
const pCardsLeft = document.querySelector('.p-cards-left')
const cCardsLeft = document.querySelector('.c-cards-left')
const scoreBoard = document.querySelector('#score-board')
const playerScore = document.querySelector('#player-score')
const computerScore = document.querySelector('#computer-score')

/*----------------------------- Event Listeners -----------------------------*/
turnCard.addEventListener('click', handleClick)
restartBtn.addEventListener('click', render)



/*-------------------------------- Functions --------------------------------*/
init()


function init() {
  createDeck()
  shuffle(deck) // randomize deck
  sort() // divide deck between player and computer
  message.textContent = 'Turn Card to Begin!!!'
  pCardsLeft.textContent = ''
  cCardsLeft.textContent = ''
  scoreBoard.innerHTML = 'Scoreboard'
  playerCard.innerHTML = ''
  computerCard.innerHTML = ''
  restartBtn.classList.add('hidden') // fix this 
  render() // render at end of this function
}

function handleClick(evt) {
  playerCard.classList.remove('outline')
  computerCard.classList.remove('outline')
  playerCard.classList.add('dK') // add random card
  computerCard.classList.add('dA') // add random card
  compare()
  sort()
}

function createDeck() {
  let cards = []
  for (let i = 0; i < cardValues.length; i++) {
    cards.push(cardValues[i]);
  }
  // console.log(cards)
}

// function shuffle(a) {
//   console.log('randomize deck ')
// }

function shuffle(deck) {
  for( 
    let j, x, i = deck.length; 
    i; 
    j = Math.floor(Math.random() * i), 
    x = deck[--i], deck[i] = deck[j], deck[j] = x
  );
  console.log(deck);
}

function compare() {
  // compare the classes and values of each card with 
  // the object of cards; move into winner deck
  console.log('compare')
}

function sort() {
  // after comparing, move cards to winners deck (array)
  console.log('')
}


function render(evt) {
  // fix this 
  playerCard.classList.remove('dK')
  computerCard.classList.remove('dA')
  playerCard.classList.add('outline')
  computerCard.classList.add('outline')
  
}

function war() {

}