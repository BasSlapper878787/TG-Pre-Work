const checkThatTwoPlusTwoEqualsFourAMillionTimes = () => {
  for(let i = 1; i <= 1000000; i++) {
    if ( (2 + 2) != 4) {
      console.log('Something has gone very wrong :( ');
    }
  }
};

// Write your code below
const is2p2 = checkThatTwoPlusTwoEqualsFourAMillionTimes;
is2p2();
console.log(is2p2.name);

// I learned about functions as data in JavaScript. JavaScript functions behave like any other data type in the language; we can assign functions to variables, and we can reassign them to new variables. Functions are special because we can invoke them, but we can still treat them like any other type of data.
