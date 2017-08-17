module.exports = function() {
  console.log("Module C");

  import("is-plain-object").then(function(module) {
    console.log("is-plain-object", module);
  });
};
