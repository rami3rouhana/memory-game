// Images name
let images = ["c.jpg", "c++.jpg", "java.jpg", "javascript.png", "python.png"];

// Card Placement
let cardPlacement = [1, 2, 3, 4, 5, 0];

// Game Status
let gameOn = false;

// Get cards
const cards = document.getElementsByClassName("card");
const background = document.getElementsByClassName("background");

// Image selection 
const imageSelect = (event) => {
    event.currentTarget.parentElement.parentElement.classList.add("flip-image")
    event.currentTarget.parentElement.parentElement.parentElement.classList.add("flip-image")
}

// Start game
const startGame = () => {

    gameOn = true;

    // Shuffle the cards
    shuffleArray(cardPlacement);

    // Cards Selection
    shuffleArray(images);

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
        if(i > 0 && i < 6){
        cards[cardPlacement[i]].src = `./images/${images[image]}`;
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


document.getElementById("start").addEventListener("click", startGame);