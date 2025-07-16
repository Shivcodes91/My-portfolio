// class car{ 
//     speed=100;
//     brand="BMW";
//     constructor(speed,brand){
//         this.speed=speed;
//         this.brand=brand;
//     }
//     drive(){
//         return "this car is very fast"
//     }
// }
// let car1=new car();
// console.log(car1)
class Car {
    speed = 100;
    brand = "BMW";
    constructor(speed, brand) {
        this.speed = speed ?? this.speed;
        this.brand = brand ?? this.brand;
    }
    drive() {
        return "this car is very fast";
    }
}

let car1 = new Car();
console.log(car1.drive()); // Car { speed: 100, brand: 'BMW' }

let car2 = new Car(250, "Mercedes");
console.log(car2); // Car { speed: 250, brand: 'Mercedes' }


// const obj =
// {
//     value: 42,
//    getValue: () => this.value
// };
// console.log(obj.getValue());
