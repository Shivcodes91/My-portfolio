// function greet(name, callbackParam, callback) {
//     callback(callbackParam);
//     console.log(name);   
// }
// function callbackfunc(callbackParam){
//   console.log
// }
// console.log(greet.callback);

function greet(name, callback) {
  console.log("Hi " + name);
  callback();
}

function callMe() {
  console.log("I am a callback function");
}

// calling the greet function
greet("Shiv", callMe);

// function sayhello(sys) {
//     console.log(sys);
// }

// greet('shivang', 'hello', sayhello);
//map filter reduce
// let arr=[1,3,5,8];
// let sqaure=arr.map(function(x){
//     return x*x;
// // })
// console.log(sqaure)
// let newArr=arr.filter((val)=>{
//     return val%2==0;
// })


// const numbers = [1, 2, 3, 4, 5];

// const sum = numbers.reduce((x, y) => {
//   return x * y;
// });

// console.log(sum); // Output: 15
