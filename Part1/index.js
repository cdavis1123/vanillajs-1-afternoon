let board = [];



function play (clickedId){
    let playerSpan = document.getElementById('player');
    let clickedElement = document.clickedId(clickedId);
    if(playerSpan.innerText === 'X'){
        playerSpan.innerText = 'O';
        clickedElement.innerText = 'X';
        board[clickedId] = 'X';
} else {
    playerSpan.innerText = 'X';
    clickedElement.innerText = 'O';
    board[clickedId] = 'O'
 }
console.log(board);
}

let topLeft = board[0];
let middleLeft = board[1];
let bottomLeft = board[2];
let topMiddle = board[3];
let center = board[4];
let bottomMiddle = board[5];
let topRight = board[6];
let middleRight = board[7];
let bottomRight = board[8];

// is there a winner? //
if (topRight !== undefined && topRight === topMiddle && topRight === topLeft){
    alert(`${topRight} is the winner`);
    return;
}
if (topLeft !== undefined && topLeft === topMiddle && topLeft === topRight){
    alert(`${topLeft} is the winner`);
    return;
}
if (topMiddle !== undefined && topMiddle === center && topMiddle === bottomMiddle){
    alert(`${topMiddle} is the winner`);
    return;
}
if (middleLeft !== undefined && middleLeft === center && middleLeft === middleRight){
    alert(`${middleLeft} is the winner`);
    return;
}
if (bottomLeft !== undefined && bottomLeft === bottomMiddle && bottomLeft === bottomRight){
    alert(`${bottomLeft} is the winner`);
    return;
}
if (bottomLeft != undefined && bottomLeft === center && bottomLeft === topRight){
    alert(`${bottomLeft} is the winner`);
    return;
}

//cat's game//
let boardFull = true;
for(let i=0; i <= 8; i++){
    if(board[i] === undefined){
        boardFull = false;
    }
}
if (boardFull === true) {
    alert("Cat's game, there is no winner");
}

function reset(){
    alert("when there is a winner");
}