module.exports = function(path,regNumber){
  var paths = [];
  path.forEach(function(route){
    console.log(route);
    if(route.RegistrationNumber === regNumber){
      var routesNames = route;
      paths.push(routesNames);
    }
  });
  return paths;
}
