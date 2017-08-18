module.exports = function() {
  import("./e.js").then(function(s) {
    s();
  });

  console.log("Module D");
};
