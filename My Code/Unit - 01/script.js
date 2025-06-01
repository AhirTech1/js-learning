/*let js = 'amazing';
console.log(40+23-8-10);

console.log("Bhavya");
console.log("20");

let firstName = "Bhavya"; //camelCase naming of variable
console.log(firstName);
//console.log(firstName);
//console.log(firstName);

//naming same as other languages (like python)
//convention - constant values' variable name is whole capital

//Assignment - Values and Variables
console.log("Assignment(Values and Variables) Solution Below :")
let country = "India";
let continent = "Asia";
let population = 1462.25;
console.log(country);
console.log(continent);
console.log(population," Million");
*/

/*
console.log(true);
console.log("true");

let javascriptIsFun = true;
console.log(javascriptIsFun);

console.log(typeof true);
console.log(typeof "true");
console.log(typeof javascriptIsFun);

javascriptIsFun = "YES!";
console.log(typeof javascriptIsFun);

let year;
console.log(year);
console.log(typeof year);

year = 1991
console.log(year);
console.log(typeof year);

console.log(typeof null);

//Assignment - Data Types
console.log("Assignment(Data Types) Solution Below :");
let isIsland = false;
let language;
let population = 1462.25;
let country = 'India';

console.log(typeof isIsland);
console.log(typeof population);
console.log(typeof country);
console.log(typeof language);
*/

/*
let age = 30;
age = 31;

const birthYear = 1991;
// birthYear = 1990;   //gets type error here
// const job;    //gets syntax error here

var job = 'programmer';
job = 'teacher';

lastName = 'Ahir';
console.log(lastName);
*/

/*
const now = 2025;
const ageMe = now - 2006;
const ageYou = now - 2004;
console.log(ageMe, ageYou);

console.log(ageYou * 2, ageYou / 10, 2 ** 3);
// 2 ** 3 means 2 to the power 3 which is 2 * 2 * 2

const firstName = 'Bhavya';
const lastName = 'Ahir';
console.log(firstName + ' ' + lastName);

//Assignment Operators
let x = 10 + 5; //15
x += 10;  // x = x + 10 = 25
x *= 4;  // x = x * 4 = 100
x++;  // x = x + 1 = 101
console.log(x);

//Comparison Operator
console.log(ageMe > ageYou);  // >, <, >=, <=

const isFullAge = ageYou >= 18;

console.log(now - 2006 > now - 2004);
*/

/*
const now = 2025;
const ageMe = now - 2006;
const ageYou = now - 2004;
console.log(now - 2006 > now - 2004);

let x, y;
x = y = 25 - 10 -5;
console.log(x, y);

ageSum = (ageMe + ageYou) / 2;
console.log(ageSum);

//Assignment - Basic Operators
console.log("Assignment(Basic Operators) Solution here:")
let population = 1462.25;
console.log(population);
population++;


finlandPopulation = 6;
console.log(population > finlandPopulation);

avgPopulation = 33;
console.log(population < avgPopulation);

description = 'India is in Asia, and its 538.2 million people speak hindi';
*/

/*
//Coding Challenge - 1
let markHeight, markMass, johnHeight, johnMass;
markHeight = 1.69;
johnHeight = 1.95;
markMass = 78;
johnMass = 92;

markBMI = markMass / markHeight ** 2;
johnBMI = johnMass / johnHeight ** 2;
console.log(markBMI, johnBMI);

let markHigherBMI = markBMI > johnBMI;
console.log(markHigherBMI);

markHeight = 1.88;
johnHeight = 1.76;
markMass = 95;
johnMass = 85;

markBMI = markMass / (markHeight * markHeight);
johnBMI = johnMass / (johnHeight * johnHeight);
console.log(markBMI, johnBMI);

markHigherBMI = markBMI > johnBMI;
console.log(markHigherBMI);
*/

/*
const firstName = 'Bhavya';
const job = 'student';
const birthYear = 2006;
const year = 2025;

const bhavya = "I'm " + firstName + ", a " + (year - birthYear) + " year old " + job + "!";
// console.log(bhavya);

const bhavyaNew = `I'm ${firstName}, a ${year - birthYear} year old ${job}!`;
console.log(bhavyaNew);

console.log(`Just a normal string using backticks ....`)

console.log("String with \n\
multiple \n\
lines.");

console.log(`String 
with multiple
lines, 
using backticks..`);
*/

