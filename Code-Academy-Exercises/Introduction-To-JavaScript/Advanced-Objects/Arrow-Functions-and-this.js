const robot = {
  energyLevel: 100,
  checkEnergy() {
    console.log(`Energy is currently at ${this.energyLevel}%.`)
  }
}

robot.checkEnergy();

// I learned about how the arrow function and this keyword work togehter in JavaScript. If we use the this keyword in a method then the value of this is the calling object. Arrow functions inherently bind, or tie, an already defined this value to the function itself that is NOT the calling object.
