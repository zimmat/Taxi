module.exports = function(records,number) {
    console.log(number);
  var match = [];
  records.forEach(function(tripRecords) {
    if (tripRecords.RegistrationNumber === number) {
      var matchingRecord = tripRecords;
  match.push(matchingRecord);

  };

  });
  return match;


}
