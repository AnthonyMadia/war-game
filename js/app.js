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
const playerCard = document.querySelector('.player-card') 
const computerCard = document.querySelector('.comp-card') 
const pCardsLeft = document.querySelector('.p-cards-left') 
const cCardsLeft = document.querySelector('.c-cards-left') 
const scoreBoard = document.querySelector('#score-board') //score board
const playerOutline = document.querySelector('.player-deck')
const computerOutline = document.querySelector('.comp-deck')
const pLocalStorage = document.getElementById('p-score')
const cLocalStorage = document.getElementById('c-score')

// local storage variables
const playerScore = document.querySelector('#player-score') 
const computerScore = document.querySelector('#computer-score') 

/*----------------------------- Audio  --------------------------------------*/
const sword1 = new Audio('../Audio/swordswing1.mp3')
const sword2 = new Audio('../Audio/swordswing2.mp3')
const whoosh = new Audio('../Audio/metalwhoosh.wav')
const explosion = new Audio('../Audio/war-explosion.mp3')

/*----------------------------- Event Listeners -----------------------------*/
turnCard.addEventListener('click', handleClick)
restartBtn.addEventListener('click', render)



/*-------------------------------- Functions --------------------------------*/
init()

function init() {
  shuffle(deck)
  outline()
  message.textContent = 'Press "Turn Card" to start!'
  pCardsLeft.textContent = ''
  cCardsLeft.textContent = ''
  restartBtn.style.visibility = ''
}

function handleClick(evt) {
  playerCard.classList.remove('outline')
  computerCard.classList.remove('outline')
  restartBtn.style.visibility = 'hidden'
  fillHands()
  showCards()
  compare()
  winner() 
  outline()
}

function outline() {
  if(playerDeck.length < 22) {
    playerOutline.className = 'card xlarge back-blue player-deck'
  }
  if (computerDeck.length < 22) {
    computerOutline.className = 'card xlarge back-blue comp-deck'
  }
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
  playerHand.push(playerPick)
  compPick = computerDeck.pop()
  compHand.push(compPick)
}


function showCards() {
  playerCard.className = `card xlarge player-card ${playerHand[playerHand.length - 1]}`
  computerCard.className = `card xlarge comp-card ${compHand[compHand.length - 1]}`

  pCardsLeft.textContent = `Player-Score: ${playerDeck.length}` 
  cCardsLeft.textContent = `Computer-Score: ${computerDeck.length}` 
}

function compare() {
  const pCardValue  = keyValues[playerPick]
  const cCardValue = keyValues[compPick]



  if (pCardValue > cCardValue) {
    let playerCardPush = compHand.pop()
    playerDeck.unshift(playerCardPush)
    //move cards from player hand into player deck
    playerDeck.unshift(playerHand)
    message.style.color = "aqua"
    whoosh.volume = .10
    whoosh.play()
    message.textContent = '🧑 Player wins this round!'
    
  } else if (pCardValue < cCardValue) {
    let computerCardPush = playerHand.pop()
    computerDeck.unshift(computerCardPush)
    // move cards from comp Hand into comp deck
    computerDeck.unshift(compHand)
    message.style.color = "pink"
    sword2.volume = .10
    sword2.play()
    message.textContent = 'Computer wins this round!💻 '
  } 
  else if (pCardValue === cCardValue) {
    message.textContent = '⚔️ WAR ⚔️ '
    turnCard.style.visibility = 'hidden' 
    explosion.volume = .10
    explosion.play()
    setTimeout(() => war(), 2000);
    
  }
}


function war() {
  if (playerDeck.length < 4) {
    message.textContent = `Computer is the winner.`
    confetti.start(2000)
    render()
  } else if (computerDeck.length < 4) {
    message.textContent = `Player is the winner.`
    confetti.start(2000)
    render()
  } else {
    let playerWarCards = playerDeck.splice(-4, 4)
    let compWarCards= computerDeck.splice(-4, 4)
    // Get the value of the war card
    let pWarPlayerValue = keyValues[playerWarCards[playerWarCards.length - 1]]
    let cWarPlayerValue = keyValues[compWarCards[compWarCards.length - 1]]
  
    
    if (pWarPlayerValue > cWarPlayerValue) {
      for (let i = 0; i < compWarCards.length; i++) {
        playerDeck.unshift(compWarCards[i])
      }
      message.textContent = `PLAYER HAS WON WAR`
      playerCard.className = `card xlarge player-card ${playerWarCards[playerWarCards.length - 1]}`
      computerCard.className = `card xlarge player-card ${compWarCards[compWarCards.length - 1]}`
    } else if (pWarPlayerValue < cWarPlayerValue) {
      for (let i = 0; i < playerWarCards.length; i++) {
        computerDeck.unshift(playerWarCards[i])
      }
      message.textContent = `COMPUTER HAS WON WAR`
      playerCard.className = `card xlarge player-card ${playerWarCards[playerWarCards.length - 1]}`
      computerCard.className = `card xlarge player-card ${compWarCards[compWarCards.length - 1]}`
      
    }
  }
  turnCard.style.visibility = '' 
}


function render(evt) {
  
  playerCard.classList.add('outline')
  computerCard.classList.add('outline')
  restartBtn.style.visibility = '' 
}

function winner(){
  if (playerDeck.length < 3) {
    message.textContent = `Computer is the winner.`
    confetti.start(2000)
    
  }
  else if (computerDeck.length < 3) {
    message.textContent = `Player is the winner.`
    confetti.start(2000)
  }
}


