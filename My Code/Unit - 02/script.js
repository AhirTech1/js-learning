'use strict';
/*
let hasDriversLicense = false;
const passTest = true;

if (passTest) hasDriversLicense = true;
if (hasDriversLicense) console.log(`I can Drive.`);

// const interface = 'Audio';
// const private = 534;
*/

/*
//Functions
function logger() {
    console.log('My name is Bhavya.');
}
// calling/running/invoking the function
logger();

function fruitProcessor(apples, oranges) {
    // console.log(apples, oranges);
    const juice = `Juice with ${apples} apples and ${oranges} oranges.`;
    return juice;
}

const appleJuice = fruitProcessor(5, 0);
console.log(appleJuice);

const appleOrangeJuice = fruitProcessor(2, 4);
console.log(appleOrangeJuice);

const num = Number('18');
console.log(num);
*/

/*
//Assignment - Functions
console.log("Assignment(Functions) Solution here.");
function describeCountry(country, population, capitalCity) {
    return `${country} has ${population} million people and its capital city is ${capitalCity}`;
}

const country1 = describeCountry('India', 1436.8, 'Delhi');
const country2 = describeCountry('Russia', 146, 'Moscow');
const country3 = describeCountry('Finland', 6, 'Helsinki');
console.log(country1);
console.log(country2);
console.log(country3);
*/

/*
//function declaration
function calcAge1(birthYear) {
    return 2025 - birthYear;
}
const age1 = calcAge1(2006);

//function expression
const calcAge2 = function (birthYear) {
    return 2025 - birthYear;
}
const age2 = calcAge2(2006);

console.log(age2, age1);
*/

/*
//arrow functions
const calcAge3 = birthYear => 2025 - birthYear;
const age3 = calcAge3(2006);
console.log(age3);

const yearsUntilRetirement = (birthYear, firstName) => {
    const age = 2025 - birthYear;
    const retirement = 65 - age;
    return `${firstName} retires in ${retirement} years.`;
}
console.log(yearsUntilRetirement(2006, 'Bhavya'));
*/

/*
//Assignment - Function Declaration vs Expression
console.log('Assignment(Function Declaration vs Expression) Solution here.');
// function percentageOfWorld1(population) {
//     const percentage = population / 79;
//     return percentage;
// }
// const country1 = percentageOfWorld1(1436.8);
// const country2 = percentageOfWorld1(1441);
// const country3 = percentageOfWorld1(68);
// console.log(`Population percentage of country1 is ${country1}`);
// console.log(`Population percentage of country2 is ${country2}`);
// console.log(`Population percentage of country3 is ${country3}`);

// const percentageOfWorld2 = function (population) {
//     return population / 79;
// }
// const country1 = percentageOfWorld2(1436.8);
// const country2 = percentageOfWorld2(1441);
// const country3 = percentageOfWorld2(68);
// console.log(`Population percentage of country1 is ${country1}`);
// console.log(`Population percentage of country2 is ${country2}`);
// console.log(`Population percentage of country3 is ${country3}`);
*/

/*
//Assignment - Arrow Functions
const percentageOfWorld3 = population => population / 79;

const country1 = percentageOfWorld3(1436.8);
const country2 = percentageOfWorld3(1441);
const country3 = percentageOfWorld3(68);
console.log(`Population percentage of country1 is ${country1}`);
console.log(`Population percentage of country2 is ${country2}`);
console.log(`Population percentage of country3 is ${country3}`);
*/

/*
//Calling function inside a function
function cutFruitPieces(fruit) {
    return fruit * 4;
}

function fruitProcessor(apples, oranges) {
    const applePieces = cutFruitPieces(apples);
    const orangePieces = cutFruitPieces(oranges);

    const juice = `Juice with ${applePieces} piece of apples and ${orangePieces} piece of oranges.`;
    return juice;
}
console.log(fruitProcessor(2, 3));
*/

/*
//Assignment - Functions calling other functions
console.log('Assignment(Functions Calling Other Functions) Solution here.');
const percentageOfWorld = population => population / 79;

function describePopulation(country, population) {
    const percentage = percentageOfWorld(population);
    return `${country} has ${population} million people, which is about ${percentage} % of the world.`
}

const country1 = describePopulation('India', 1436.8);
const country2 = describePopulation('China', 1441);
const country3 = describePopulation('Russia', 146);
console.log(country1);
console.log(country2);
console.log(country3);
*/

/*
//Coding Challenge - 1
console.log('Coding Challenge - 1 Solution here.');

const calcAverage = (score1, score2, score3) => (score1 + score2 + score3) / 3;

const score1Dolphins = 85;
const score2Dolphins = 54;
const score3Dolphins = 41;

const score1Koalas = 23;
const score2Koalas = 34;
const score3Koalas = 27;

const avgDolphins = calcAverage(score1Dolphins, score2Dolphins, score3Dolphins);
const avgKoalas = calcAverage(score1Koalas, score2Koalas, score3Koalas);
console.log(avgDolphins, avgKoalas);

function checkWinner(team1, team2) {
    if (team1 >= 2 * team2) {
        return `Dolphins win (${team1} vs. ${team2})`;
    } else if (team2 >= 2 * team1) {
        return `Koalas win (${team2} vs. ${team1})`;
    } else {
        return `No one wins.`;
    }
}

console.log(checkWinner(avgDolphins, avgKoalas));
*/