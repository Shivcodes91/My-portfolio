// let first_name="shivang";
// let last_name=" Rai";
// let full_name=[...first_name,...last_name];
// let full_names=[first_name,last_name];
// console.log(full_name);
// console.log(full_names);    
const person = {
  name: "Shivang",
  country: "India",
  };
const hobby = {
  name: "chess",
  country: "fantasy"
  };
  const both={...person,...hobby};
  console.log(both);