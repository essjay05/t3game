// Set global variables
var $box = $('.box'),
    box = document.getElementsByClassName('box'),
    player = 'X',
    clickedBoxes = [],
    xMoves = [],
    oMoves = [],
    xScore = 0,
    $xScore = document.getElementById('scoreX'),
    oScore = 0,
    $oScore = document.getElementById('scoreO');
    // winningCombos = [['A1','B1','C1'],
    //                 ['A2','B2','C2'],
    //                 ['A3','B3','C3'],
    //                 ['A1','A2','A3'],
    //                 ['B1','B2','B3'],
    //                 ['C1','C2','C3'],
    //                 ['A1','B2','C3'],
    //                 ['C1','B2','A3']];

console.log(box);

function checkWin(bId, player, pScore) {
    console.log('inside checkWin');
    console.log('Box ID: ' + bId);
    console.log('Player: ' + player);
    console.log($box[0].innerHTML);
    // Check for Row wins:
    if ( $box[0].innerHTML == player && $box[1].innerHTML == player && $box[2].innerHTML == player ) {
        console.log(player + ' Wins!');
        updateScore(player);
    } else if ( $box[3].innerHTML == player && $box[4].innerHTML == player && $box[5].innerHTML == player ) {
        console.log(player + ' Wins!');
        updateScore(player);
    } else if ( $box[6].innerHTML == player && $box[7].innerHTML == player && $box[8].innerHTML == player ) {
        console.log(player + ' Wins!');
        updateScore(player);
    // Check for Column wins:
    } else if ( $box[0].innerHTML == player && $box[3].innerHTML == player && $box[6].innerHTML == player ) {
        console.log(player + ' Wins!');
        updateScore(player);
    } else if ( $box[1].innerHTML == player && $box[4].innerHTML == player && $box[7].innerHTML == player ) {
        console.log(player + ' Wins!');
        updateScore(player);
    } else if ( $box[2].innerHTML == player && $box[5].innerHTML == player && $box[8].innerHTML == player ) {
        console.log(player + ' Wins!');
        updateScore(player);
    // Check for Diagonal wins
    } else if ( $box[0].innerHTML == player && $box[4].innerHTML == player && $box[8].innerHTML == player ) {
        console.log(player + ' Wins!');
        updateScore(player);
    } else if ( $box[2].innerHTML == player && $box[4].innerHTML == player && $box[6].innerHTML == player ) {
        console.log(player + ' Wins!');
        updateScore(player);
    } else if (clickedBoxes.length == 9) {
        console.log(`It's a tie!`);
        on();
    } else {
        console.log(`Next move.`)
    }
}

function resetGame() {
    player = 'X';
    clickedBoxes = [];
    xMoves = [];
    oMoves = [];
    off();
    $box.empty() = '';
}

function updateScore(player) {
    if (player == 'X') {
        on();
        xScore++;
        $xScore.innerHTML = xScore;
    } else {
        on();
        oScore++;
        $oScore.innerHTML = oScore;
    } 
}
// Overlay toggle for gameOver message / reset
function on() {
    document.getElementById("overlay").style.display = "block";
} 
function off() {
    document.getElementById("overlay").style.display = "none";
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
            checkWin(boxId, player, xScore);
            console.log('xScore is: ' + xScore + '   |   ' + 'oScore is: ' + oScore );
            $xScore.innerHTML = xScore;
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
            checkWin(boxId, player, oScore);
            console.log('xScore is: ' + xScore + '   |   ' + 'oScore is: ' + oScore );
            $oScore.innerHTML = oScore;
        // Switch to player X
        player = 'X';  
    } else {
        alert('Box is taken, please choose a different box.')
    };
    console.log(`Clicked boxes: ${clickedBoxes}, X has boxes: ${xMoves}, and O has boxes: ${oMoves}.`);
});








// Failed Check Win JS tests/code:

    // wCombos;
    // Loop into wCombos:
    // for (let w = 0; w <= wCombos.length; w++) {
        //     let ticTacToe = 0;
        //     // Check if pMoves box is in combo
        //     if (wCombos[w].includes(pMoves) == true) {
        //         console.log('pMoves= ' + pMoves )
        //         ticTacToe++;
        //         console.log('ticTacToe= ' + ticTacToe );
        //         console.log('Player moves: ' + pMoves + ' | ' + 'WComBos: ' + wCombos )
        //     } return
        // }
        //     console.log(wCombos[w]);
    
            // Loop into winning combo 3 set array
        //     for (let b = 1; b <= wCombos[w].length; b++) {
        //         // Check if each element of char moves is in
        //             // winning array,
        //         let ticTacToe = 0;
        //         if (wCombos[w].includes(pMoves) == true) {
        //             ticTacToe++;
        //             if (ticTacToe == 3) {
        //                 console.log(`This player won!`)
        //             }
        //         } else {
        //             console.log(`This winning combo matched ${ticTacToe} of player's moves`)
        //         };
    
                
        //     }
        // }
    
    
        // if (0 === wCombos.length) {
        //     console.log('No Win' + 'Superset: ' + pMoves + ' Subset: ' + wCombos);
        //     console.log(false);
        // } return wCombos.every(function (box) {
        //     console.log('Superset: ' + pMoves + ' Subset: ' + wCombos);
        //     console.log(pMoves.indexOf(box) >= 0 + 'array2 in array1');
        // });