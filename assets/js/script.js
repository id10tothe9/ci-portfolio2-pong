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
window.addEventListener('DOMContentLoaded', function() {
    // Get elements of of the gameboard as an array of objects:
    // [gameArea,ball,paddleLeft,paddleRight,ballElement,paddleLeftElement,paddleRightElement]
    let gameObjects = getGameObjects(); // Index: Assistant functions
  
  });
  /** Initiation - End ***************************************** */
  

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