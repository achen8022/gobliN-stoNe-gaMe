let stone1 = 3;
let stone2 = 3;
let stone3 = 3;
let playerTurn = false;
let gameOver = false;
const pile1button1 = document.getElementById("pile1-button-1");
const pile1button2 = document.getElementById("pile1-button-2");
const pile1button3 = document.getElementById("pile1-button-3");
const pile2button1 = document.getElementById("pile2-button-1");
const pile2button2 = document.getElementById("pile2-button-2");
const pile2button3 = document.getElementById("pile2-button-3");
const pile3button1 = document.getElementById("pile3-button-1");
const pile3button2 = document.getElementById("pile3-button-2");
const pile3button3 = document.getElementById("pile3-button-3");
let currentPlayer = "goblin"; // Start with goblin's turn

function startGame() {
    stone1 = 3;
    stone2 = 3;
    stone3 = 3;
    playerTurn = false;
    gameOver = false;
    display(); // Add this to initialize the display
    goblinTurn(); // Start the game with goblin's turn
}

function enableButtons() {
    pile1button1.disabled = !playerTurn;
    pile1button2.disabled = !playerTurn;
    pile1button3.disabled = !playerTurn;
    pile2button1.disabled = !playerTurn;
    pile2button2.disabled = !playerTurn;
    pile2button3.disabled = !playerTurn;
    pile3button1.disabled = !playerTurn;
    pile3button2.disabled = !playerTurn;
    pile3button3.disabled = !playerTurn;
}

function display() {
    document.getElementById("pile1").textContent = stone1;
    document.getElementById("pile2").textContent = stone2;
    document.getElementById("pile3").textContent = stone3;
}

function goblinTurn() {
    checkForWinner();
    if (gameOver) {
        declareWinner("goblin");
    }
    else if (!playerTurn) {
        let maxStones = Math.max(stone1, stone2, stone3);
        let takePile;

        if (maxStones === stone1) {
            takePile = 1;
        }
        else if (maxStones === stone2) {
            takePile = 2;
        }
        else {
            takePile = 3;
        }

        if (takePile === 1 && stone1 !== 0) {
            stone1 -= 1;
        }
        else if (takePile === 2 && stone2 !== 0) {
            stone2 -= 1;
        }
        else if (takePile === 3 && stone3 !== 0) {
            stone3 -= 1;
        }
        display();
        document.getElementById("unk-comment").textContent = "UnK: We took 1 stone from pile " + takePile + ", because we are smart."
        playerTurn = true;
        enableButtons();
        checkForWinner();
        if (gameOver) {
            declareWinner("you");
        }
    }
}


function takeStones(pile, amount) {
    if (playerTurn == true) {
        let stonePile = 0;
        if (pile == 1) {
            stonePile = stone1;
        } else if (pile == 2) {
            stonePile = stone2;
        } else if (pile == 3) {
            stonePile = stone3;
        }

        if (stonePile - amount >= 0) {
            if (pile == 1) {
                stone1 -= amount;
            } else if (pile == 2) {
                stone2 -= amount;
            } else if (pile == 3) {
                stone3 -= amount;
            }
            document.getElementById("unk-comment").textContent = "UnK: You took " + amount + " from pile " + pile + ". What a bad move.";
            display();
            enableButtons();
            playerTurn = false;
            // Introduce a delay before the goblin's turn
            setTimeout(goblinTurn, 3000); // Delay for 3 second (adjust as needed)
        } else {
            window.alert("You can't take " + amount + " from pile " + pile + ".");
        }
    }

}

function checkForWinner() {
    if (stone1 == 0 && stone2 == 0 && stone3 == 0) {
        gameOver = true;
    }
}

function declareWinner(player) {
    if (player == "goblin") {
        document.getElementById("unk-comment").textContent = "UnK: Hahaha. You lost, what a big loser."
        document.getElementById("gloob-comment").textContent = "GlooB: Nice game."
        setTimeout(function () {
            window.alert("You lost");
        }, 1000);
    }
    else if (player == "you") {
        document.getElementById("unk-comment").textContent = "UnK: What, how did we lose? You must have cheated!"
        document.getElementById("gloob-comment").textContent = "GlooB: Nice game."
        setTimeout(function () {
            window.alert("You won");
        }, 1000);
    }
}
function resetGame() {
    startGame();
}

