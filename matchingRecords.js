module.exports = function(capeTownTaxis) {
  var matchCT = [];
  capeTownTaxis.forEach(function(matches) {
    if (matches.RegistrationNumber === "CA 123 456") {
      console.log(matchCT);
    }
  });
  return matchCT;
  var matchND = [];
  durbanTaxis.forEach(function(match) {
    if (match.RegistrationNumber === "ND 123 456") {
      matchND.push(match);
    }
  });
  return matchND;


}
