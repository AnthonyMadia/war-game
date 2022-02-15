/*-------------------------------- Constants --------------------------------*/
const deck = ["dA","dQ","dK","dJ","d10","d09","d08","d07","d06","d05","d04","d03","d02","hA","hQ","hK","hJ","h10","h09","h08","h07","h06","h05","h04","h03","h02","cA","cQ","cK","cJ","c10","c09","c08","c07","c06","c05","c04","c03","c02","sA","sQ","sK","sJ","s10","s09","s08","s07","s06","s05","s04","s03","s02"]

let keyValues = {
  dA: 1, dQ: 12, dK: 13, dJ: 11, d10: 10, d09: 9, d08: 8, d07: 7, d06: 6, d05: 5, d04: 4, d03: 3, d02: 2, hA: 1, hQ: 12, hK: 13, hJ: 11, h10: 10, h09: 9, h08: 8, h07: 7, h06: 6, h05: 5, h04: 4, h03: 3, h02: 2, cA: 1, cQ:12, cK: 13, cJ: 11, c10: 10, c09: 9, c08: 8, c07: 7, c06: 6, c05: 5, c04: 4, c03: 3,c02: 2, sA: 1, sQ: 12, sK: 13, sJ: 11, s10: 10, s09: 9, s08: 8, s07: 7, s06: 6, s05: 5, s04: 4, s03: 3, s02: 2,
}



/*---------------------------- Variables (state) ----------------------------*/
let playerDeck = [], warArray = [], computerDeck = [], playerHand = [], compHand = [], playerPick = [], compPick = [], playerValue, computerValue, playerTotal, compTotal

/*------------------------ Cached Element References ------------------------*/
const turnCard = document.querySelector('#turn-btn')
const restartBtn = document.querySelector('#restart-btn')
const message = document.querySelector('.message')
const playerCard = document.querySelector('.player-card') // add class to player's card
const computerCard = document.querySelector('.comp-card') // add class to computer's card
const pCardsLeft = document.querySelector('.p-cards-left') // player cards left message
const cCardsLeft = document.querySelector('.c-cards-left') // computer cards message
const scoreBoard = document.querySelector('#score-board') //score board
const playerScore = document.querySelector('#player-score') //score board
const computerScore = document.querySelector('#computer-score') //scoreboard
const playerOutline = document.querySelector('.player-deck')
const computerOutline = document.querySelector('.comp-deck')

/*----------------------------- Event Listeners -----------------------------*/
turnCard.addEventListener('click', handleClick)
restartBtn.addEventListener('click', render)



/*-------------------------------- Functions --------------------------------*/
init()

function init() {
  shuffle(deck)
  message.textContent = 'Message from init function (change)'
  pCardsLeft.textContent = ''
  cCardsLeft.textContent = ''
  scoreBoard.innerHTML = 'Scores in init'
  playerCard.innerHTML = ''
  computerCard.innerHTML = ''
  // restartBtn.style.visibility = 'hidden' 
  render() // render at end of this function
}

function handleClick(evt) {
  playerCard.classList.remove('outline')
  computerCard.classList.remove('outline')
  
  fillHands()
  showCards()
  compare() 
  winner()
}


function shuffle(deck) {
  for( 
    let j, x, i = deck.length; 
    i; 
    j = Math.floor(Math.random() * i), 
    x = deck[--i], deck[i] = deck[j], deck[j] = x
    );
    playerDeck = deck.slice(0,26)
    computerDeck = deck.slice(26, 52)
}
  
  
function fillHands() {
  playerPick = playerDeck.pop()
  console.log(`Fill hands playerPick - ${playerPick}`)
  playerHand.push(playerPick)
  console.log(`Player Hand = ${playerHand}`)
  compPick = computerDeck.pop()
  console.log(`Fill hands compPick - ${compPick}`)
  compHand.push(compPick)
  console.log(`Comp Hand = ${playerHand}`)
}

function showCards() {
  playerCard.className = `card xlarge player-card ${playerHand[playerHand.length - 1]}`
  computerCard.className = `card xlarge comp-card ${compHand[compHand.length - 1]}`
}

function compare() {
  // if (playerPick === null || compPick === null) {
  //   return console.log('null stuff')
  // }
  const pCardValue  = keyValues[playerPick]
  const cCardValue = keyValues[compPick]

  if (pCardValue > cCardValue) {
    let playerCardPush = compHand.pop()
    playerDeck.unshift(playerCardPush)
    //move cards from player hand into player deck
    playerDeck.unshift(playerHand)
    message.textContent = '🧑 Player wins this round!'
    
  } else if (pCardValue < cCardValue) {
    let computerCardPush = playerHand.pop()
    computerDeck.unshift(computerCardPush)
    // move cards from comp Hand into comp deck
    computerDeck.unshift(compHand)
    message.textContent = '💻 Computer wins this round!'
  } 
  else if (pCardValue === cCardValue) {
    message.textContent = '⚔️ WAR ⚔️'
    turnCard.style.visibility = 'hidden' 
    setTimeout(() => {war()}, 2000);
    
  }
}




function war() {
  let playerWarCards = playerDeck.slice(-4)
  let compWarCards= computerDeck.slice(-4)
  // Get the value of the war card
  let pWarPlayerValue = keyValues[playerWarCards[playerWarCards.length - 1]]
  let cWarPlayerValue = keyValues[compWarCards[compWarCards.length - 1]]
  console.log(pWarPlayerValue, cWarPlayerValue)
  if (pWarPlayerValue > cWarPlayerValue) {
    for (let i = 0; i < compWarCards.length; i++) {
      playerDeck.unshift(compWarCards[i])
    }
    removeCards(computerDeck)
    message.textContent = `PLAYER HAS WON WAR. Length of Card deck is ^ ${playerDeck.length}`
    playerCard.className = `card xlarge player-card ${playerWarCards[playerWarCards.length - 1]}`
    computerCard.className = `card xlarge player-card ${compWarCards[compWarCards.length - 1]}`
    console.log(playerWarCards[playerWarCards.length - 1])
  } else if (pWarPlayerValue < cWarPlayerValue) {
    for (let i = 0; i < playerWarCards.length; i++) {
      computerDeck.unshift(playerWarCards[i])
    }
    removeCards(playerDeck)
    message.textContent = `COMPUTER HAS WON WAR. Length of comp deck is ^ ${computerDeck.length}`
    playerCard.className = `card xlarge player-card ${playerWarCards[playerWarCards.length - 1]}`
    computerCard.className = `card xlarge player-card ${compWarCards[compWarCards.length - 1]}`
    console.log(compWarCards[compWarCards.length - 1])

  }
  turnCard.style.visibility = '' 
}

function removeCards(arr) {
  arr.pop()
  arr.pop()
  arr.pop()
  arr.pop()
}

function render(evt) {
  
  playerCard.classList.add('outline')
  computerCard.classList.add('outline')
  restartBtn.style.visibility = '' 
}

function winner(){
  if (playerDeck.length === 0 && playerHand.length === 0) {
    console.log('sanity check')
    message.textContent = `Computer is the winner.`
  }
  else if (computerDeck.length === 0 && compHand.length === 0) {
    message.textContent = `Player is the winner.`
  }
  restartBtn.removeAttribute('hidden')
}