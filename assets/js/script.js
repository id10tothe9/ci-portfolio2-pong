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
    setTimeout(function () {
        // Set start position of ball and add momentum to its object
        ball = startBall(gameObjects, ...gameObjects);
        // Give computer control of the left paddle
        let idsComputer = startComputerPlayer(gameObjects, ...gameObjects);


        let idBall = setInterval(function () {
            moveBall(gameObjects, ...gameObjects, idBall, idsComputer);
        }, 1);

    }, 4000);

}

function moveBall(gameObjects,gameArea,ball,paddleLeft,paddleRight,ballElement,paddleLeftElement,paddleRightElement,idBall,idsComputer) {

    // Reflection or score conditions
    if (ball.left > gameArea.width) {
      let score = 'no';
      [score, ball] = reflectBall(ball, paddleRight, paddleRightElement);
      if (score === 'yes') {
        endRound('right',idBall, ...idsComputer);
        ballElement.style.display = 'none';
      }
    }
  
    if (ball.left < 0) {
      let score = 'no';
      [score, ball] = reflectBall(ball, paddleLeft, paddleLeftElement);
      if (score === 'yes') {
        endRound('left',idBall, ...idsComputer);
        ballElement.style.display = 'none';
      }
    }
  
    if (ball.top < 0 || ball.top > gameArea.height) {
      ball.y *= -1;
    }
  
    // Move ball one step
    ball.left += ball.x;
    ball.top += ball.y;
    ballElement.style.left = `${ball.left}px`;
    ballElement.style.top = `${ball.top}px`;
  
  }

function startComputerPlayer(gameObjects, gameArea, ball, paddleLeft, paddleRight, ballElement, paddleLeftElement, paddleRightElement) {
    // determine Y of ball in a cyclical manner (cycle period can change with difficulty)
    // -> move paddle in correct direction with a given speed (game difficulty)
    // move paddle in the correct direction continuously until next direction check
    let difficulty = 1;
    let moveY = 0.2 * difficulty; // proportion of movement step
    let direction = 1;
    paddleLeft.top = parseFloat(getComputedStyle(paddleLeftElement).top);

    let idDirection = setInterval(function () {
        direction = computerCheckDirection(gameObjects, ...gameObjects);
    }, 500);

    // Computer moves the left paddle
    let idMove = setInterval(function () {

        paddleLeft.top += direction * moveY;
        paddleLeftElement.style.top = `${paddleLeft.top}px`
        // (don't go beyond boundaries of game area):

    }, 10);

    return [idDirection, idMove];
}

function computerCheckDirection(gameObjects, gameArea, ball, paddleLeft, paddleRight, ballElement, paddleLeftElement, paddleRightElement) {
    let direction = 1;
    let paddleLeftY = paddleLeft.top + paddleLeft.height / 2;
    paddleLeftY < ball.top ? direction = 1 : direction = -1;

    return direction;
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

// Set position and momentum of ball at start of the game
function startBall(gameObjects, gameArea, ball, paddleLeft, paddleRight, ballElement, paddleLeftElement, paddleRightElement) {
    // Position the ball at the middle top of the gameArea
    ball.left = gameArea.width / 2 - ball.width / 2;
    ball.top = 0;
    ballElement.style.left = `${ball.left}px`;
    ballElement.style.top = `${ball.top}px`
    // Make ball visible
    ballElement.style.display = 'block';

    // Give ball object its momentum as x,y in pixel (with 0 defined
    // at top left of the gameArea) and ball moving diagonally
    let x = 0.2;
    let y = gameArea.height / gameArea.width * x;
    ball.x = x;
    // ball.y = y;
    ball.y = 0.05;

    return ball;
}
  /** Assistant Functions - End ***************************************** */