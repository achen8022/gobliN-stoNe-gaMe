let stone1 = 3;
let stone2 = 3;
let stone3 = 3;
playerTurn = false;
gameOver = false;
const pile1button1 = document.getElementById("pile1-button-1");
const pile1button2 = document.getElementById("pile1-button-2");
const pile1button3 = document.getElementById("pile1-button-3");
const pile2button1 = document.getElementById("pile2-button-1");
const pile2button2 = document.getElementById("pile2-button-2");
const pile2button3 = document.getElementById("pile2-button-3");
const pile3button1 = document.getElementById("pile3-button-1");
const pile3button2 = document.getElementById("pile3-button-2");
const pile3button3 = document.getElementById("pile3-button-3");
function startGame() {
    stone1 = 3;
    stone2 = 3;
    stone3 = 3;
    playerTurn = false;
    gameOver = false;
    goblinTurn();
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
    if (!playerTurn && !gameOver) {
        let takePile = 1;
        if ((stone1 > stone2) && (stone1 > stone3)) {
            takePile = 1;
        }
        else if ((stone2 > stone1) && (stone2 > stone3)) {
            takePile = 2;
        }
        else {
            takePile = 3;
        }
        if (takePile == 1 && stone1 != 0) {
            stone1 -= 1;
        }
        else if (takePile == 2 && stone2 != 0) {
            stone2 -= 1;
        }
        else if(takePile == 3 && stone3 != 0) {
            stone3 -= 1;
        }
        // if (decideWinner) {
        //     declareWinner(player);
        // }
        // else {
        playerTurn = true;
        document.getElementById("unk-comment").textContent = "We took 1 stone from pile " + takePile + ", because we are smart."
        display();
        enableButtons();
        // }
    }
}

function takeStones(pile, amount) {
    if(pile == 1) {
        if(stone1 - amount >= 0) {
            stone1 -= amount;
            display();
            document.getElementById("unk-comment").textContent = "You took " + amount + " from pile 1."
            playerTurn = false;
            goblinTurn();
        }
        else {
            window.alert("You can't take " + amount + " from pile 1.");
        }
    }
    if(pile == 2) {
        if(stone2 - amount >= 0) {
            stone2 -= amount;
            display();
            playerTurn = false;
            goblinTurn();
        }
        else {
            window.alert("You can't take " + amount + " from pile 2.");
        }
    }
    if(pile == 3) {
        if(stone3 - amount >= 0) {
            stone3 -= amount;
            display();
            playerTurn = false;
            goblinTurn();
        }
        else {
            window.alert("You can't take " + amount + " from pile 3.");
        }
    }
}