/*
const age = 15;
const isOldEnough = age >= 18;

if(isOldEnough) {
    console.log("You can start Driving License.")
} else {
    const yearsLeft = 18 - age;
    console.log(`${yearsLeft} years left for Driving License.`);
}

const birthYear = 2006;
let century;
if (birthYear < 2000) {
    century = 20;
} else {
    century = 21;
}

console.log(century);
*/

/*
//Assignment - if/else Statements
console.log(`Assignment(if/else Statements) Solution here:`);
let population = 4362.8;
const country = `India`;
// population = 13;
// population = 130;

if(population >= 33) {
    console.log(`${country}'s population is above average.`);
} else {
    console.log(`${country}'s population is ${33 - population} million below average.`);
}
*/

/*
//Coding Challenge - 2
let markHeight, markMass, johnHeight, johnMass;
markHeight = 1.69;
johnHeight = 1.95;
markMass = 78;
johnMass = 92;

markBMI = markMass / markHeight ** 2;
johnBMI = johnMass / johnHeight ** 2;
console.log(markBMI, johnBMI);

let markHigherBMI = markBMI > johnBMI;
// console.log(markHigherBMI);

if(markHigherBMI) {
    console.log(`Mark's BMI is higher than John's`);
} else {
    console.log(`John's BMI is higher than Mark's`);
}

markHeight = 1.88;
johnHeight = 1.76;
markMass = 95;
johnMass = 85;

markBMI = markMass / (markHeight * markHeight);
johnBMI = johnMass / (johnHeight * johnHeight);
console.log(markBMI, johnBMI);

markHigherBMI = markBMI > johnBMI;
// console.log(markHigherBMI);

if(markHigherBMI) {
    console.log(`Mark's BMI (${markBMI}) is higher than John's (${johnBMI})`);
} else {
    console.log(`John's BMI (${johnBMI}) is higher than Marks's (${markBMI})`);
}
*/

/*
//type conversion
const inputYear = '2006';
console.log(Number(inputYear), inputYear);
console.log(Number(inputYear) + 18);

console.log(Number('Bhavya')); //Gives a NaN (Not a Number) error/output
console.log(typeof NaN);

console.log(String(23), 23);

//type coercion
console.log("I am " + 23 + " years old");
console.log('23' - '10' - 3);  //Output - 10 (Number)
console.log('23' + '10' + 3);  //Output - 23103 (String)
console.log('23' * '2');  //Output - 46 (Number)
console.log('23' / '2');  //Output - 11.5 (Number)

let n = '1' + 1;
n = n - 1;
console.log(n);
*/

/*
//Assignment - Type Conversion and Coercion
console.log("Assignment(Type Conversion and Coercion) Solution here:");
console.log('9' - '5');  //Output - 4 (Number)
console.log('19' - '13' + '17');  //Output - 617 (String)
console.log('19' - '13' + 17);  //Output - 23 (Number)
console.log('123' < 57);  //Output - false
console.log(5 + 6 + '4' + 9 - 4 - 2);  //Output - 1143 (Number)
*/

/*
//Falsy Values
console.log(Boolean(0));
console.log(Boolean(undefined));
console.log(Boolean('Bhavya'));
console.log(Boolean({}));
console.log(Boolean(''));

const money = 0;
if (money) {
    console.log("Don't spend it all.")
} else {
    console.log("You should get a job.")
}

let height;
if (height) {
    console.log("Height is defined.")
} else {
    console.log("Height is not UNDEFINED.")
}
*/

/*
//Equality operators
const age = 18;
if (age === 18) console.log("You just became an adult. (Strict)");
if (age == 18) console.log("You just became an adult. (Loose)");

const favourite = Number(prompt("Whats you favourite number : "));
console.log(favourite);
console.log(typeof favourite);

if (favourite === 23) {
    console.log(`23 is a cool number`);
} else if (favourite === 7) {
    console.log(`7 is also a cool number`);
} else {
    console.log("Number is not 23 or 7.");
}

if (favourite !== 23) console.log("Why not 23!");
*/

/*
//Assignment - Equality Operators
// const numNeighbours = prompt("How many neighbour countries does your country have?");
const numNeighbours = Number(prompt("How many neighbour countries does your country have?"));

if(numNeighbours === 1) console.log("Only 1 border!");
else if(numNeighbours > 1) console.log("More than 1 border!");
else console.log("No border!");
*/

