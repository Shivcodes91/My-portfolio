function checkOddEven(num) {
    if ((num & 1) === 0) {
        console.log(num + " is Even");
    } else {
        console.log(num + " is Odd");
    }
}

checkOddEven(7);//1,2,1,3,4,3,4