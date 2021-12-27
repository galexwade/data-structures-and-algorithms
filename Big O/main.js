// #1. O(n) - Notes
// const fish = ["dory", "bruce", "marlin", "nemo"];
// const nemo = ["nemo"];
// const everyone = [
//   "dory",
//   "bruce",
//   "marlin",
//   "nemo",
//   "gill",
//   "bloat",
//   "nigel",
//   "squirt",
//   "darla",
//   "hank",
// ];
// const large = new Array(1000).fill("nemo");

// function findNemo(array) {
//   let t0 = performance.now();
//   for (let i = 0; i < array.length; i++) {
//      console.log("running");
//     if (array[i] === "nemo") {
//       console.log("Found Nemo!");
//          break;
//     }
//   }
//   let t1 = performance.now();
//   console.log("Call to find Nemo took " + (t1 - t0) + " milliseconds!");
// }

// This approach is:
// 0(n) --> Linear time
// findNemo(large); // O(1000)
// findNemo(fish); // O(4)
// findNemo(everyone); // O(10)
// findNemo(nemo); // O(1)

//-----------------------------------------------------------
// #2. O(1) - Notes

// const boxes = [0, 1, 2, 3, 4, 5];

// function logFirstTwoBoxes(boxes) {
//   console.log(boxes[0]); // O(1)
//   console.log(boxes[1]); // O(1)
// }

// logFirstTwoBoxes(boxes); // O(2)

//----------------------------------------------------------------------------------------------
// BigO Exercise #1.

// What is the Big O of the below function? (Hint, you may want to go line by line)
// function funChallenge(input) {
//   let a = 10; // O(1)
//   a = 50 + 3; // O(1)

//   for (let i = 0; i < input.length; i++) {
//      O(n)
//     anotherFunction(); // O(n)
//     let stranger = true; // O(n)
//     a++; // O(n)
//   }
//   return a; // O(1)
// }

// 3 + n + n + n + n = Big O (3 + 4n) = O(n)

//-----------------------------------------------------------------------------------------
// BigO Exercise #2.

// What is the Big O of the below function? (Hint, you may want to go line by line)
// function anotherFunChallenge(input) {
//   let a = 5; // O(1)
//   let b = 10; // O(1)
//   let c = 50; // O(1)
//   for (let i = 0; i < input; i++) {
//      O(n)
//     let x = i + 1; // O(n)
//     let y = i + 2; // O(n)
//     let z = i + 3; // O(n)
//   }
//   for (let j = 0; j < input; j++) {
//      O(n)
//     let p = j * 2; // O(n)
//     let q = j * 2; // O(n)
//   }
//   let whoAmI = "I don't know"; // O(1)
// }

// Big O (4 + 7n) = O(n)

//---------------------------------------------------------------------------------
// #3. O(a + b) - Notes

// function compressBoxesTwice(boxes1, boxes2) {
//   boxes1.forEach((box) => {
//     console.log(box);
//   });

//   boxes2.forEach((box) => {
//     console.log(box);
//   });
// }

// compressBoxesTwice(array1, array2) O(a + b) --> Rule #3. - because two different inputs

// function compressBoxesTwice(boxes1, boxes2) {
//  for (let i = 0; i < array.length; i++) {
//     for (let j = 0; j < array.length; j++) {
//         console.log(array[i], array[j]);
//       }
//     }
//   }

// compressBoxesTwice(array1, array2) O(a * b) --> Rule #3. - because two different inputs, and because of nested loops

//--------------------------------------------------------------------------------
// #4. O(n^2) - Notes

// Log all pairs of array
// const boxes = ["a", "b", "c", "d", "e"];

// function logAllPairsOfArray(array) {
//   for (let i = 0; i < array.length; i++) {
//     for (let j = 0; j < array.length; j++) {
//       console.log(array[i], array[j]);
//     }
//   }
// }

// logAllPairsOfArray(boxes); // O(n^2) --> Quadratic time
// When you see nested loops we use multiplication

//---------------------------------------------------------------------------------
// #5. O(n^2) - Notes

// function printAllNumbersThenAllPairSums(numbers) {
//   console.log("These are the numbers");
//   numbers.forEach(function (number) {
//     console.log(number);
//   });

//   console.log("and these are their sums:");
//   numbers.forEach(function (firstNumber) {
//     numbers.forEach(function (secondNumber) {
//       console.log(firstNumber + secondNumber);
//     });
//   });
// }

// printAllNumbersThenAllPairSums([1, 2, 3, 4, 5]); // O(n + n^2) --> Rule #4. - we always keep the dominant term, we drop n: O(n^2)

//-----------------------------------------------------------------------------------------
// Space Complexity - Notes

//#5 Space complexity
// function boooo(n) {
//   for (let i = 0; i < n; i++) {
//     console.log("booooo");
//   }
// }

// boooo([1, 2, 3, 4, 5]);
// Time Complexity: O(n)
// Space Complexity: O(1) --> because all we're doing is assigning i = 0;

// #6 Space complexity O(n)
// function arrayOfHiNTimes(n) {
//   var hiArray = [];
//   for (let i = 0; i < n; i++) {
//     hiArray[i] = "hi";
//   }
//   console.log(hiArray);
//   return hiArray;
// }

// arrayOfHiNTimes(6);
// Time Complexity: O(n)
// Space Complexity: O(n)
