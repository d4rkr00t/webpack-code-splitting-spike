// =======================================================================================
//
// 1. Load only A
// 1502952207344
// 1502965755325
//
// Chunks:
// - main: index.js + a.js
// - vendor: react + react-dom
// - 0.chunk: styled-components (no react and react-dom)
//
// Chunks (with min size):
// - main: index.js + a.js + styled-components
// - vendor: react + react-dom
//
// =======================================================================================

// const a = require("./a");
// a().then(function(module) {
//   console.log(module);
// });

// =======================================================================================
//
// 2. Load both A and B
// 1502953374466
// 1502965827434
//
// Chunks:
// - main: index.js + a.js + b.js + styled-components (no react and react-dom)
// - vendor: react + react-dom
// - don't have any async chunks
//
// Chunks (with min size):
// - main: index.js + a.js + styled-components
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
// 3. Load A and a shared dependency of styled-components in main entry point
// 1502953468368
// 1502965888715
//
// Chunks:
// - main: index.js + a.js + stylis (no react and react-dom)
// - vendor: react + react-dom
// - 0.chunk: styled-components (no react, react-dom and no stylis)
//
// Chunks (with min size):
// - main: index.js + a.js + stylis (no react and react-dom)
// - vendor: react + react-dom
// - 0.chunk: styled-components (no react, react-dom and no stylis)
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
// 4. Load A and async load B
// 1502953561320
// 1502965988755
//
// Chunks:
// - main: a.js + index.js
// - vendor: react + react-dom
// - 0.chunk: styled-components (no react, react-dom)
// - 1.chunk: b.js
//
// Chunks (with min size):
// - main: a.js + b.js + index.js + styled-components
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
// 1502963358700
// 1502966127779
//
// Chunks:
// - main: a.js + index.js + stylis
// - vendor: react + react-dom
// - 0.chunk: styled-components (no react, react-dom and no stylis)
// - 1.chunk: b.js
//
// Chunks (with min size):
// - main: a.js + index.js + stylis
// - vendor: react + react-dom
// - 0.chunk: styled-components (no react, react-dom and no stylis) + b.js
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
// 1502963493995
// 1502966245383
//
// Chunks:
// - main: a.js + index.js
// - vendor: react + react-dom
// - 0.chunk: styled-components (no react, react-dom and no stylis)
// - 1.chunk: b.js + stylis
//
// Chunks (with min size):
// - main: a.js + index.js + stylis
// - vendor: react + react-dom
// - 1.chunk: styled-components (no react, react-dom and no stylis) + b.js
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
// 7. Load A and load test npm module that async loads styled-components
// 1502964108003
// 1502966355104
//
// Chunks:
// - main: a.js + index.js + test/index.js
// - vendor: react + react-dom
// - 0.chunk: styled-components (no react, react-dom)
//
// Chunks (with min size):
// - main: a.js + index.js + test/index.js + styled-components
// - vendor: react + react-dom
//
// =======================================================================================

// const a = require("./a");
// const test = require("test");
// a().then(function(module) {
//   console.log(module);
//   console.log(test());
// });

// =======================================================================================
//
// 8. Load A and async load test npm module that async loads styled-components
// 1502964346372
// 1502966699036
//
// Chunks:
// - main: a.js + index.js
// - vendor: react + react-dom
// - 0.chunk: styled-components (no react, react-dom)
// - 1.chunk: test/index.js
//
// Chunks (with min size):
// - main: a.js + index.js + test/index.js + styled-components
// - vendor: react + react-dom
//
// =======================================================================================

// const a = require("./a");
// a().then(function(module) {
//   console.log(module);
// });
// import("test").then(function(module) {
//   module();
// });

// =======================================================================================
//
// 9. Load A and async load test npm module that async loads styled-components and
//    load some shared dependency of styled-components
// 1502964537079
// 1502966901832
//
// Chunks:
// - main: a.js + index.js + stylis
// - vendor: react + react-dom
// - 0.chunk: styled-components (no react, react-dom, and no stylis)
// - 1.chunk: test/index.js
//
// Chunks (with min size):
// - main: a.js + index.js + stylis
// - vendor: react + react-dom
// - 0.chunk: styled-components (no react, react-dom, and no stylis) + test/index.js
//
// =======================================================================================

// const a = require("./a");
// const stylis = require("stylis");
// a().then(function(module) {
//   console.log(stylis);
//   console.log(module);
// });
// import("test").then(function(module) {
//   module();
// });

// =======================================================================================
//
// 10. Load A and async load test npm module that async loads styled-components and
//     load some shared dependency of styled-components and load C async with async loading another
//     shared dependency of styled-components and load B
// 1502964894687
// 1502967104663
//
// Chunks:
// - main: a.js + index.js + styled-components
// - vendor: react + react-dom
// - 0.chunk: c.js
// - 1.chunk: test/index.js
//
// Chunks (with min size):
// - main: a.js + index.js + styled-components + test/index.js
// - vendor: react + react-dom
//
// =======================================================================================

// const a = require("./a");
// const b = require("./b");
// const stylis = require("stylis");
// a().then(function(module) {
//   console.log(stylis);
//   console.log(module);

//   import("./c").then(function(module) {
//     module();
//   });
// });
// import("test").then(function(module) {
//   module();
//   b();
// });

// =======================================================================================
//
// 11. Load A and async load test npm module that async loads styled-components and
//     load some shared dependency of styled-components and load C async with async loading another
//     shared dependency of styled-components and async load B
// 1502965064085
// 1502967217215
//
// Chunks:
// - main: a.js + index.js + stylis
// - vendor: react + react-dom
// - 0.chunk: styled-components (no react, react-dom, and no stylis), b.js
// - 1.chunk: c.js
// - 2.chunk: test/index.js
// - 4.chunk: is-plain-object
//
// Chunks (with min size):
// - main: a.js + index.js + stylis
// - vendor: react + react-dom
// - 0.chunk: styled-components (no react, react-dom, and no stylis), b.js, c.js, is-plain-object, test/index.js
//
// =======================================================================================

// const a = require("./a");
// const stylis = require("stylis");
// a().then(function(module) {
//   console.log(stylis);
//   console.log(module);

//   import("./c").then(function(module) {
//     module();
//   });
// });
// import("test").then(function(module) {
//   module();
//   import("./b").then(function(b) {
//     b();
//   });
// });
