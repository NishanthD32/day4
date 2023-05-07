//How to compare two json have the same properties without order


// let obj1 = { name: "person1", age: 5 };
// let obj2 = {  age: 5,  name: "person1"};

// function compareJSON(obj1, obj2) {
//   return JSON.stringify(obj1) === JSON.stringify(obj2);
// }
// console.log(compareJSON(obj1, obj2)); 


// all country flags

// fetch('https://restcountries.com/v3.1/all')
//   .then(response => response.json())
//   .then(data => {
//     data.forEach(country => {
//       console.log(country.flags.svg);
//     });
//   })

// all country population, region, sub region

// fetch('https://restcountries.com/v3.1/all')
//   .then(response => response.json())
//   .then(data => {
//     // Loop through all the countries and display their region, subregion, and population
//     data.forEach(country => {
//       console.log(`Region: ${country.region}, Subregion: ${country.subregion}, Population: ${country.population}`);
//     });
//   })

