module.exports = function(records,regNo){
  var profit = {};
  records.forEach(function(earning){
    console.log(earning);
    var RegistrationNumber =  earning.RegistrationNumber;
    var earnings = earning.Fare * earning.Trips;
    if(!profit[RegistrationNumber]){
    profit[RegistrationNumber]= 0;
    }
profit[RegistrationNumber] = profit[RegistrationNumber] + earnings;

  });
  console.log(profit);
  return profit;
}
