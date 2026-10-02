# Bad Time Framework
## Introduction
This is a recreation of the infamous **bad time simulator**, a "bullet hell"-type game where you avoid different attacks 
for a certain amount of time in order to survive. I have decided to take this idea but make it possible to make your own levels.

## Controls
- Move with keyboard arrows
- (unfortunately) doesn't work with mobile
- the "reset level" button clears the level (to use before loading a new map)
- The "play level" button plays the currently loaded level
- the "pause/unpause" button does what you think it does (please note that the game starts paused and that you have to unpause the game to start)
- The "change level" button opens a prompt menu where you can paste the level (see [sample levels](sample%20levels.txt) for pre-made levels and [making your own level](./making%20your%20own%20level.md) to see how to make one)

## Attacks and mechanics
- Every white rectangle you see on the screen (except the arena border) inflicts damage on contact.
- Every blue rectangle you see on the screen inflicts damage on contact if you are moving during contact.
- Every red rectangle aren't dangerous, but they indicate the imminent apparition of a white attack in the area occupied by the red rectangle (in other terms, I recommend you to avoid staying there for too long)
- Every damage taken also inflicts poison, which is takes one health point per poison point per second. (So if you lose 13 hp during a fight, you will also have 13 poison which will take 13 more hp from you in the period of 13 seconds)
- The level creator can also add "break time" in the level, allowing you to breath and relax until you click the "pause/unpause button"
- When in contact with a dangerous element, you get 1 damage and 1 poison per frame. The game being played at 60 frame per second, i really do not recommend taking any risks

## Winning: 
You win if you survive every attack defined on the current level

## custom levels: 
You can play a custom level by pasting a level code into the "change level" pop-up menu. A level looks like this: 
- ```[X, X, X, X, X, X]```
, x being a whole number (integer)