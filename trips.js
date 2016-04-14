module.exports = function(capeTownTaxis){
  var total = 0;
  capeTownTaxis.forEach(function(trip){
    total = total + trip.Trips;

  });
    return total;
}
