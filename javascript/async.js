// console.log("start");
// let id=setTimeout(() =>{
//     console.log("inside Timeout");
    
// },5000)
// console.log("finish");
let count=0;
let time=setInterval(() =>{
    count+=1;
    if(count<10){
    console.log(count);}
    else{
        clearInterval(time)
    }
    
},1000)
console.log(time)