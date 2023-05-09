// 1. Print odd numbers in an array

// (function() {
//   const numbers = [1,2,3,4,5,6,7,8,9];
//   const oddNumbers = numbers.filter(num => num % 2 !== 0);
//   console.log(...oddNumbers);
// })();


// let numbers = [1,2,3,4,5,6,7,8,9];
// for(let i=0; i<numbers.length; i++){
//     if(numbers[i] % 2 !== 0){
//         console.log(numbers[i]);
//     } 
// }

// 2. Convert all the strings to title caps in a string array

// (function() {
//     var str = "guvi zen class";
//     var words = str.split(" ");
    
//     for (var i = 0; i < words.length; i++) {
//       var word = words[i];
//       var firstLetter = word.charAt(0).toUpperCase();
//       words[i] = firstLetter + word.slice(1);
//     }
    
//     var newStr = words.join(" ");
//     console.log(newStr);
//   })();

// 3. Sum of all numbers in an array

// (function() {
//     const arr = [1, 2, 3, 4, 5];
//     let sum = 0;
//     for (let i = 0; i < arr.length; i++) {
//       sum += arr[i];
//     }
//     console.log(sum);
//   })();

// 4. Return all the prime numbers in an array

// (function() {
    
//     var numbers = [2, 3, 4, 5, 6, 7, 8, 9, 10];
  
//     function isPrime(num) {
//       if (num < 2) return false;
//       for (var i = 2; i <= Math.sqrt(num); i++) {
//         if (num % i === 0) return false;
//       }
//       return true;
//     }
    
//     function filterPrimes(arr) {
//       return arr.filter(isPrime);
//     }
    
//     console.log(filterPrimes(numbers));
//   })();
  
  
// 5. Return all the palindromes in an array

// (function(arr) {
//     const palindromes = [];
//     for (let i = 0; i < arr.length; i++) {
//       const word = arr[i];
//       if (word === word.split('').reverse().join('')) {
//         palindromes.push(word);
//       }
//     }
//     console.log(palindromes);
//   })(['racecar', 'banana', 'level', 'hello', 'deified']);
  
// 6. Return median of two sorted arrays of the same size

// // const median = (function() {
//   const findMedian = function(arr1, arr2) {
//     const merged = [...arr1, ...arr2].sort((a, b) => a - b);
//     const mid = Math.floor(merged.length / 2);
//     return merged.length % 2 === 0 ? (merged[mid - 1] + merged[mid]) / 2 : merged[mid];
//   }

//   return findMedian;
// })();

// const arr1 = [1, 3, 5];
// const arr2 = [2, 4, 6];
// console.log(median(arr1, arr2));

// 7. Remove duplicates from an array

// var arr = [1, 2, 2, 3, 4, 4, 5];

// var uniqueArray = (function(arr) {
//   return arr.filter(function(item, index) {
//     return arr.indexOf(item) === index;
//   });
// })(arr);

// console.log(uniqueArray); 

// 8. Rotate an array by k times

// const arr = [1, 2, 3, 4, 5];
// const k = 2;

// (function rotateArray() {
//   const rotatedArray = [...arr.slice(k), ...arr.slice(0, k)];
//   console.log(rotatedArray);
// })();

// Arrow function

// 1. Print odd numbers in an array

//const numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9];

// const oddNumbers = numbers.filter(number => number % 2 !== 0);

// console.log(oddNumbers);

// 2. Convert all the strings to title caps in a string array

//const strings = ["guvi class", "zen class", "iam a student!"];
// const titleCasedStrings = strings.map(str => {
//     return str.toLowerCase().split(' ').map(word => {
//       return word.charAt(0).toUpperCase() + word.slice(1);
//     }).join(' ');
//   });
  
//   console.log(titleCasedStrings); 
  
// 3. Sum of all numbers in an array

// const sumArray = (arr) => arr.reduce((total, num) => total + num, 0);
// const myArray = [1, 2, 3, 4, 5];
// const sum = sumArray(myArray);
// console.log(sum); // Output: 15

// 4. Return all the prime numbers in an array

// const getPrimes = (arr) => {
//     return arr.filter(num => {
//       for(let i = 2; i < num; i++)
//         if(num % i === 0) return false;
//       return num !== 1;
//     });
//   };
//   const numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
//   const primes = getPrimes(numbers);
//   console.log(primes); 
    
// 5. Return all the palindromes in an array

// const palindromes = arr => arr.filter(word => word === word.split('').reverse().join(''));
// const words = ['racecar', 'hello', 'level', 'world', 'deified'];
// const palindromesArray = palindromes(words);
// console.log(palindromesArray); 
