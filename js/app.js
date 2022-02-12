/*-------------------------------- Constants --------------------------------*/
const deck = ["dA","dQ","dK","dJ","d10","d09","d08","d07","d06","d05","d04","d03","d02","hA","hQ","hK","hJ","h10","h09","h08","h07","h06","h05","h04","h03","h02","cA","cQ","cK","cJ","c10","c09","c08","c07","c06","c05","c04","c03","c02","sA","sQ","sK","sJ","s10","s09","s08","s07","s06","s05","s04","s03","s02"]

let keyValues = {
  dA: 1, dQ: 12, dK: 13, dJ: 11, d10: 10, d09: 9, d08: 8, d07: 7, d06: 6, d05: 5, d04: 4, d03: 3, d02: 2, hA: 1, hQ: 12, hK: 13, hJ: 11, h10: 10, h09: 9, h08: 8, h07: 7, h06: 6, h05: 5, h04: 4, h03: 3, h02: 2, cA: 1, cQ:12, cK: 13, cJ: 11, c10: 10, c09: 9, c08: 8, c07: 7, c06: 6, c05: 5, c04: 4, c03: 3,c02: 2, sA: 1, sQ: 12, sK: 13, sJ: 11, s10: 10, s09: 9, s08: 8, s07: 7, s06: 6, s05: 5, s04: 4, s03: 3, s02: 2,
}





/*---------------------------- Variables (state) ----------------------------*/
let playerDeck, warArray, computerDeck, winnerTF


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
  shuffle(deck) //// randomize deck
  split(playerDeck, computerDeck) //// divide deck between player and computer
  message.textContent = 'Message from init function'
  pCardsLeft.textContent = ''
  cCardsLeft.textContent = ''
  scoreBoard.innerHTML = 'Scoreboard'
  playerCard.innerHTML = ''
  computerCard.innerHTML = ''
  restartBtn.classList.add('hidden') // fix this 
  render() // render at end of this function
}

function handleClick(evt) {
  getValue()

  
  playerCard.classList.remove('outline')
  computerCard.classList.remove('outline')
  playerCard.classList.add(`${playerDeck}`) // add random card
  computerCard.classList.add('dA') // add random card
  winner()
}
function shuffle(deck) {
  for( 
    let j, x, i = deck.length; 
    i; 
    j = Math.floor(Math.random() * i), 
    x = deck[--i], deck[i] = deck[j], deck[j] = x
  );
}

function split(pDeck, cDeck) {
  // after comparing, move cards to winners deck (array)
  playerDeck = deck.slice(0,26)
  computerDeck = deck.slice(26, 52)
  console.log(playerDeck, computerDeck)
}


function getValue(card1, card2) {
  const randomIndex1 = Math.floor(Math.random() * (playerDeck.length))
  const randomIndex2 = Math.floor(Math.random() * (computerDeck.length))
  const selectedCard1 = playerDeck[randomIndex1]
  const selectedCard2 = computerDeck[randomIndex2]
  const player = keyValues[selectedCard1]
  const computer = keyValues[selectedCard2]
  console.log('Player Value:', player)
  console.log('Computer Value:', computer)
}



function winner() {
  // compare the classes and values of each card with 
  // the object of cards; move into winner deck
  console.log('compare')
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
