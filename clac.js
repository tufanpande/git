console.log("Statement");

const Num = Number(prompt("enter a number "));
const operator = prompt("enter the opertaion");
const Num2 = Number(prompt("Enter another number")); //converts the string into number
// const isValidNum  =(Num>= 65 && Num<=90)|| (Num>=97&& Num<=122);
// const isValidNum2  =(Num2>= 65 && Num2<=90)|| (Num2>=97&& Num2<=122);
// alert("Invalid Number!!");

if (isValidNum || isValidNum2){
 alert("Invalid Number!!");

}else
{
    switch(value){

    }
}
let Result;
switch (operator) {
  case "+":
    Result = Num + Num2;
    break;
  case "-":
    Result = Num - Num2;
    break;
  case "*":
    Result = Num * Num2;
    break;
  case "%":
    Result = Num % Num2;
    break;
  case "/":
    if (Num2 != 0) {
      Result = Num / Num2;
    } else {
      alert("Not divisible by 0");
    }

    break;

  default:
    "Enter valid value";
}
console.log("Result:", Result);