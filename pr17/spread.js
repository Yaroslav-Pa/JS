let country = { capital: "Arstotska", president: "Blablablah", FlagColorCount: "3" };
let country2 = { ...country };
let country3 = country;

country2.capital = "Alfheim";
country3.capital = "Alfheim";

// console.log('country', country);
// console.log('country2', country2);
// console.log('country3', country3);

let candies = ["loli", "gum", "barbaris"];
let cookies = ["oreo"];

let sweets = candies + cookies; //bad loli, gum, barbarisoreo
let sweets2 = candies.concat(cookies) // ok
let sweets3 = [...candies, ...cookies] // ok
let sweets4 = [candies, cookies, "icecream"] //bad 
let sweets5 = [...candies, ...cookies, "icecream"] // ok

// console.log('sweets', sweets);
// console.log('sweets2', sweets2);
// console.log('sweets3', sweets3);
// console.log('sweets4', sweets4);
// console.log('sweets5', sweets5);

let IndexOfBarbaris = sweets5.indexOf("barbaris");
//console.log('IndexOfBarbaris', IndexOfBarbaris);

let sweetsObj = [{ name: "loli", category: "candies" }, { name: "barbaris", category: "candies" }, { name: "oreo", category: "cookies" }]
// let IndexOfObjBarbaris = sweetsObj.findIndex((item) => {
//     return item.name == "barbaris";
// });
let IndexOfObjBarbaris = sweetsObj.findIndex((item) => item.name == "barbaris");
//console.log('sweetsObj', sweetsObj);
//console.log('IndexOfObjBarbaris', IndexOfObjBarbaris);

let isIcecreamSweets5 = sweets5.includes("icecream");
//console.log('isIcecreamSweets5', isIcecreamSweets5);

let isIcecreamSweetsObj = sweetsObj.some((item) => item.name == "oreo");
//console.log('isIcecreamSweetsObj', isIcecreamSweetsObj);

let arrCookies = sweetsObj.filter((item) => item.category == "candies")
//console.log('arrCookies', arrCookies);

let mapSweets5 = sweets5.map((item) => item + " nice")
//console.log('mapSweets5', mapSweets5);

let filterByLetter = sweetsObj.filter((item) => item.name.includes('i'))
//console.log('sweets5', filterByLetter);

//let a = sweets5.push('mars');
//console.log('sweets5', a);
//sweets5.push('mars');
//console.log('sweets5', sweets5);

console.log('sweets5', sweets5);
console.log(sweets5.pop());
console.log('sweets5', sweets5);
