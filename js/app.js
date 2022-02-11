/*-------------------------------- Constants --------------------------------*/


/*---------------------------- Variables (state) ----------------------------*/
let playerDeck, playerCard, compDeck, compCard, winner


/*------------------------ Cached Element References ------------------------*/
const turnCard = document.querySelector('#turn-btn')
const restartBtn = document.querySelector('#restart-btn')

/*----------------------------- Event Listeners -----------------------------*/
turnCard.addEventListener('click', showCards)

restartBtn.addEventListener('click', (evt) => {
  console.log(evt.target)
})



/*-------------------------------- Functions --------------------------------*/


function showCards(evt) {
  console.log('turn card!')
}

