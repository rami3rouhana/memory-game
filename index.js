// Images name
let images = ["c.jpg", "c++.jpg", "java.jpg", "javascript.png", "python.png"];

// Card Placement
let cardPlacement = [1, 2, 3, 4, 5, 0];

// Game Score
let gameScore = 0;

let correctCards = []

// Get cards
const cards = document.getElementsByClassName("card");
const background = document.getElementsByClassName("background");

// Image selection 
const imageSelect = (event) => {
    // Check if filpped
    if(event.currentTarget.parentElement.parentElement.classList.contains("flip-image")){
        event.currentTarget.parentElement.parentElement.classList.add("unflip-image");
        event.currentTarget.parentElement.parentElement.parentElement.classList.add("unflip-image");
        event.currentTarget.parentElement.parentElement.classList.remove("flip-image");
        event.currentTarget.parentElement.parentElement.parentElement.classList.remove("flip-image");
    // Check if unflippled
    }else if (event.currentTarget.parentElement.parentElement.classList.contains("unflip-image")) {
        event.currentTarget.parentElement.parentElement.classList.add("flip-image");
        event.currentTarget.parentElement.parentElement.parentElement.classList.add("flip-image");
        event.currentTarget.parentElement.parentElement.classList.remove("unflip-image");
        event.currentTarget.parentElement.parentElement.parentElement.classList.remove("unflip-image");
    }
    
    for(card of cards){ 
        if(event.currentTarget.parentElement.nextElementSibling){
        const selectedCard = event.currentTarget.parentElement.nextElementSibling.firstElementChild ;

        // Check if they match and adds score
        if(card.parentElement.parentElement.classList.contains("flip-image")&& card !== selectedCard && card.src === event.currentTarget.parentElement.nextElementSibling.firstElementChild.src ){
            card.removeEventListener("click", imageSelect);
            event.currentTarget.removeEventListener("click", imageSelect);
            card.parentElement.parentElement.firstElementChild.firstElementChild.removeEventListener("click", imageSelect);
            card.style.display ="none";
            event.currentTarget.parentElement.nextElementSibling.firstElementChild.style.display ="none";
            event.currentTarget.parentElement.nextElementSibling.firstElementChild.removeEventListener("click", imageSelect);
            correctCards.push(card);
            correctCards.push(event.currentTarget.parentElement.nextElementSibling.firstElementChild);
            gameScore ++;
            document.getElementById("score").innerText = gameScore;
            return
            // Check if they don't match to flip them
            }else if (card.parentElement.parentElement.classList.contains("flip-image") && event.currentTarget.parentElement.parentElement.classList.contains("flip-image") && card !== selectedCard && !correctCards.includes(event.currentTarget.parentElement.nextElementSibling.firstElementChild) && !correctCards.includes(card)){
                event.currentTarget.parentElement.parentElement.classList.add("unflip-image");
                event.currentTarget.parentElement.parentElement.parentElement.classList.add("unflip-image");
                event.currentTarget.parentElement.parentElement.classList.remove("flip-image");
                event.currentTarget.parentElement.parentElement.parentElement.classList.remove("flip-image");
                card.parentElement.parentElement.classList.add("unflip-image");
                card.parentElement.parentElement.parentElement.classList.add("unflip-image");
                card.parentElement.parentElement.classList.remove("flip-image");
                card.parentElement.parentElement.parentElement.classList.remove("flip-image");
                return 
            }
        }
    };
}

// Start game
const startGame = () => {

    correctCards = []

    for(card of cards){ 
        card.parentElement.parentElement.classList.add("unflip-image");
        card.parentElement.parentElement.parentElement.classList.add("unflip-image");
        card.parentElement.parentElement.classList.remove("flip-image");
        card.parentElement.parentElement.parentElement.classList.remove("flip-image");
        card.style.display = null;
    }

    // Shuffle the cards
    shuffleArray(cardPlacement);

    // Cards Selection
    shuffleArray(images);

    // Correct Cards

    for(let i in cards) {
        if( i < 2){
            image = 0
        }
        else if (i < 4){
            image = 1
        }
        else if (i < 6){
            image = 2
        }
        if(i >= 0 && i < 6){
        cards[cardPlacement[i]].src = `./images/${images[image]}`;
        cards[cardPlacement[i]].addEventListener("click", imageSelect);
        background[cardPlacement[i]].addEventListener("click", imageSelect);

        }
    }

}

// Shuffle Array
const shuffleArray = (array) => {
    for (let i = array.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1));
        [array[i], array[j]] = [array[j], array[i]];
    }
}

// Add reset function
document.getElementById("reset").addEventListener("click",()=>{gameScore=0;document.getElementById("score").innerText = gameScore; })

// Add Game start
document.getElementById("start").addEventListener("click", startGame);