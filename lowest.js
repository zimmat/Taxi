module.exports = function(capeTownTaxis){
  var smallest = 100;
  capeTownTaxis.forEach(function(key){
  if(key.Trips < smallest){
  smallest = key.Trips;
}
  });
  return smallest;
}
