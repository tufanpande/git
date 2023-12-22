// // write a function to add two number
// const a = Number(prompt("Enter 1"));
// const b = Number(prompt("Enter 2"));

// //define teh function
// function add(a,b){
//     return a+b;
// }

// const o = add(a, b);
// console.log(o);//print the value


/*
types of function
Nameless function
default function
Inline function
closure
Implicit
*/

// const value1 = Number(prompt("enter the number"));
// const value2 = Number(prompt("enter the number"));


// function sum(value1 ,value2){
//     return value1+value2;

// }

// function sub(value1, value2){
//     return value1-value2;

// }
// function mul(value1, value2){
//     return value1*value2;

// }
// function div(value1, value2){
//     return value1/value2;

// }

// // calling function

// const add =sum(value1, value2);
// const subb =sub(value1, value2);
// const mult = mul( value1, vlue2);
// const divi = div(value1, value2);
// //print the result
// console.log(add);
// console.log(subb);
// console.log(mult);
// console.log(divi);


//check even number
// function checkEvenNumber(value1){
//     return value1 %2===0;
// }
// const check=checkEvenNumber(value1);
// alert(check);


// defining through Es5
//function add(){}

function add(a,b){
    return a+b;
}

// Defining through Es6(arrow function)
//const add = ()=>{};
//const sub = ()=>{};
const add = (a,b)=>{
    return a+b;
};