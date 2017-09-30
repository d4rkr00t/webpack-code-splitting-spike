// Vendor bundle ⬇︎
const React = require("react");
const ReactDOM = require("react-dom");

// ======================================================================================

console.log(React, ReactDOM);
console.log("Entry Point");

// =======================================================================================
//
// 1. Load only A
//
// Chunks:
// - main: index.js + a.js
// - vendor: react + react-dom
// - 0.chunk: styled-components + stylis + is-plain-object
//
// Chunks (with min size):
// - main: index.js + a.js + styled-components + stylis + is-plain-object
// - vendor: react + react-dom
//
// =======================================================================================

const a = require("./a");
a().then(function(module) {
  console.log(module);
});

// =======================================================================================
//
// 2. Load A and a shared dependency of styled-components in main entry point
//
// Chunks:
// - main: index.js + a.js + stylis
// - vendor: react + react-dom
// - 0.chunk: styled-components + is-plain-object
//
// =======================================================================================

// const a = require("./a");
// const stylis = require("stylis");
// a().then(function(module) {
//   console.log(module);
//   console.log(stylis);
// });

// =======================================================================================
//
// 3. Load both A and B
//
// Chunks:
// - main: index.js + a.js + b.js + styled-components + stylis + is-plain-object
// - vendor: react + react-dom
//
// =======================================================================================

// const a = require("./a");
// const b = require("./b");
// a().then(function(module) {
//   console.log(module);
//   console.log(b());
// });

// =======================================================================================
//
// 4. Load A and async load B
//
// Chunks:
// - main: index.js + a.js
// - vendor: react + react-dom
// - 0.chunk: styled-components + stylis + is-plain-object
// - 1.chunk: b.js
//
// Chunks (with min size):
// - main: a.js + b.js + index.js + styled-components + stylis + is-plain-object
// - vendor: react + react-dom
//
// =======================================================================================

// const a = require("./a");
// a().then(function(module) {
//   console.log(module);
// });
// import("./b").then(function(module) {
//   module();
// });

// =======================================================================================
//
// 5. Load A and async load B and a shared dependency of styled-components in main entry point
//
// Chunks:
// - main: a.js + index.js + stylis
// - vendor: react + react-dom
// - 0.chunk: styled-components + is-plain-object
// - 1.chunk: b.js
//
// Chunks (with min size):
// - main: a.js + index.js + stylis
// - vendor: react + react-dom
// - 0.chunk: b.js + styled-components + is-plain-object
//
// =======================================================================================

// const a = require("./a");
// const stylis = require("stylis");
// console.log(stylis);
// a().then(function(module) {
//   console.log(module);
// });
// import("./b").then(function(module) {
//   module();
// });

// =======================================================================================
//
// 6. Load A and async load B and async load some shared dependency of styled-components
//
// Chunks:
// - main: a.js + index.js
// - vendor: react + react-dom
// - 0.chunk: stylis
// - 1.chunk: styled-components + is-plain-object + b.js
//
// Chunks (with min size):
// - main: a.js + index.js + stylis
// - vendor: react + react-dom
// - 1.chunk: styled-components + is-plain-object + b.js
//
// =======================================================================================

// const a = require("./a");
// a().then(function(module) {
//   console.log(module);
// });
// import("./b").then(function(module) {
//   module();
// });
// import("stylis").then(function(module) {
//   console.log(module);
// });

// =======================================================================================
//
// 7. Complex
//
// Chunks:
// - main: a.js + index.js
// - vendor: react + react-dom
// - 0.chunk: styled-components + stylis + is-plain-object + b.js
// - 1.chunk: stylis
// - 2.chunk: d.js
// - 3.chunk: c.js
// - 4.chunk: test/index.js
// - 6.chunk: is-plain-object
// - 7.chunk: e.js
//
// Chunks (with min size):
// - main: a.js + index.js + stylis
// - vendor: react + react-dom
// - 0.chunk: styled-components + b.js + c.js + d.js + e.js + test/index.js + is-plain-object
//
// =======================================================================================

// const a = require("./a");
// a().then(function(module) {
//   console.log(module);

//   import("stylis").then(function(stylis) {
//     console.log(stylis);
//   });

//   import("./c").then(function(module) {
//     module();

//     import("./d").then(function(module) {
//       module();
//     });
//   });
// });

// import("test").then(function(module) {
//   module();
//   import("./b").then(function(b) {
//     b();
//   });
// });

// =======================================================================================
//
// 8. Named Chunks
//
// Chunks:
// - main: a.js + index.js + styled-components + b.js + stylis + is-plain-object
// - vendor: react + react-dom
// - some-chunk.chunk: d.js
// - 1.chunk: test/index.js
// - 3.chunk: e.js
//
// Chunks (with min size):
// - main: a.js + index.js + styled-components + b.js + d.js e.js + stylis + is-plain-object
// - vendor: react + react-dom
//
// =======================================================================================

// const a = require("./a");

// import(/* webpackChunkName: "stylis" */ "stylis").then(function(stylis) {
//   console.log(stylis);
// });

// a().then(function(module) {
//   console.log(module);

//   import(/* webpackChunkName: "some-chunk" */ "./d").then(function(module) {
//     module();
//   });
// });

// import("test").then(function(module) {
//   module();
//   require("./b")();
// });
