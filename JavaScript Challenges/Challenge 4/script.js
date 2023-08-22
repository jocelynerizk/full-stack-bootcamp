
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