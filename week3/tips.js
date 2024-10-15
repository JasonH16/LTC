// sample inputs
//VAR is old school but does not make it a local var
//let is better 
//const is better still if it will not be changed/modified
const identifier = "value";

const foodCost = 79.25;
const tax = 6.54;
let tip = 12;

// calculations
const totalDue = foodCost + tax + tip;
// output
//console.log("The total due is " + totalDue);


//console.log("Food cost is " + foodCost + " and tax is " + tax);
//console.log("Tip is " + tip);
//console.log("Total Due is " + totalDue);

const first = "Jason";

console.log(`
    My name is ${first}
    Food cost is $${foodCost} and tax is $${tax}.
Tip is $(tip)
Total Due is $${totalDue}.
`);

