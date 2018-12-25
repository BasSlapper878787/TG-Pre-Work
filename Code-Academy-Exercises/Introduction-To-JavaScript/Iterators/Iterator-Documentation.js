const words = ['unique', 'uncanny', 'pique', 'oxymoron', 'guise'];

// Something is missing in the method call below

console.log(words.some(word => {
  return word.length < 6;
}));

// Use filter to create a new array
const interestingWords = words.filter((word) => {return word.length > 5});


// Make sure to uncomment the code below and fix the incorrect code before running it

console.log(interestingWords.every((word) => {return word.length > 5}));

// I learned about iterator documentation in JavaScript. The documentation for each method contains several sections: a short definition, a block with the correct syntax for using the method, a list of parameters the method accepts or requires, the return value of the function, an extended description, examples of the method's use, other additional information.
