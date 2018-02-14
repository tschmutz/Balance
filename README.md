# Balance


## Overview

Balance is a one player balancing game. With a few simple controls a player must keep a ball balanced on a small platform as they try to advance to the marked location at the top of the screen. The game has several levels increasing in difficulty by the addition of various obstacles that will stand in the way of the player and the location he must get the ball to.

## MVP's

- [ ] Game has a ball that reacts to the movement of the platform on which it starts.

- [ ] Platform that responds to user input, allowing the user to determine the direction the platform moves as well as the angle of the platform.

- [ ] A target goal for each level that is clearly marked and possible to get to.

- [ ] Obstacles that stand in the way of the players path to the target goal, with the obstacles getting more difficult to circumvent with each levels successful completion.

- [ ] Music that plays when the game starts, with an easy way to shut the music off if the player wants.

- [ ] Timer that records how long a player takes to complete each level, as well as a cumulative time for all the levels completed this far.

## Wireframes

Balance will have a simple one page layout that displays all the necessary info for the player to see. Controls for the game will be listed to the left of the game play area with most of the screen used for the playing of the game.



<img src='images/Screen Shot 2018-02-12 at 7.39.47 AM.png' width=1000px>



## Technologies

This game will rely on Vanilla Javascript for all of the game logic while using HTML5 Canvas for DOM manipulation and the rendering of game components for the player to see in order to interact with.

## Timeline for implementation

**Day 1**

  - [ ] Write a basic entry file, complete all initial configuration.
  - [ ] Get the general layout of the game to render to the screen.
  - [ ] Get the platform and ball to render to screen.

**Day 2**

  - [ ] Get the platform to interact with the ball appropriately. Should not go through platform but rest on top.  
  - [ ] Define the behavior of the ball under the various situations it will be in. (e.g. Ball should start moving down platform if one end is higher than other)
  - [ ] Create the end target which responds when the ball gets there.

**Day 3**

   - [ ] Create all the obstacles that will be rendered to the screen at different times depending on the level.
   - [ ] Work on getting music to play while game is going.
   - [ ] Start creating different levels of difficulty with the various obstacles.


**Day 4**

  - [ ] Finish all the levels
  - [ ] Style the game with CSS.
  - [ ] Fix any logic that is not rendering as expected.
  - [ ] Add timer
