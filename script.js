var $box = $('.box');
var player = 'X';
var clickedBoxes = [];
var xMoves = [];
var oMoves = [];

console.log($box);

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