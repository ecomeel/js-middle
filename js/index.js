// ??
// var Singleton = function () {
//   const instance = Singleton.instance;
//   if (instance) return instance;
//   Singleton.instance = this
// };
// var obj1 = new Singleton();
// var obj2 = new Singleton();
// console.log(obj1 === obj2)
// obj1.test = 1;
// obj2.test; // => 1
// console.log(obj1.test)
// console.log(obj2.test)

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

// class Animal {
//   constructor(name, age, legs, species, status) {
//     this.name = name;
//     this.age = age;
//     this.legs = legs;
//     this.species = species;
//     this.status = status;
//   }
//   introduce() {
//     return `Hello, my name is ${this.name} and I am ${this.age} years old.`;
//   }
// }

// class Dog extends Animal {
//   constructor(name, age, status, master) {
//     super(name, age);
//     this.status = status;
//     this.legs = 4;
//     this.species = "dog";
//     this.master = master;
//   }
//   greetMaster() {
//     return `Hello ${this.master}`
//   }
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


class Animal {
  constructor(name) {
    this.name = name;
    this.speed = 0;
  }
  run(speed) {
    return `${this.name} run ${this.speed}`
  }
}
