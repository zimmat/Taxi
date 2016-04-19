var trips = require('../trips');
var lowest = require('../lowest');
var matchingRecords = require('../matchingRecords');
var tripsMade = require('../tripsMade');
var routes = require('../routes');
var earnings = require('../earnings');
var profit = require('../profit')
var assert = require('assert');



var capeTownTaxis = [{
  "RegistrationNumber": "CA 123 456",
  "Route": "Cape Town - Bellville",
  "Fare": 13,
  "Trips": 9
}, {
  "RegistrationNumber": "CA 234 567",
  "Route": "Cape Town - Gugulethu",
  "Fare": 12,
  "Trips": 11
}, {
  "RegistrationNumber": "CA 123 456",
  "Route": "Cape Town - Gugulethu",
  "Fare": 12,
  "Trips": 11
}, {
  "RegistrationNumber": "CA 345 678",
  "Route": "Cape Town - Langa",
  "Fare": 8,
  "Trips": 13
}, {
  "RegistrationNumber": "CA 345 678",
  "Route": "Cape Town - Cape Town",
  "Fare": 13,
  "Trips": 10
}];
var durbanTaxis = [{
  "RegistrationNumber": "ND 123 456",
  "Route": "Durban - University of KZN",
  "Fare": 7,
  "Trips": 14
}, {
  "RegistrationNumber": "ND 234 567",
  "Route": "Durban - Umlazi Station",
  "Fare": 14,
  "Trips": 9
}, {
  "RegistrationNumber": "ND 345 678",
  "Route": "Durban - Umbilo",
  "Fare": 8,
  "Trips": 14
}, {
  "RegistrationNumber": "ND 234 567",
  "Route": "Durban - Umlazi Station",
  "Fare": 14,
  "Trips": 9
}, {
  "RegistrationNumber": "ND 234 567",
  "Route": "Durban - University of KZN",
  "Fare": 7,
  "Trips": 9
}, {
  "RegistrationNumber": "ND 345 678",
  "Route": "Durban - University of KZN",
  "Fare": 7,
  "Trips": 18
}, {
  "RegistrationNumber": "ND 123 456",
  "Route": "Durban - Umbilo",
  "Fare": 8,
  "Trips": 15
}, {
  "RegistrationNumber": "ND 234 567",
  "Route": "Durban - Umbilo",
  "Fare": 8,
  "Trips": 9
}, {
  "RegistrationNumber": "ND 345 678",
  "Route": "Durban - Umlazi Station",
  "Fare": 14,
  "Trips": 20
}];

describe('trips for cape tow', function() {
  it('should give a total of how many trips did all the taxis make', function() {
    var total = trips(capeTownTaxis);
    assert.equal(total, 54);
  });
  it('should return  the lowest number of trips that any taxi in Cape Town made', function() {
    var min = lowest(capeTownTaxis);
    assert.equal(min, 9);
  });
});

describe('trips for durban', function() {
  it('should give a total of how many trips did all the durban taxis make', function() {
    var total = trips(durbanTaxis);
    assert.equal(total, 117);
  });
  it('should return  the lowest number of trips that any taxi in durban made', function() {
    var min = lowest(durbanTaxis);
    assert.equal(min, 9);
  });
});
describe('matching records for capeTown', function() {
  it('it should return the matching records', function() {
    var number = "CA 123 456";
    var result = matchingRecords(capeTownTaxis, number);
    assert.deepEqual(result, [{
      "RegistrationNumber": "CA 123 456",
      "Route": "Cape Town - Bellville",
      "Fare": 13,
      "Trips": 9
    }, {
      "RegistrationNumber": "CA 123 456",
      "Route": "Cape Town - Gugulethu",
      "Fare": 12,
      "Trips": 11
    }]);
  });
});
describe('matching records for durban', function() {
  it('it should return the matching records', function() {
    var number = "ND 123 456";
    var result = matchingRecords(durbanTaxis, number);
    assert.deepEqual(result, [{
      "RegistrationNumber": "ND 123 456",
      "Route": "Durban - University of KZN",
      "Fare": 7,
      "Trips": 14
    }, {
      "RegistrationNumber": "ND 123 456",
      "Route": "Durban - Umbilo",
      "Fare": 8,
      "Trips": 15
    }]);
  });
});
describe('How many trips did CA 234 567 make', function() {
  it('should show number of trips made by CA 234 567', function() {
    var number = "CA 234 567";
    var results = tripsMade(capeTownTaxis, number);
    assert.equal(results, 11);
  });
});
describe('How many trips did ND 234 567 make', function() {
  it('should show number of trips made by ND 234 567', function() {
    var number = "ND 234 567";
    var results = tripsMade(durbanTaxis, number);
    assert.equal(results, 36);
  });
});
describe('routes taken by CA 345 678 took', function() {
  it('should return names of all the routes that CA 345 678 took', function() {
    var regNumber = "CA 345 678";
    var results = routes(capeTownTaxis, regNumber);
    assert.deepEqual(results, ["Cape Town - Langa", "Cape Town - Cape Town"]);

  });
});
describe('routes taken by ND 345 678', function() {
  it('should return names of all the routes that ND 345 678 took', function() {
    var regNumber = "ND 345 678";
    var results = routes(durbanTaxis, regNumber);
    assert.deepEqual(results, ["Durban - Umbilo", "Durban - University of KZN", "Durban - Umlazi Station"]);

  });
});
describe('total earnings for CA 234 567', function() {
  it('should return total earnings for CA 234 567', function() {
    var regNo = 'CA 234 567';
    var results = profit(capeTownTaxis, regNo);
    assert.equal(results, 132);
  });
});
describe('total earnings for ND 234 567', function() {
  it('should return total earnings for ND 234 567', function() {
    var regNo = 'ND 234 567';
    var results = profit(durbanTaxis, regNo);
    assert.equal(results, 387);
  });
});
describe('total earnings capeTown Taxis', function() {
  it('should return total earnings for capeTown Taxis', function() {
    var results = earnings(capeTownTaxis);
    assert.deepEqual(results, {
      "CA 123 456": 249,
      "CA 234 567": 132,
      "CA 345 678": 234
    });
  });
});
describe('total earnings durban taxis', function() {
  it('should return total earnings for all durban taxis', function() {
    var results = earnings(durbanTaxis);
    assert.deepEqual(results, {
      "ND 123 456": 218,
      "ND 234 567": 387,
      "ND 345 678": 518
    });
  });
});
