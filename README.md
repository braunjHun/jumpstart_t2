[![Continuous integration](https://github.com/braunjHun/jumpstart_t2/actions/workflows/ci.yml/badge.svg)](https://github.com/braunjHun/jumpstart_t2/actions/workflows/ci.yml)
[![Lines of Code](https://sonarcloud.io/api/project_badges/measure?project=braunjHun_jumpstart_t2&metric=ncloc)](https://sonarcloud.io/summary/new_code?id=braunjHun_jumpstart_t2)
[![Coverage](https://sonarcloud.io/api/project_badges/measure?project=braunjHun_jumpstart_t2&metric=coverage)](https://sonarcloud.io/summary/new_code?id=braunjHun_jumpstart_t2)
[![Code Smells](https://sonarcloud.io/api/project_badges/measure?project=braunjHun_jumpstart_t2&metric=code_smells)](https://sonarcloud.io/summary/new_code?id=braunjHun_jumpstart_t2)
[![Bugs](https://sonarcloud.io/api/project_badges/measure?project=braunjHun_jumpstart_t2&metric=bugs)](https://sonarcloud.io/summary/new_code?id=braunjHun_jumpstart_t2)
[![Duplicated Lines (%)](https://sonarcloud.io/api/project_badges/measure?project=braunjHun_jumpstart_t2&metric=duplicated_lines_density)](https://sonarcloud.io/summary/new_code?id=braunjHun_jumpstart_t2)

To set up the project, you need node installed.

To install dependencies, run the following:

```sh
npm install
```

To run the tests, there is a script in the project root called `test`. It calculates code coverage, incorporates
watch mode, and prints in verbose mode, so all test file's test report will be visible. Alternatively, you
can achieve the same with the command the script contains:

```sh
npm test -- --watchAll --collect-coverage --verbose
```

# Instructions

## Mine	Sweeper	-	Game	Rules:		

You are presented with a board of squares. Some squares contain mines (bombs), others don't. If you step 
on a square containing a bomb, you lose. If you manage to clear all the squares (without clicking on any 
bombs) you win. 
Clearing a square which doesn't have a bomb reveals the number of neighbouring squares containing bombs. 
If you guess a square contains a bomb mark it with a flag. 
A squares "neighbours" are the squares adjacent above, below, left, right, and all 4 diagonals. Squares on the 
sides of the board or in a corner have fewer neighbors. The board does not wrap around the edges. If you 
clear a square with 0 neighboring bombs, all its neighbors will automatically open; recursively. 
The first square you open could be a bomb. 
You don't have to mark all the bombs to win; you just need to open all non-bomb squares.


# Legend
    ⚠ TODO
    🚧 IN PROGRESS
    ✅ DONE
# UAT	Scenarios:	
## 1 – Game Board Creation phase: 
```` javascript
+-+-+-+ 
| | | | 
+-+-+-+ 
| | | | 
+-+-+-+ 
| | | | 
+-+-+-+ 

[Sandbox 3x3] Game created 
 ````

## 2 – Game Over - Step on a bomb on 1;1 
```` javascript
+-+-+-+ 
| | | | 
+-+-+-+ 
| |X| | 
+-+-+-+ 
| | | | 
+-+-+-+ 
 
[Sandbox 3x3] BOOM! – Game Over. 
````
 
## 3 – Clean square 0;0 and get the number of bombs around 
```` javascript
+-+-+-+ 
| | | | 
+-+-+-+ 
| | | | 
+-+-+-+ 
|3| | | 
+-+-+-+ 
 
[Sandbox 3x3] 3 bombs around your square. 
````
 
## 4 – Mark the bombs around – What I expect after I marked the 3 squares as bombs [1;0 + 1;1 + 0;1]. 
```` javascript
+-+-+-+ 
| | | | 
+-+-+-+ 
|*|*| | 
+-+-+-+ 
|3|*| | 
+-+-+-+ 
 
[Sandbox 3x3] Square flagged as bomb. 
```` 
 
## 5 – Game Victory – After I cleared the all the squares [2;0 + 2;1 + 2;2 + 1;2 + 1;2] 
```` javascript
+-+-+-+ 
|2|2|1| 
+-+-+-+ 
|*|*|2| 
+-+-+-+ 
|3|*|2| 
+-+-+-+ 
 
[Sandbox 3x3] the land is cleared! GOOD JOB! 
```` 
 
## 6 – Massive cleaning and victory clicking on 0;0 
```` javascript
+-+-+-+ 
|_|1| | 
+-+-+-+ 
|_|1|1| 
+-+-+-+ 
|_|_|_| 
+-+-+-+ 
 
[Sandbox 3x3] the land is cleared! GOOD JOB! 
```` 
 
# User Story #1 ✅
As a player I start the game
I want to see the empty board
So that I can start to play the game...


## Scenario #1 
  GIVEN nothing
  WHEN drawing the board
  THEN I will see the new empty board


# User Story #2 ✅
As a player I step on a bomb
I want to see BOOM! – Game Over
So that I know I did a wrong movement

 ## Scenario #1 
  GIVEN step to position 1;1
  WHEN drawing the board
  THEN I will see an X in 1;1 on the board and the message BOOM! – Game Over

 ## Scenario #2 
  GIVEN step to position 0;2
  WHEN drawing the board
  THEN I will see an X in 0;2 on the board and the message BOOM! – Game Over

 ## Scenario #3 
  GIVEN step to position 2;0
  WHEN drawing the board
  THEN I will see an X in 2;0 on the board and the message BOOM! – Game Over
  # User Story #3 ✅
As a player I step on a clean position
I want to see the number of bombs around
So that I can plan my next step

 ## Scenario #1 
  GIVEN step to position 1;1
  WHEN drawing the board
  THEN I will see an 3 in 1;1 on the board and the message 3 bombs around your square. 

 ## Scenario #2 
  GIVEN step to position 0;2
  WHEN drawing the board
  THEN I will see an 2 in 0;2 on the board and the message 2 bombs around your square. 

 ## Scenario #3 
  GIVEN step to position 2;0
  WHEN drawing the board
  THEN I will see an 1 in 2;0 on the board and the message 1 bombs around your square. 