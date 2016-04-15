module.exports = function(records, regNo){
  var total = 0;
  records.forEach(function(earning){
    if(earning.RegistrationNumber === regNo){
      total += (earning.Fare * earning.Trips) ;
    }
});
console.log(total);
return total;
}
