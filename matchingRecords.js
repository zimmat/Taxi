module.exports = function(records,number) {
  var match = [];
  records.forEach(function(tripRecords) {
    if (tripRecords.RegistrationNumber === number) {

      match.push(tripRecords);

  };

  });
  return match;


}
