let spaceship = {
  'Fuel Type' : 'Turbo Fuel',
  'Active Mission' : true,
  homePlanet : 'Earth',
  numCrew: 5
 };

let propName =  'Active Mission';

// Write your code below

let isActive = spaceship['Active Mission'];

console.log(spaceship[propName]);

// I learned about bracket notation in JavaScript. This is the second way to access a key's value. o use bracket notation to access an object's property, we pass in the property name (key) as a string.
