/*-------------------------------- Constants --------------------------------*/


/*---------------------------- Variables (state) ----------------------------*/
let playerDeck, playerCard, compDeck, compCard, warArray


/*------------------------ Cached Element References ------------------------*/
const turnCard = document.querySelector('#turn-btn')
const restartBtn = document.querySelector('#restart-btn')

/*----------------------------- Event Listeners -----------------------------*/
turnCard.addEventListener('click', showCards)

restartBtn.addEventListener('click', render)



/*-------------------------------- Functions --------------------------------*/
init()


function init() {


  render() // render at end of this function
}


function showCards(evt) {
  console.log('turn card!')
}

function render(evt) {
  console.log('restart')
}

// initialize deck with 52 cards
  // split 

function shuffle() {
  
}