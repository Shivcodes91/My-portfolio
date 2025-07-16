// console.log([1, 2, 3, 15, 5].reduce((x, y) => x > y ?x:y));
//destructuring
// const[first,,third]=[1,3,5]
// console.log(first)
let obj={
    name:"shiv",
    year:4,
    age:20,
    college:"bbdu",
    score:{
        hindi:80,
        english:90,
    }
}
const{name,age,score}=obj;
const {score:{hindi,english}}=obj;
console.log(obj.college)
console.log(hindi)
console.log(score)