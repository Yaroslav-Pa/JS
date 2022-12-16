//          https://uk.javascript.info/object-methods

//          https://codeguida.com/post/2456

// const parent = {
//   mom_name: "Vira Sladkova",
//   mother: function () {
//     console.log("1", this);
//     return `${this.mom_name} is my mother.`;
//   },
// };

// const parent = {
//   mom_name: "Vira Sladkova",
//   mother: () => {
//     console.log("1", this);
//     return `${parent.mom_name} is my mother.`;
//   },
// };

// const parent = {
//   mom_name: "Vira Sladkova",
//   mother: function () {
//     let a = () => {
//       console.log("1", this);
//       console.log(`${this.mom_name} is my mother.`);
//     };
//     a();
//   },
// };

// console.log("2", this);
// parent.mother();
//console.log(parent.mother());

// function() {function(){}} do not work
// function() {()=>{}} will work
let animals = {
  domesticAnimals: [
    "cat",
    "dog",
    "cow",
    "goat",
    "sheep",
    "donkey",
    "pig",
    "horse",
  ],
  printdomesticAnimals: function () {
    //console.log("1", this);
    setTimeout(() => {
      //console.log("2", this);
      console.log(this.domesticAnimals.join("-"));
    }, 1000);
  },
};
animals.printdomesticAnimals();

// function dog3() {
//   return {
//     sound: "Gas",
//     talk: () => {
//       console.log(this.sound);
//     },
//   };
// }

// let Jack = new dog3();
// Jack.talk();
