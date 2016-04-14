module.exports = function(allTrips,number){
    console.log(number);
  var tripsTotal = 0;
  allTrips.forEach(function(trip){
    if(trip.RegistrationNumber === number){
      tripsTotal += trip.Trips;
    }
  });
  return tripsTotal;
}
