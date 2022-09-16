// Images name
let images = ["c.jpg", "c++.jpg", "java.jpg", "javascript.png", "python.png"];

// Card Placement
let cardPlacement = [1,2,3,4,5,0];


// Start game
const startGame = () => {
    
    // Shuffle the cards
    shuffleArray(cardPlacement);

    // Get cards
    const cards = document.getElementsByClassName("card");

    // Cards Selection
    shuffleArray(images);

    // Place first pair
    cards[cardPlacement[0]].src=`./images/${images[0]}`;
    cards[cardPlacement[1]].src=`./images/${images[0]}`;

    // Place second pair
    cards[cardPlacement[2]].src=`./images/${images[1]}`;
    cards[cardPlacement[3]].src=`./images/${images[1]}`;
    // Place second pair

    cards[cardPlacement[4]].src=`./images/${images[2]}`;
    cards[cardPlacement[5]].src=`./images/${images[2]}`;

    debugger
}

// Shuffle Array
function shuffleArray(array) {
    for (let i = array.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1));
        [array[i], array[j]] = [array[j], array[i]];
    }
}

document.getElementById("start").addEventListener("click", startGame);