var $box = $('.box');
var player = 'X';
var clickedBoxes = [];
var xMoves = [];
var oMoves = [];
// var winningCombos = [['A1','B1','C1'], 
//                     ['A2','B2','C2'],
//                     ['A3','B3','C3'],
//                     ['A1','A2','A3'],
//                     ['B1','B2','B3'],
//                     ['C1','C2','C3'],
//                     ['A1','B2','C3'],
//                     ['C1','B2','A3']]

console.log($box);

function checkWin() {

}

function resetGame() {
    player = 'X';
    clickedBoxes = [];
    xMoves = [];
    oMoves = [];
    $box.empty() = '';
}

// Select box and switch player function 
$box.click(function() {
    var boxId = (event.target.id);
    var b = clickedBoxes.includes(boxId);
    // console.log(`Clicked boxID is ${boxId} and player is ${player} and it is ${clickedBoxes.includes(boxId)} that this ID is in the clickedBoxes array`);
    
    // Check if boxId is in clickedBoxes array and if player is X
    if (b != true && player === 'X') {
        // Insert X into selected box
        document.getElementById(boxId).innerHTML = player;
        // Add box ID to clickedBoxes array
        clickedBoxes.push(boxId);
        // Add box Id to player xMoves array
        xMoves.push(boxId);
            // Check if xMoves has a winning combo
            
        // Switch to player O
        player = 'O';
    // Check if boxId is in clickedBoxes array and if player is O
    } else if (b != true && player === 'O') {
        // Insert X into selected box
        document.getElementById(boxId).innerHTML = player;
        // Add box ID to clickedBoxes array
        clickedBoxes.push(boxId);
        // Add box Id to player xMoves array
        oMoves.push(boxId);
            // Check if oMoves has a winning combo
        // Switch to player X
        player = 'X';  
    } else {
        alert('Box is taken, please choose a different box.')
    };
    console.log(`Clicked boxes: ${clickedBoxes}, X has boxes: ${xMoves}, and O has boxes: ${oMoves}.`);
});