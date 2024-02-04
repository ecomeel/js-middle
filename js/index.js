

// ?? Adding chain
// function add(n) {
//   const sum = (k) => {
//     return add(n + k)
//   }
//   sum.valueOf = () => {
//     return n
//   }
//   return sum
// }

// ?? Function cache
// function cache(func) {
//   const memory = {}

//   return (...args) => {
//     const key = JSON.stringify(...args);
//     if (key in memory) {
//       return memory[key]
//     }
//     const value = func(...args);
//     memory[key] = value
//     return value;
//   };
// }

// ? function composition
// function compose(...funcs) {
//   return (value) => funcs.reduceRight((val, func) => func(val), value);
// }

// ? String me along
// function createMessage(str) {
//   return function (nextStr) {
//     if (nextStr === undefined) {
//       return str;
//     }
//     return createMessage(str + " " + nextStr);
//   };
// }

// function isSantaClausable(obj) {
//   return ["sayHoHoHo", "distributeGifts", "goDownTheChimney"].every(function (
//     methodName
//   ) {
//     return typeof obj[methodName] == "function";
//   });
// }

// const cats = [];

// const constructor = function (name, weight) {
//   // if (!name || !weight) throw Error("invalid parameters");
//   Object.defineProperty(this, "name", {
//     get: () => name
//   });
//   Object.defineProperty(this, "weight", {
//     get: () => weight,
//     set: (value) => (weight = value),
//   });
//   cats.push(this);
// };

// constructor.averageWeight = () =>
//   cats.reduce((acc, cat) => acc + cat.weight, 0) / cats.length;

// return constructor;

"use strict";

const obj = {
  a: 15,
  b: 'hello'
}
const descriptor = Object.getOwnPropertyDescriptor(obj, 'a')

Object.defineProperty(obj, 'a', {
  value: 30
})

Object.defineProperty(obj, 'b', {
  enumerable: false
})
Object.defineProperties(obj, {
  name: {value: 'Sasha', writable: false},
  surname: {value: 'Pulin', writable: false}
})
console.log(Object.getOwnPropertyDescriptors(obj))
console.log(obj)

