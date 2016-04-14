module.exports = function(capeTownTaxis){
    console.log(capeTownTaxis);
  var total = 0;
  capeTownTaxis.forEach(function(trip){
      console.log(trip);
    total = total + trip.Trips;

  });
    return total;
}
