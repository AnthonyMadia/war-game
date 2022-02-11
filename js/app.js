/*-------------------------------- Constants --------------------------------*/
const deck = ["dA","dQ","dK","dJ","d10","d09","d08","d07","d06","d05","d04","d03","d02","hA","hQ","hK","hJ","h10","h09","h08","h07","h06","h05","h04","h03","h02","cA","cQ","cK","cJ","c10","c09","c08","c07","c06","c05","c04","c03","c02","sA","sQ","sK","sJ","s10","s09","s08","s07","s06","s05","s04","s03","s02"]


/*---------------------------- Variables (state) ----------------------------*/
let playerDeck, warArray, computerDeck


/*------------------------ Cached Element References ------------------------*/
const turnCard = document.querySelector('#turn-btn')
const restartBtn = document.querySelector('#restart-btn')
const message = document.querySelector('.message')
const playerCard = document.querySelector('.player-card')
const computerCard = document.querySelector('.computer-card')
const pCardsLeft = document.querySelector('.p-cards-left')
const cCardsLeft = document.querySelector('.c-cards-left')
const scoreBoard = document.querySelector('#score-board')
const playerScore = document.querySelector('#player-score')
const computerScore = document.querySelector('#computer-score')

/*----------------------------- Event Listeners -----------------------------*/
turnCard.addEventListener('click', flip)
restartBtn.addEventListener('click', render)



/*-------------------------------- Functions --------------------------------*/
init()


function init() {
  shuffle()
  message.textContent = 'Turn Card to Begin!!!'
  pCardsLeft.textContent = ''
  cCardsLeft.textContent = ''
  scoreBoard.innerHTML = ''
  restartBtn.classList.add('hidden') // fix this 
  
  render() // render at end of this function
}
function shuffle() {
  // randomize cards 
  // split deck into 2
}

function flip(evt) {
  playerCard.classList.add('dK')
}

function render(evt) {
  playerCard.classList.remove('dK')
}

// initialize deck with 52 cards
  // split 

function shuffle() {

}