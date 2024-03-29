// Set global variables
var $box = $('.box'),
    box = document.getElementsByClassName('box'),
    player = 'X',
    clickedBoxes = [],
    xMoves = [],
    oMoves = [],
    $winMsg = $('#winMsg'),
    $tieMsg = $('#tieMsg'),
    xScore = 0,
    $xScore = $('#scoreX'),
    oScore = 0,
    $oScore = $('#scoreO');
    // winningCombos = [['A1','B1','C1'],
    //                 ['A2','B2','C2'],
    //                 ['A3','B3','C3'],
    //                 ['A1','A2','A3'],
    //                 ['B1','B2','B3'],
    //                 ['C1','C2','C3'],
    //                 ['A1','B2','C3'],
    //                 ['C1','B2','A3']];

console.log($oScore);

function checkWin2(bId, player) {
    console.log(`in checkWin2`);
}

function checkWin(player, pScore) {
    // console.log('inside checkWin');
    // console.log('Box ID: ' + bId);

    // console.log('overlayMsg below ');
    // console.log($('.overlayMsg'));
    // console.log('box innerhtml' + $box[0].innerHTML);
    $tieMsg[0].innerText = '';
    
    // Check for Row wins:
    if (( $box[0].innerHTML == player && $box[1].innerHTML == player && $box[2].innerHTML == player ) ||
        ( $box[3].innerHTML == player && $box[4].innerHTML == player && $box[5].innerHTML == player ) ||
        ( $box[6].innerHTML == player && $box[7].innerHTML == player && $box[8].innerHTML == player ) ||
        // Column Wins
        ( $box[0].innerHTML == player && $box[3].innerHTML == player && $box[6].innerHTML == player ) ||
        ( $box[1].innerHTML == player && $box[4].innerHTML == player && $box[7].innerHTML == player ) ||
        ( $box[2].innerHTML == player && $box[5].innerHTML == player && $box[8].innerHTML == player ) ||
        // Diagonal wins
        ( $box[0].innerHTML == player && $box[4].innerHTML == player && $box[8].innerHTML == player ) ||
        ( $box[2].innerHTML == player && $box[4].innerHTML == player && $box[6].innerHTML == player )) {
        console.log(player + ' Wins!');
        pScore++
        updateScore(player);
        return
    // Non-win checks (tie or no win yet)
    } else if (clickedBoxes.length == 9) {
        console.log(`It's a tie!`);
        $winMsg[0].innerHTML = '';
        $tieMsg[0].innerHTML = `It's a tie!`;
        on();
    } else {
        console.log(`Next move.`)
    }
}

function eraseBoard() {
    // console.log('inside erase board: boxes array below')
    var boxes = $box;
    // console.log(boxes);
    for (var b = 0; boxes.length >= 0; b ++) {
        console.log(boxes[b]);
        boxes[b].innerHTML = ''; 
    }
}

function resetGame() {
    // console.log($box);
    player = 'X';
    clickedBoxes = [];
    xMoves = [];
    oMoves = [];
    off();
    eraseBoard();
    // $('.box').innerHTML() = '';
    // console.log($box);
    $('.overlayMsg').innerHTML() = '';
}
function resetScore() {
    xScore = 0,
    oScore = 0,
    $xScore[0].innerHTML = xScore,
    $oScore[0].innerHTML = oScore;
    resetGame();
    // console.log(`in resetScore: xScore = ${xScore} and oScore = ${oScore}`)
}


function updateScore(player) {
    if (player == 'X') {
        xScore++;
        $xScore[0].innerHTML = xScore;
        $('#winMsg').css('color', '#a55eea');
        gameOver(player);
        on();
    } else {
        oScore++;
        $oScore[0].innerHTML = oScore;
        $('#winMsg').css('color', '#26de81')
        gameOver(player);
        on();
    } 
}

function gameOver(player) {
    // console.log(`inside gameOver function`)
    $winMsg[0].innerHTML = `<h1>Player ${player} won!</h1>`;
    $tieMsg[0].innerHTML = '';
}

// Overlay toggle for gameOver message / reset
function on() {
    document.getElementById("overlay").style.display = "block";
    console.log('xScore is: ' + xScore + '   |   ' + 'oScore is: ' + oScore );
} 
function off() {
    document.getElementById("overlay").style.display = "none";
}

// Select box and switch player function 
$box.click(function() {
    // Set boxId to id from current clicked box
    let boxId = (event.target.id);
    // Check if boxId is within the previously clickedBoxes array
    let b = clickedBoxes.includes(boxId);
    let $boxId = $(`#${boxId}`)[0]
    // console.log($boxId);

    // Check if boxId is in clickedBoxes array and if player is X
    if (b != true && player === 'X') {
        // Insert X into selected box
        $(`#${boxId}`).css('color', '#a55eea');
        $boxId.innerHTML = player;
        
        // document.getElementById(boxId).innerHTML = player;
        // Add box ID to clickedBoxes array
        clickedBoxes.push(boxId);
        // Add box Id to player xMoves array
        xMoves.push(boxId);
            // Check if xMoves has a winning combo
            checkWin(player, xScore);
            // checkWin2(boxId, player);
        // Switch to player O
        player = 'O';
    // Check if boxId is in clickedBoxes array and if player is O
    } else if (b != true && player === 'O') {
        $(`#${boxId}`).css('color', '#26de81');
        // Insert X into selected box
        $boxId.innerHTML = player;
        // Add box ID to clickedBoxes array
        clickedBoxes.push(boxId);
        // Add box Id to player xMoves array
        oMoves.push(boxId);
            // Check if oMoves has a winning combo
            checkWin(player, oScore);
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