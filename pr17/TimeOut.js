// setTimeout(() => {
//     console.log("hello");
// }, 5 * 1000);

// let j = 0;
// let i = setInterval(() => {
//     tik();
//     j++;
//     if (j == 5) {
//         clearInterval(i);
//     }
// }, 1 * 1000)



// function tik() {
//     console.log(" tik");
// }

// let k = setInterval(() => {
//     tik();
// }, 1 * 1000)

// setTimeout(() => {
//     clearInterval(k);
// }, 5 * 1000);

setTimeout(function tick() {
    console.log("tik");
    setTimeout(tick, 2000); // (*)
}, 0); //time after start