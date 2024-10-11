// var n, m;
// function one(n, m) {
//     var c = m + n;
//     return c;
//     // console.log("functionn one " + c);
// }
// var res = one(10, 30);
// console.log(res);
// const add = (a, b) => a + b;
// console.log(add(400, 300));

// ES6
// const a = (x, y) => x * y;
// console.log(a(2, 2));

//Object destructure
// let person = {
//     fname: "firstName",
//     lname: "lastname",
//     age: 25,
//     add: "hyd"
// };
// const { fname, lname, age, add } = person;
// console.log(fname);
// console.log(lname);
// console.log(age);
// console.log(add);

//array destructuring

// const names = ['fname', 'lname', 'age', 'add'];
// const [fname, lname, age, add] = names;
// console.log(fname);
// console.log(lname);
// console.log(age);
// console.log(add);

//spread operater  ...

// const q1 = ["Jan", "Feb", "Mar"];
// const q2 = ["Apr", "May", "Jun"];
// const q3 = ["Jul", "Aug", "Sep"];
// const q4 = ["Oct", "Nov", "May"];
// const years = [...q1, ...q2, ...q3, ...q4];
// console.log(years);

// const a = [1, 2, 3, 4];
// const b = [5, 6, 7, 8, 9];
// const ab = [...a, ...b];
// console.log(ab);
// const maxValue = Math.max(...a);
// const minValue = Math.min(...a);
// console.log(maxValue);
// console.log(minValue);

// const a = [1, 2, 3, 4];
// for (var i of a) {
//     console.log(i);
// }
// let person = {
//     fname: "firstName",
//     lname: "lastname",
//     age: 25,
//     add: "hyd"
// };
// for (var list in person) {
//     console.log(list);
// }

//class declaretion
// class Car {
//     constructor(name, year) {
//         this.name = name;
//         this.year = year;

//     }
// }
// const carData = new Car('carName', 2022);
// console.log(carData.name);

//promises in javascript
// const promise = new Promise(function (resolve, reject) {
//     let code = false;
//     if (code) {
//         console.log('code true');
//     }
//     else {
//         console.log('code false');
//     }
// });

// promise.then((resolve) => { console.log(resolve); })
//     .catch((reject) => { console.error(reject) })
//     .finally(() => { console.log('finally  state') });


//  java script promises

// const promise = new Promise((resolve, reject) => {
//     let a = 1 + 5;
//     if (a == 3) { resolve('true promises');}
//     else { reject('false promise'); }});
// promise
//     .then((mas) => { console.log(mas); })
//     .catch((err) => { console.log(err) })
//     .finally(() => { console.log('finally') });

//rest operator ...
// function sum(...arg) {
//     let sum = 0;
//     for (var i of arg) {
//         sum += i;
//     }
//     return sum;
// }
// const arr = sum(1, 2, 3, 4, 5, 6, 7, 9);
// console.log(arr);
//let str = 'this is a javascript string declearations';
//console.log(str.includes('this'));
//console.log(str.startsWith('this'));
//console.log(str.endsWith('this'));
//console.log(str.toUpperCase());

// var names = ['fname', 'lname', 'age', 'add'];
// var f = names.entries();
// for (var i of f) {
//     console.log(i);
// }