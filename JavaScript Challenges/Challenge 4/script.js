
const fiveNumbers = [1, 2, 3,4,5];
console.log(fiveNumbers)
let personalInfo = {Name:"John", age:50, height:180, LOCATION:"BEIRUT",NATIONALITY:"LEBANESE"};
console.log(personalInfo)
const nextThreeNumbers = [7, 8, 9];
console.log(nextThreeNumbers)

const allNumbers =fiveNumbers.reduce((arr, item) => {
  arr.push(item);
  return arr;    
}, nextThreeNumbers);

console.log(allNumbers);
let additionalInfo = {occupation:"NO", hobby:"tennis",education:"grade 9"};
console.log(additionalInfo)


let fullInfo = Object.assign(personalInfo, additionalInfo);
console.log(fullInfo);

var firstNum = fiveNumbers[0];
var secondNum = fiveNumbers[1];
var thirdNum = fiveNumbers[2];
console.log(firstNum);
console.log(secondNum);
console.log(thirdNum);
var { Name , LOCATION , NATIONALITY } = personalInfo;

console.log( Name , LOCATION , NATIONALITY);
const teacher = {
name: "Brown",
address: {
area: {
street: "oxford university road",
},
city: "London",
country: "England"
},
}
console.log(teacher.address.area);
console.log(teacher.address);


const [firstNumber, secondNumber, ...restOfNumbers] = fiveNumbers;

console.log("First Number:", firstNumber);    // Output: First Number: 1
console.log("Second Number:", secondNumber);  // Output: Second Number: 2
console.log("Rest of Numbers:", restOfNumbers); // Output: Rest of Numbers: [3, 4, 5]

// Two objects to be merged
const obj1 = { a: 1, b: 2 };
const obj2 = { b: 3, c: 4 };

// Using the spread operator
const mergedObj1 = { ...obj1, ...obj2 };
console.log(mergedObj1); // Output: { a: 1, b: 3, c: 4 }

// Using Object.assign()
const mergedObj2 = Object.assign({}, obj1, obj2);
console.log(mergedObj2); // Output: { a: 1, b: 3, c: 4 }