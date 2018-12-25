const Airplane = {};

module.exports = {
  myAirplane: "CloudJet",
  displayAirplane: function() {
    return this.myAirplane;
  }
};

// I learned about module.exports 2. You can wrap any collection of data and functions in a n object, and export the object using the module.exports.
