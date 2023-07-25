# Pong - The Game
**Pong** is a website that aims to provide users with an experience of discovering one of the earliest video games ever created. The user is provided with an introduction to the game's history and cultural significance. They are then introduced to the rules of gameplay before being able to navigate to the game page for an authentic playing experience.

As a portfolio project for my CodeInstitute course, I am creating an interactive website that showcases my skills in using HTML, CSS, and JavaScript. The goal of this project is to demonstrate my ability to design a user-friendly website that effectively fulfils its intended purpose.

![screenshot of responsive design on different screen sizes.](/assets/images/readme/amIResponsive.png)

Visit the deployed website [here](https://id10tothe9.github.io/ci-portfolio2-pong).

## User Experience Design
### General Design
#### Strategy: 
The goal of the project is to test and showcase my JavaScript abilities while providing a fun gaming experience that evokes nostalgia for the user through retro design.
#### scope:
The project aims to do the following:
1. Provide the user with a historical account of the game's story, highlighting its cultural significance.
2. Introduce the user to the rules and mechanics of the game.
3. Offer an immersive gaming experience by setting a goal to defeat the computer, implementing a countdown timer, and providing feedback.

#### Structure: 
The website has two pages: a landing homepage that introduces the game and a Pong Arena page where the game is played. The homepage features an interactive interface with two sections.

In the first section (default view), users are introduced to the game's history and can navigate through the pages by clicking on arrows. Progress is indicated by bullets below the text. The second section provides the game rules, and users can click on the title buttons to switch between these two sections. Underneath the interface is a button that takes the user to the Pong Arena.

Additionally, for easy and intuitive navigation, the user can click on a door sign link placed over the arcade door background image to switch between the two pages.

#### Skeleton:
The ![Miro](https://miro.com/) app was used to create the wireframes of both pages in order to decide how the layout of the pages should look like:

- Homepage:

![Homepage](/assets/images/readme/wireframes/homepage.jpg)

- Pong Arena:

![Pong Arena](/assets/images/readme/wireframes/pongArena.jpg)

#### Surface:
**Graphics:**
The page was designed to evoke nostalgia, using a black and white arcade (created with AI) as the background image. Additionally, an authentic Pong Cabinet cutout was placed over the background.

**Typography:**
Two fonts were utilized in the design. The first font, 'Noto Sans Cypro Minoan', was selected for its simplicity and readability. It was used for all the information displayed on every page. In case this font is not available, a fallback font of 'Lato' and sans-serif was chosen. 

For the gameboard area, the font 'Press Start 2P' was employed. This font closely resembles the early fonts used in Atari consoles, adding a nostalgic touch to the design. In case 'Press Start 2P' is not supported, a cursive font will be used as a fallback option.

## Features
### General Design
#### Landing Page:
- **Title & Subtitle:**
The homepage showcases a title displaying the game's name and a subtitle that clearly communicates the website's purpose to the user.
![Title & Subtitle](/assets/images/screenshots/titleAndSubtitle.png)

- **Information Panel:**
An interactive interface is provided. It features two buttons on top that allow the user to navigate between their subjects. Clicking on one, activates it visually by switching its colour to black and activating its section for the user to see.
![Navigation Buttons](/assets/images/screenshots/topButtons.png)

A navigation bar is placed underneath the text section which allows the user to navigate between the slides of each section.
![Navigation Bar](/assets/images/screenshots/nav.png)

A button invites the user to click on it to navigate to the game page and start playing.
![Game Button](/assets/images/screenshots/playButton.png)

#### The Pong Arena page:
A heading bar over the gameboard provides the user with the names of the players and a button to start the game.
![Gameboard Info](/assets/images/screenshots/gameboardNav.png)

The gameboard is entirely black with a defining white boundary to resemble the simple early displays. It features two paddles on each side, one is controlled by the computer and the other by the player.

Underneath the gameboard a settings button is positioned. Clicking on it opens a dialog for the user to choose a level of difficulty for the game. The user can click Enter to confirm his choice or cancel to get back to the game without a change.  Clicking Enter will not work if no choice was selected.
![Gameboard And Settings Button](/assets/images/screenshots/gameboard.png)

#### Functionality of the program:
- By using event listeners, the user paddle responds to the movement of the mouse pointer inside the gameboard, as well as finger touch and movement on a touchscreen.
- If the ball moves into the sections beyond the paddles the player loses.
- The gameboard features a countdown in its center that starts counting after the player clicks start, after the count down of three seconds is over the ball appears and the game can begin.
- Throughout the scripts, I avoided using global variables as advised in the course.

#### Features Left To Implement:
- Show current level of difficulty
- Show current score and winning or losing the game after 11 points
- Stopping the paddles short before the edges.
- After first game, start button becomes a play again button.


## Manual Testing Of All Features
Tabellary representation of the manual testing of user stories:
Page | Functionality | Success
--- | --- | ---
Homepage | Switching between the two sections of the information panel | yes
Homepage | Navigating the slides of the information panel forward and backward | yes
Homepage | Bullets show slide progress correctly | yes
Homepage | clicking on 'Let Me Play!' button takes me to Pong Arena | yes
Homepage | Clicking on door sign link takes me to Pong Arena | yes
Pong Arena | Clicking 'Start Game Button' starts the game | yes
Pong Arena | Countdown before game starts working | yes
Pong Arena | Player paddle responds to mouse movement and touch | yes
Pong Arena | Computer moves the paddle and responds to ball movement | yes
Pong Arena | Ball speeds up after a given number ball bouncing | yes
Pong Arena | Clicking the settings button opens a dialog | yes
Pong Arena | Computer playing improves with increasing difficulty | yes
Pong Arena | Feedback after a round is over | yes

**Problems that need solving:**
- To choose a difficulty, the word itself must be clicked. Centering the text in the options of the select item is not straight forward.
- It seems calling the moveBall function every 1ms is not working as fast as intended, the ball isn't as fast as should be so I multiplied its speed by a factor.
- Text in span after game over is not centered.

**Validator Testing:**
- CSS Validator: No Issues
![CSS Validator](/assets/images/validator/cssValidation.png)
- HTML Validator: No Issues
![HTML Validator](/assets/images/validator/htmlValidation.png)
- JSHint: No Errors

## Credits
- AI was used to generate the Arcade background image.
- Documentations of ![MDN](https://developer.mozilla.org/en-US/docs) and ![W3schools](https://www.w3schools.com/) were relied upon, in addition to other online forums and documentations.
- ![Tinypng](https://tinypng.com/) for image compression.
