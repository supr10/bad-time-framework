# making your own level
## What is a level?
A level is nothing more than an array of numbers being interpreted one at a time by the simulator. 

## Structure
A level is just a sequence of numbers separated by a comma between opening and closing brackets.
- Example: ```[1, 2, 3, 4, 5]```

## Instruction list
Here is every instruction (please know that the arena (that I call screen) is 300*300 pixel)
(0 pauses the game)
1. small delay (so every attack don't come all at once)
2. moving attack from top to half the screen going right to left
3. moving attack from half to bottom of the screen going from right to left
4. moving attack from top to half the screen going left to right
5. moving attack from half to bottom of the screen going left to right
6. moving attack from 1/4 from the top to 3/4 from the top going right to left
7. moving attack from 1/4 from the top to 3/4 from the top going left to right
8. static attack covering right third of the screen 
9. static attack covering left third of the screen
10. static attack covering top third of the screen
11. static attack covering bottom third of the screen
12. "white line corridor": bones everywhere except at one specific height
13. static attack covering top and bottom parts of the screen
14. static attack covering left and right parts of the screen
15. static attack covering everything but the four corners of the screen
16. blue attack taking all screen height going right to left
17. blue attack taking all screen height going left to right