/*
const hasDriversLicense = true;  // A
const hasGoodVision = true;  // B

console.log(hasDriversLicense && hasGoodVision);
console.log(hasDriversLicense || hasGoodVision);
console.log(!hasDriversLicense);

const shouldDrive = hasDriversLicense && hasGoodVision;

// if (shouldDrive) {
//     console.log("You are able to drive.")
// } else {
//     console.log("Someone else should drive....")
// }

const isTired = false;  // C
console.log(hasDriversLicense || hasGoodVision || isTired);

if (hasDriversLicense && hasGoodVision && !isTired) {
    console.log("You are able to drive.")
} else {
    console.log("Someone else should drive....")
}
*/

/*
//Assignment - Logical Operators
const country = "India";
const language = "English";
const population = 1436.8;
// const population = 36.8;
const isIsland = false;

const condition = (language === "English") && (population < 50) && (isIsland === false);

if (condition) {
    console.log(`You should live in ${country} :)`);
} else {
    console.log(`${country} does not meet your criteria :(`);
}
*/

/*
//Coding Challenge - 3
//First Time
// const scoreDolphins = (96 + 108 + 89) / 3;
// const scoreKoalas = (88 + 91 + 110) / 3;
// console.log(scoreDolphins, scoreKoalas);
//
// if (scoreDolphins > scoreKoalas) {
//     console.log(`Team Dolphins won the Trophy.`);
// } else if (scoreKoalas > scoreDolphins) {
//     console.log(`Team Koalas won the Trophy.`);
// } else {
//     console.log("Both teams won the Trophy.");
// }

//Bonus - 1
// const scoreDolphins = (97 + 112 + 101) / 3;
// const scoreKoalas = (109 + 95 + 123) / 3;
// console.log(scoreDolphins, scoreKoalas);
//
// if ((scoreDolphins > scoreKoalas) && (scoreDolphins >= 100)) {
//     console.log(`Team Dolphins won the Trophy.`);
// } else if ((scoreKoalas > scoreDolphins) && (scoreKoalas >= 100)) {
//     console.log(`Team Koalas won the Trophy.`);
// } else {
//     console.log(`Both teams won the Trophy.`);
// }

//Bonus - 2
// const scoreDolphins = (97 + 112 + 101) / 3;
// const scoreKoalas = (109 + 95 + 106) / 3;
// console.log(scoreDolphins, scoreKoalas);
//
// if ((scoreDolphins > scoreKoalas) && (scoreDolphins >= 100)) {
//     console.log(`Team Dolphins won the Trophy.`);
// } else if ((scoreKoalas > scoreDolphins) && (scoreKoalas >= 100)) {
//     console.log(`Team Koalas won the Trophy.`);
// } else if ((scoreDolphins >= 100) && scoreKoalas >= 100) {
//     console.log(`Its a draw.`);
// } else {
//     console.log(`Nobody won the trophy.`)
// }
*/

/*
// Switch case statement
const day = 'thursday';

switch(day) {
    case 'monday':  // day === 'monday'
        console.log("Plan course structure.");
        console.log("Go to coding meetup.");
        break;
    case 'tuesday':
        console.log('Prepare theory videos.');
        break;
    case 'wednesday':
    case 'thursday':
        console.log('Write code examples.');
        break;
    case 'friday':
        console.log('Record videos.');
        break;
    case 'saturday':
    case 'sunday':
        console.log('Enjoy the weekend.');
        break;
    default:
        console.log('Please enter a valid day.');
}
*/

/*
//Assignment - The Switch Statement
console.log("Assignment(The Switch Statement) Solution here.");
const language = 'hindi';

switch(language) {
    case 'chinese':
    case 'mandarin':
        console.log('MOST number of native speakers!');
        break;
    case 'spanish':
        console.log('2nd place in number of native speakers.');
        break;
    case 'english':
        console.log('3rd place');
        break;
    case 'hindi':
        console.log('Number 4');
        break;
    case 'arabic':
        console.log('5th most spoken language');
        break;
    default:
        console.log('Great language too :D');
}*/

/*
//Conditional Operator
const age = 19;
age >= 18 ? console.log('Can drink wine.') :
console.log('Cant drink wine.');

const drink = age >= 18 ? 'wine' : 'water';
console.log(drink);
*/

/*
//Assignment - The Conditional (Ternary) Operator
console.log("Assignment(The Conditional Operator) Solution here.");
const population = 1436.8;
const country = 'India';

console.log(`${country}'s population is ${(population > 33) ? 'above average' : 'below average'}`);
*/

/*
//Coding Challenge - 4
const bill = 275;
// const bill = 40;
// const bill = 430;

const tip = (bill >= 50 && bill <= 300) ? (0.15*bill) : (0.2*bill);
const total = bill + tip;

console.log(`The bill was ${bill}, the tip was ${tip}, and the total value ${total}`);
*/