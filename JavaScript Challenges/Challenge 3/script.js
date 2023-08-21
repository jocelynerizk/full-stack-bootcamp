
function addNumbers(num1, num2) {
    return num1 + num2;
  }    function addNumbers(num1, num2) {
    return num1+num2;
  }
console.log(addNumbers(5,8));

function findmax(numb1, numb2) {
  
    if (numb1>numb2) {
        return numb1;
      } else if (numb1<numb2) {
        return numb2;
      } else {
        return "equal";
      }
}
console.log(findmax(5,8));

function compute(op1,op2,operation)
{
    switch (operation) {
        case '+' : return (op1+op2)
        break
        case '-' : return (op1-op2)
        break
        case '/' : return (op1/op2)
        break
        case '*' : return (op1*op2)
        break
    }

}

console.log(compute(9,5,"*"));
une_variable_globale = 5
const squareNumber = (number) => number * number;
console.log(squareNumber(une_variable_globale));
for (var input = 1; input <= 10; input++) {
    console.log(input);
   }

let i = 1, n = 10;

while (i <= n) {
    console.log(i);
    i += 1;
}

let j = 1;
do {
    console.log(j);
  j++;
}
while (j < 11);

const fruits = ["pomme", "pa", "cerise"];

const length = fruits.length;

for (let m = 0; m < length; i++) {
  if (fruits[i].length>5){
   console.log(fruits[i]);
}
}