// const { clearInterval } = require("timers");

// // setTimeout(() => {
// //   console.log("hello");
// // }, 5000);

// let j = 0;
// let I = setInterval(tik, 2000);

// function tik() {
//   console.log("tik");
//   j++;
//   if (j == 5) {
//     clearInterval(I);
//   }
// }

/** замість:
let timerId = setInterval(() => alert('тік'), 2000);
*/

setTimeout(function tick() {
  console.log("Tik");
  setTimeout(tick, 2000); // (*)
}, 0);
