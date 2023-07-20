/** Index & Documentation
*   
*   1. Initiation
*   
*   
*   
*   
/** Index & Documentation - End ***************************************** */



/** 1. Initiation ******************************************************************************* 
*   Initiate objects and eventListeners                                                         *
*/
window.addEventListener('DOMContentLoaded', function () {
    // Get elements of of the gameboard as an array of objects:
    // [gameArea,ball,paddleLeft,paddleRight,ballElement,paddleLeftElement,paddleRightElement]
    let gameObjects = getGameObjects(); // Index: Assistant functions

    // Let user control the right paddle with mouse pointer and touchscreen
    document.addEventListener('mousemove', function (event) {
        movePlayerPaddle(event, gameObjects, ...gameObjects);
    });
    document.addEventListener('touchmove', function (event) {
        movePlayerPaddle(event.changedTouches[0], gameObjects, ...gameObjects);
    });


    // Initiate start button
    document.getElementById('start').addEventListener('click', function () {
        startGame(gameObjects);
    });

});
/** Initiation - End ***************************************** */


function startGame(gameObjects) {
    // Reset timer-display
    document.getElementById('timer-display').textContent = '';
    // Count down then start game
    countDown();
}

function countDown() {
    let timerDisplay = document.getElementById('timer-display');
    setTimeout(function () {
        timerDisplay.textContent = '3'
    }, 1000);
    setTimeout(function () {
        timerDisplay.textContent = '2'
    }, 2000);
    setTimeout(function () {
        timerDisplay.textContent = '1'
    }, 3000);
    setTimeout(function () {
        timerDisplay.textContent = 'GO!'
    }, 4000);
    setTimeout(function () {
        timerDisplay.textContent = ''
    }, 5000);
}


function movePlayerPaddle(event, gameObjects, gameArea, ball, paddleLeft, paddleRight, ballElement, paddleLeftElement, paddleRightElement) {
    // Define position inside gameboard and move paddle only within it
    let pointerInGameArea = event.clientY - gameArea.topY;
    let pointerTopBoundary = paddleRight.height / 2;
    let pointerBottomBoundary = gameArea.height - paddleRight.height / 2;
    if (pointerInGameArea >= pointerTopBoundary && pointerInGameArea <= pointerBottomBoundary) {
        let deltaY = pointerInGameArea - paddleRight.height / 2;
        paddleRightElement.style.top = `${deltaY}px`;
    } else if (pointerInGameArea < pointerTopBoundary) {
        paddleRightElement.style.top = '0px';
    } else if (pointerInGameArea > pointerBottomBoundary) {
        let deltaY = gameArea.height - paddleRight.height;
        paddleRightElement.style.top = `${deltaY}px`;
    }
}


/** Assistant Functions *************************************************
*    Functions related to getting and setting dimensions and positions  *
*    of elements on the gameboard.                                      *
*/
function getGameObjects() {
    //Get dimensions of the elements in the game
    let gameAreaElement = document.getElementById('game-area');
    let ballElement = document.getElementById('ball');
    let paddleLeftElement = document.getElementById('paddle-left');
    let paddleRightElement = document.getElementById('paddle-right');
    // Defined as objects with width and height in px
    let gameArea = getDimensions(gameAreaElement);
    let ball = getDimensions(ballElement);
    let paddleLeft = getDimensions(paddleLeftElement);
    let paddleRight = getDimensions(paddleRightElement);
    //-done-

    // get absolute Y coordinate of gameArea to calculate relative pointer position in movePlayerPaddle
    gameArea.topY = gameAreaElement.getBoundingClientRect().top;

    return [gameArea, ball, paddleLeft, paddleRight, ballElement, paddleLeftElement, paddleRightElement];
}

// Get width and height of each div element
function getDimensions(divElement) {
    let divStyle = getComputedStyle(divElement);
    let div = {};
    div.width = parseFloat(divStyle.width);
    div.height = parseFloat(divStyle.height);
    return div;
}