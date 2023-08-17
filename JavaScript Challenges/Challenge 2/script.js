let age = 44;
if (age < 20) {
   console.log ("You can't enter this room.");
  } else {
    console.log ("You can enter this room");
  }
  const expression1 = 5 > 3;
  console.log (expression1);
  const expression2 = 10 === '10';
  console.log (expression2);
  const expression3 = true && false;
  console.log (expression3);
  const expression4 = !expression3;
  console.log (expression4);
  const age1 = 10;
const hasDriverLicense = false;
const hasCar = false;
const canDrive = false;
if (age1 >= 18 && hasDriverLicense == true) {
    let canDrive = true;
    console.log (canDrive);
    console.log("can drive")
   }
   
let canRentCar = false;
if (age1 >= 22 && hasDriverLicense == true && hasCar == false) {
    let canRentCar = true;
    console.log (canRentCar);
    console.log("can rent")
   }
   let needDriver = false;

   if (age1 <18 && hasDriverLicense == false && hasCar == false) {
    let needDriver = true;
    console.log("need driver")
   }
