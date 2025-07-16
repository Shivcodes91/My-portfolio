// arr=[1,2,3];
// ele=4
// arr1=[...arr,ele];
// console.log(arr1);

const person={
    name:"shiv",
    age:25
}
const hobby={
    game:"chess",
    score:100
}
 const both=[person,hobby]
const mood={
    moods:"smiling",
    score:5
}
const num=[1,2,3,4]

function merge(both,mood){
    let arr1=[...both,mood];
    return arr1
}

console.log(merge(both,mood))