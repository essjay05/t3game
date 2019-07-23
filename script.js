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
    
    // Check if boxId is in clickedBoxes array
    if (b != true && player === 'X') {
        document.getElementById(boxId).innerHTML = player;
        clickedBoxes.push(boxId);
        xMoves.push(boxId);
        player = 'O';
    } else if (b != true && player === 'O') {
        document.getElementById(boxId).innerHTML = player;
        clickedBoxes.push(boxId);
        oMoves.push(boxId);
        player = 'X';  
    } else {
        alert('Box is taken, please choose a different box.')
    };
    console.log(`Clicked boxes: ${clickedBoxes}, X has boxes: ${xMoves}, and O has boxes: ${oMoves}.`);
});