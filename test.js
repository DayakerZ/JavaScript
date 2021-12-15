var number = 0;
//console.log("Hello world");

while(true){
    if(number%2===0){
        if(number > 50)
            break;
        console.log('value of the number is '+number);
    }
    number++;
}

const array1 = ['a', 'b', 'c'];

for (const element of array1) {
    console.log(element);
}

// with out input arguments and return 
function logger(){
    console.log("Hey i am in a function...!");
}

logger();

//regular functions
function juiceMaker(apples,oranges){
    const juice = `juice with ${apples} apples and ${oranges} oranges`;
    return juice;
}

const juiceMade = juiceMaker(10,8);
console.log(juiceMade);

//function expressions
const yearsLeftTillRetirement = function(birthYear,firstName){
    const age = 2021 - birthYear;
    const retirement = 65 - age;
    //return retirement;
    return `function expressions:${firstName} retires after ${retirement} years`;
}

console.log(yearsLeftTillRetirement(2000,'Dayaker'));

//arrow functions
const yearsUntilRetirement = (birthYear,firstName) => {
    const age = 2021 - birthYear;
    const retirement = 65 - age;
    //return retirement;
    return `arrow functions:${firstName} retires after ${retirement} years`;

}
//console.log(yearsUntilRetirement(2000))
console.log(yearsUntilRetirement(2000,'Dayaker'))

//function call inside function 
function cutFruits(fruit){
    return fruit*10;
}

function fruitJuice(apples,oranges){
    const applePieces = cutFruits(apples);
    const orangePieces = cutFruits(oranges);

    const juice = `juice made with ${applePieces} apple pieces and ${orangePieces} orange pieces`;
    return juice;
}

console.log(fruitJuice(10,8));

//Passing function as argument

var cutIntoPieces = function(fruits){
    return fruits*4;
}

function fruitJuiceAlternateMethod(apples,oranges,cutFunction){

    const applePieces = cutFunction(apples);
    const orangePieces = cutFunction(oranges);

    const juice = `juice made with ${applePieces} apple pieces and ${orangePieces} orange pieces`;
    return juice;
}


console.log(fruitJuiceAlternateMethod(5,6,cutIntoPieces));