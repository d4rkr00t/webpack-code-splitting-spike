module.exports = function() {
  Promise.all(import("stylis"), import("is-plain-object")).then(function(
    modules
  ) {
    var stylis = modules[0];
    var isPlainObj = modules[1];
    console.log(stylis);
    console.log(isPlainObj);
  });

  console.log("Module E");
};
