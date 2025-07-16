// let a1 = "shivang Rai";
// let [a, b, ...others] = a1;
// console.log(a);     
// console.log(b);     
// console.log(others); 


const person = {
  name: "Shivang",
  age: 23,
  country: "India",
  
};

const { name, ...others } = person;
console.log(others)

