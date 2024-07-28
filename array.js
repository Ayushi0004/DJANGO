// //let car1="wagon R"

//   const car =[ 'wagon R' , 'BMW' , 'G wagon', 'alto nano',123,null, undefined, 12.34 ]
// //   console.log(car);
// console.log(car.length);


// //  const cars =[]
// //  cars[0]="WagonR"
// //  cars[1]="BMW"
// //  cars[2]="nano"
// //  colsole.log(cars);

//  //indexing
//  console.log(car[2]);
//  console.log(car.indexOf(null));
//  console.log(car.at(-2));

//  //modifynig array
//  car.push("jaguar")
//  car.shift("kia")
//  console.log(car);
 
//  car.pop()
//  car.shift()
//  console.log(.)

const car =[ 'wagon R' , 'BMW' , 'G wagon', 'alto' ,'nano' ,123, null, undefined, 12.34 ]
console.log(car)
car.push("varna")
console.log(car)

//slicing   it give an other of array which we requried
console.log(car.slice(2,3))

const food=["sweets", "panipuri","laddu","jalebi","samosa",123, 23.45 ]
console.log(food)
console.log(food.slice(2,4))

//splicing it make change in the already defined array 
  car.splice(3,2,"gulab","jamun")
  console.log(car.slice(3,2))