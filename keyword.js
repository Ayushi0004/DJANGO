num=246
console.log(num);

let num1=264
console.log(num1);// in let we reassign the value 

var num2=123
console.log(num2);//it is older keyword which is not ussed in present.


const num3=456
console.log(num3)//in this we cant not change the value 

//block scope
//let and const are blocked scope
{
    var x = 2
    //console.log(x);
}
console.log(x)
 var y=2 
 var y="shiva"
 console.log(y)

 let z=10
 console.log(z)
//it is not complsery to put semicolen in js.
 n=346
 if (n%2==0){
    console.log('even')
    global='this should be global scope'
    const o='jaya'
    console.log(o)
    let nature="good"
    console.log(nature)
 }
 else{
    console.log('odd')
 }
 console.log(global)
 