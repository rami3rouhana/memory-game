// Images name
const images = ["c", "c++", "java", "javascript", "python"];


// Start game
const startGame = ()=>{

    // Cards Selection
    const firstPair = Math.random() * 5;
    do {
        const secondPair = Math.random() * 5;
    } while (firstPair!=secondPair);
    do {
        const thirdPair = Math.random() * 5;
    } while (firstPair!=thirdPair && thirdPair!=secondPair);


    const cards = document.getElementsByClassName("card");

    cards.forEach(element => {
        
    });
}

document.getElementById("start").addEventListener("click", startGame)