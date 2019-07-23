var $box = $('.box');
var player = 'X';
var clickedBoxes = [];
var xMoves = [];
var oMoves = [];
console.log($box);

$box.click(function() {
    var boxId = (event.target.id);
    console.log(`Clicked boxID is ${boxId} and player is ${player} and it is ${clickedBoxes.includes(boxId)} that this ID is in the clickedBoxes array`);
    
    // Check if boxId is in clickedBoxes array
    if (clickedBoxes.includes(boxId) != 'true' && player === 'X') {
        document.getElementById(boxId).innerHTML = player;
        clickedBoxes.push(boxId);
        player = 'O';
        console.log(`inside IF Clicked boxID is ${boxId} and player is ${player}`);
    } else if (clickedBoxes.includes(boxId) != 'true' && player === 'O') {
        document.getElementById(boxId).innerHTML = player;
        player = 'X';  
        console.log(`inside elseIF Clicked boxID is ${boxId} and player is ${player}`)
    } else if (clickedBoxes.includes(boxId) == 'false' ) {
        console.log('Box is taken, please choose a different box.')
    };
    console.log(`Clicked boxes: ${clickedBoxes}`);
});