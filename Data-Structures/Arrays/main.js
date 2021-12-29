// const strings = ["a", "b", "c", "d"];
// 32 bit system
// 4*4 = 16 bytes of storage

// console.log(strings[2]);

// #1. push() - adds to the end of the array --> O(1)
// strings.push("e");
// console.log(strings);

// #2. pop() - removes the last item from the array --> O(1)
// strings.pop();
// console.log(strings);

// #3. unshift() - adds an item to the beginning of the array --> O(n), because we are iterating through the array and shifting them to add an item to the beginning.=
// strings.unshift("x");
// console.log(strings);

// #4. splice(start number, delete count, insert element) - add something in the middle of the array --> O(n)
// strings.splice(2, 0, "j");
// console.log(strings);

//---------------------------------------------------------------------------------------------------
// Implementing Arrays
// class MyArray {
//   constructor() {
//     this.length = 0;
//     this.data = {};
//   }

//   get(index) {
//     return this.data[index];
//   }

//   push(item) {
//     this.data[this.length] = item;
//     this.length++;
//     return this.length;
//   }

//   pop() {
//     const lastItem = this.data[this.length - 1];
//     delete this.data[this.length - 1];
//     this.length--;
//     return lastItem;
//   }

//   delete(index) {
//     const item = this.data[index];
//     this.shiftItems(index);
//     return item;
//   }

//   shiftItems(index) {
//     for (let i = index; i < this.length - 1; i++) {
//       this.data[i] = this.data[i + 1];
//     }
//     delete this.data[this.length - 1];
//     this.length--;
//   }
// }

// const newArray = new MyArray();
// newArray.push("hi");
// newArray.push("you");
// newArray.push("!");
// newArray.pop();
// newArray.delete(1);
// console.log(newArray);

//----------------------------------------------------------------------------------
// #1. Create a function that will reverse a string

// My first approach
// function reverse(str) {
//   let newArr = [];
//   let strArr = str.split("");
//   console.log(strArr);
//   for (let i = strArr.length - 1; i >= 0; i--) {
//     newArr.push(strArr[i]);
//   }
//   console.log(newArr);
//   return newArr.join('');
// }

// reverse("Alex");

// Andrei's Approach
// function reverse1(str) {
// Check input
//   if (!str || str.length < 2 || typeof str !== "string") {
//     return "Invalid input";
//   }

//   let backwardsArray = [];
//   let totalItems = str.length - 1;
//   for (let i = totalItems; i >= 0; i--) {
//     backwardsArray.push(str[i]);
//   }

//   return backwardsArray.join("");
// }

// console.log(reverse1("Alex Wade"));

// Array method approach
// function reverse2(str) {
//   return str.split("").reverse().join("");
// }

// More modern approach with ES6
// const reverse3 = (str) => str.split("").reverse().join("");
// const reverse4 = (str) => [...str].reverse().join("");

//-----------------------------------------------------------------------------------
// #2. Merge sorted arrays

// function mergeSortedArrays(array1, array2) {
//   const mergedArray = [];
//   let array1Item = array1[0];
//   let array2Item = array2[0];
//   let i = 1;
//   let j = 1;

//  We should actually move these 2 if statements to line 2 so that we do the checks before we do assignments in line 3 and 4!
//   if (array1.length === 0) {
//     return array2;
//   }
//   if (array2.length === 0) {
//     return array1;
//   }

//   while (array1Item || array2Item) {
//     if (array2Item === undefined || array1Item < array2Item) {
//       mergedArray.push(array1Item);
//       array1Item = array1[i];
//       i++;
//     } else {
//       mergedArray.push(array2Item);
//       array2Item = array2[j];
//       j++;
//     }
//   }
//   return mergedArray;
// }

// mergeSortedArrays([0, 3, 4, 31], [3, 4, 6, 30]);
