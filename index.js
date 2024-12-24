// Part one
// 1. value array, card append
const gameContainer = document.getElementById("game-container")
const cardValues=[
    "⚽️",
    "⚽️",
    "🏀",
    "🏀",
    "🏐",
    "🏐",
    "🏈",
    "🏈",
    "🎱",
    "🎱",
    "🎾",
    "🎾",
    "🧿",
    "🧿",
    "🔴",
    "🔴",
]

// Part two
// 2. shuffle holoih
 function shuffle(array){
    for(let i = array.length - 1; i >= 0; i--) {
        const j = Math.floor(Math.random() * (i + 1));
        [array[i],array[j]] = [array[j], array[i]];
    }
    console.log(array);
    
    return array;
 }
 shuffle(cardValues);
 
// part three
// 1. addeventlistener each one of the card
cardValues.forEach((value) => {
    const card = document.createElement("div")
    card.classList.add("card");
    card.dataset.value = value;
    card.innerHTML = '<span class="hidden">'+ value + "</span>"
    gameContainer.appendChild(card);
});


let firstCard = null;
let secondCard = null;
let lockBoard = false;

//  part four
// 1. flip function

function flipCard (event){
    // console.log(Math.floor(Math.random() * (1 + 10)));
    if (lockBoard)return;
    const clickedCard = event.target;
    console.log(clickedCard);
    
    if (clickedCard ===firstCard) return;
    clickedCard.classList.add("flipped");
    clickedCard.querySelector("span").classList.remove("hidden");
    if(!firstCard){
        firstCard = clickedCard;
    }
    else{
        secondCard = clickedCard;
        checkForMatch();
    }
}
 
// part five
// 1. match check match

function checkForMatch(){
    const isMatch = firstCard.dataset.value === secondCard.dataset.value;
    isMatch ? disableCards(): unflipCards();
}
 function disableCards(){
    firstCard.removeEventListener("click",flipCard);
    secondCard.removeEventListener("click",flipCard);
    resetBoard();
 }
// part six
// 1.unflip function and
function unflipCards() {
    lockBoard = true;
    setTimeout(() => {
        firstCard.classList.remove("flipped");
        firstCard.querySelector("span").classList.add("hidden");
        secondCard.classList.remove("flipped");
        secondCard.querySelector("span").classList.add("hidden");
        resetBoard();
    },1000);
}
 
// part seven
// 1. if matched disableCards funtion

function resetBoard() {
    [firstCard, secondCard,lockBoard] = [null,null,false];
}
const array = document.querySelectorAll(".card");
document.querySelectorAll(".card").forEach((card) => {
    card.addEventListener("click", flipCard);
});
// part eight
// 1. reset fucntion bichih