'use strict';

const assert = require('assert');
const readline = require('readline');
const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

// An object that represents the three stacks of Towers of Hanoi; 
  // * each key is an array of Numbers: 
    // * A is the far-left, 
    // * B is the middle, 
    // * C is the far-right stack
      // * Each number represents the largest to smallest tokens: 
        // * 4 is the largest, 
        // * 1 is the smallest



//these are object arrays
//this is where the stacked rings are. 
let stacks = {
  a: [4, 3, 2, 1],
  b: [],
  c: []
};

// Start here. What is this function doing?
//This is showing us each stack a, b, and c. 
//And it is then showing us what is in the stacks, i.e., how many rings are there.
const printStacks = () => {
  console.log("a: " + stacks.a);
  console.log("b: " + stacks.b);
  console.log("c: " + stacks.c);
}

// Next, what do you think this function should do?
const movePiece = (startStack, endStack) => {

  // Your code here
  // pop() the last piece in startStack push() to the endStack
  // ???????? Can I not just use the shift function
  let piece = stacks[startStack].pop()       //maybe stacks[startStack]

  stacks[endStack].push(piece)

}

// Before you move, should you check if the move it actually allowed? Should 3 be able to be stacked on 2
const isLegal = (startStack, endStack) => {

  if(stacks[endStack].length === 0) {
    return true 
  } else if(stacks[endStack].length > 0 && (stacks[startStack].slice(-1) < stacks[endStack].slice(-1))) {
    return true
  } else if ((stacks[startStack] > stacks[endStack].slice(-1)) || (stacks[startStack].length = 0) || (stacks[startStack] != a || b || c)) {
    return false
  }
} 
  // Move a startStack value to an empty endStack = true
        //if startStack is empty, which means if stacks.endStack.length = 0

  // Move a startStack value to an endStack if the last endStack value is higher number = true
  // Move a startStack value to an endStack if the last endStack value is lower number = false
        // slice (-1) gets the last element of an array

  // Select a startStack that's empty = false
        // if stacks.startStac.lenght = 0

  // Enter something besides a, b, c = false // THIS IS COULD BE SOMETHING FOR THE TESTING PART. GUI??
        // if !a or !b or !c
  // This funciton should return true or false



// What is a win in Towers of Hanoi? When should this function run?
const checkForWin = () => {
  if ((stacks["b"].length === 4) || (stacks["c"].length === 4)) {
    return true
  }  else {
    return false
  }
  // Your code here
  // If B or C array = [4,3,2,1] then getPrompt, YOU WIN!

  // Assume isLegal caught all the wrong moves, and the array is in the correct order.
  // So that means the game is over when b or c has 4 elements

}

// When is this function called? What should it do with its argument?
const towersOfHanoi = (startStack, endStack) => {
  movePiece(startStack, endStack)
  // Your code here
  // Check ifLegal
      // If true, movePiece
      // If false, display error message
  // Call checkForWin
      // if true, display win message
      // if false, keep playing
      

}

//This is asking where do you want me to take a top piece from,
//and then it is asking where do you want me to put it.
//and then it is calling the const towersOfHanoi function, 
//then it is looking for the answer. 
const getPrompt = () => {
  printStacks();
  rl.question('start stack: ', (startStack) => {
    rl.question('end stack: ', (endStack) => {
      towersOfHanoi(startStack, endStack);
      getPrompt();
    });
  });
}

// Tests

if (typeof describe === 'function') {

  describe('#towersOfHanoi()', () => {
    it('should be able to move a block', () => {
      towersOfHanoi('a', 'b');
      assert.deepEqual(stacks, { a: [4, 3, 2], b: [1], c: [] });
    });
  });

  describe('#isLegal()', () => {
    it('should not allow an illegal move', () => {
      stacks = {
        a: [4, 3, 2],
        b: [1],
        c: []
      };
      assert.equal(isLegal('a', 'b'), false);
    });
    it('should allow a legal move', () => {
      stacks = {
        a: [4, 3, 2, 1],
        b: [],
        c: []
      };
      assert.equal(isLegal('a', 'c'), true);
    });
  });
  describe('#checkForWin()', () => {
    it('should detect a win', () => {
      stacks = { a: [], b: [4, 3, 2, 1], c: [] };
      assert.equal(checkForWin(), true);
      stacks = { a: [1], b: [4, 3, 2], c: [] };
      assert.equal(checkForWin(), false);
    });
  });

} else {

  getPrompt();

}
