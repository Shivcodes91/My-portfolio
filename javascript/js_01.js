var num=153;
var nn=num;
var n=num;
var sum =0;
while(num>0){
   num=Math.floor(num/10);
    sum++;
}
var s=0;
while(n>0){
    let digit=n%10;
    s+=Math.pow(digit,sum);
    n=Math.floor(n/10);
}
if(nn==s){
    console.log("yes");
}else{console.log("no");}