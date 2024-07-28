const car = {
    name:"Gwagon",
    price:50000000,
    color:["white","black", "blue"],
}
console.log(car);
console.log(car.price);
console.log(car.color[1]);

const cars = [
    {
        name:"Gwagon",
        price:70000000,
        color:["white","black", "blue"],
    },
    {
        name:"alto",
        price:60000000,
        color:["white","black", "blue"],
    },{
        name:"nano",
        price:80000000,
        color:["white","black", "blue"],
    },{
        name:"BMW",
        price:40000000,
        color:["white","black", "blue"],
    }
]
console.log(cars);
console.log(cars[1].price);
console.log(cars[1].name);
cars[1].color.push("gray")
console.log(cars[1])