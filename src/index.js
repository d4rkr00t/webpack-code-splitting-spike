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

const a = require("./a");
a().then(function(module) {
  console.log(module);
});

// =======================================================================================
//
// 2. Load A and a shared dependency of styled-components in main entry point
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
// 3. Load both A and B
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
// 7. Load A and async load test npm module that async loads styled-components and
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
// 8. Complex
// 1506751131959
// 1503015545110
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
// - 0.chunk: styled-components (no react, react-dom, and no stylis) + b.js + c.js + d.js + e.js + test/index.js
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
// 9. Named Chunks
// 1506746844241
// 1506746878039
//
// Chunks:
// - main: a.js + index.js + styled-components + b.js + stylis
// - vendor: react + react-dom
// - some-chunk-0.chunk: d.js
// - 1.chunk: test/index.js
// - 3.chunk: e.js
//
// Chunks (with min size):
// - main: a.js + index.js + styled-components + b.js + d.js e.js
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

// =======================================================================================
//
// 10. Named Chunks 2
// 1506747133532
// 1506747167449
//
// Chunks:
// - main: a.js + index.js + styled-components + b.js + d.js
// - vendor: react + react-dom
// - 0.chunk: stylis
// - some-chunk-1.chunk: f.js
//
// Chunks (with min size):
// - main: index.js
// - some-chunk-0.chunk: stylis
// - vendor: react + react-dom
//
// =======================================================================================

// import(/* webpackChunkName: "stylis" */ "stylis").then(function(stylis) {
//   console.log(stylis);
// });

// import(/* webpackChunkName: "some-chunk" */ "./f").then(function(module) {
//   module();
// });
