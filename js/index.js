// let x = null;
// x ??= false;
// x ??= 20;
// x ??= underfind;
// console.log(x)

// var x = 10;
// function bar(fun) {
//   var x = 30;
//   fun()
// }
// function foo() {
//   console.log(x)
// }
// foo.x = 20;
// bar.x = 40;
// bar(foo)


// const person1 = {
//   name: 'Sasha',
//   prof: 'web-dev',
//   hi() {console.log('Hello, my name is', this.name)}
// }
// const person2 = {
//   name: 'Petr'
// }
// person1.hi();
// person1.hi.call(person2)
// person1.hi.apply(person2)
// person2.hi = person1.hi.bind(this)
// person2.hi()
// person1.hi()

