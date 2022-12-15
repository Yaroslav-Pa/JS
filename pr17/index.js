let cars = [
  {
    color: "Melon yellow",
    type: "Mercedes-Benz C240",
    registration: new Date("2020-11-01"),
    capacity: 4,
  },
  {
    color: "Yellow orange",
    type: "Ski-Doo GSX 600 SPORT",
    registration: new Date("2022-12-08"),
    capacity: 4,
  },
  {
    color: "Sand yellow",
    type: "Arctic Cat FIRECAT 600",
    registration: new Date("2021-10-03"),
    capacity: 2,
  },
  {
    color: "Brillant blue",
    type: "Polaris RANGER 800",
    registration: new Date("2022-12-08"),
    capacity: 2,
  },
];

//console.log(cars);

// let Filter = cars.filter((item) => {
//   console.log(item.registration);
//   console.log(new Date("2022-12-08"));
//   return item.registration == new Date("2022-12-08");
// });

cars = cars.filter((item) => item.registration.getMonth() == 11);

console.log(cars);
