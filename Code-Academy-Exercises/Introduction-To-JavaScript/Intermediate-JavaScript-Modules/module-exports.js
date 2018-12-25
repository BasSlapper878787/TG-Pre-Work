console.log = function() {};
var rewire = require('rewire'),
  appModule = rewire('../1-airplane.js');

var moduleAirplane = appModule.__get__('module')

describe('', function () {
  it('Did you print the module', function() {
    expect(moduleAirplane.exports).to.have.property('myAirplane');
  });
});

// I learned how to export modules using the module.export.  This allows you to define a module in one file and making the module available for use in another file. 
