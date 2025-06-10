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

/*
// Arrays
const friend1 = 'Michael';
const friend2 = 'Steven';
const friend3 = 'Peter';

const friends = [friend1, friend2, friend3];
console.log(friends);

// const years = new Array(1991, 2006, 2025);

console.log(friends[0]);
console.log(friends[1]);

console.log(friends.length);
console.log(friends[friends.length - 1]);

friends[2] = 'Jay';  // Array are not primitive, hence we can mutate them.
console.log(friends);
// friends = ['Bhavya', 'Ahir'];   //This gets error as this is illegal

const bhavya = ['Bhavya', 'Ahir', 2025 - 2006, 'student', friends];
console.log(bhavya);

// Exercise
function calcAge(birthYear) {
    return 2025 - birthYear;
}

const years = [1990, 2001, 2006, 2008];
const age1 = calcAge(years[0]);
const age2 = calcAge(years[1]);
const age3 = calcAge(years[years.length - 1]);

console.log(age1, age2, age3);

const ages = [calcAge(years[0]), calcAge(years[1]), calcAge(years[years.length - 1])];
console.log(ages);
*/

/*
// Array Methods/Operations
const friend1 = 'Michael';
const friend2 = 'Steven';
const friend3 = 'Peter';
const friends = [friend1, friend2, friend3];

//Add Elements
const newLength = friends.push('Jay');  // Adds element to the last
console.log(friends);
console.log(newLength);

friends.unshift('John');
console.log(friends);

//Remove Elements
friends.pop();  // Remove the last element of array
const popped = friends.pop();
console.log(friends);
console.log(popped);

friends.shift();  // Remove the first element of array
console.log(friends);

// Check for an existing element in array
console.log(friends.indexOf('Michael'));
console.log(friends.indexOf('Bob'));

friends.push(23);
console.log(friends.includes('Steven'));
console.log(friends.includes('Peter'));
console.log(friends.includes('23'));
*/

/*
// Assignment - Introduction to Arrays
console.log("Assignment (Introduction to Arrays) Solution Here.");

const indiaPopulation = 1436.8;
const chinaPopulation = 1441;
const russiaPopulation = 146;
const finlandPopulation = 33;

const populations = [indiaPopulation, chinaPopulation, russiaPopulation, finlandPopulation];
console.log(populations);

console.log(populations.length === 4);

const percentageOfWorld = population => population / 79;
const percentages = [percentageOfWorld(populations[0]), percentageOfWorld(populations[1]), percentageOfWorld(populations[2]), percentageOfWorld(populations[3])];
console.log(percentages);
*/

/*
//Assignment - Basic Array Operations
console.log('Assignment(Basic Array Operations) Solution Here.');

const neighbours = ['Bhutan', 'Bangladesh', 'China', 'Pakistan', 'Afghanistan', 'Sri Lanka'];
console.log(neighbours);

neighbours.push('Utopia');
console.log(neighbours);

neighbours.pop();
console.log(neighbours);

if (neighbours.includes('Germany') !== true) {
    console.log("Probably not a central European country :D");
}

const indexCountry = neighbours.indexOf('China');
neighbours[indexCountry] = 'Tibet';
console.log(neighbours);
*/

/*
//Coding Challenge - 2
console.log('Coding Challenge - 2 Solution here.');

function calcTip(billValue) {
    if (billValue >= 50 && billValue <= 300) {
        return (billValue * 15) / 100;
    } else {
        return (billValue * 20) / 100;
    }
}

const bills = [125, 555, 44];
const tips = [calcTip(bills[0]), calcTip(bills[1]), calcTip(bills[bills.length - 1])];

console.log(bills);
console.log(tips);

const total = [bills[0] + tips[0], bills[1] + tips[1], bills[bills.length - 1] + tips[tips.length - 1]];
console.log(total);
*/

/*
//Objects
// const bhavyaArray = [
//     'Bhavya',
//     'Ahir',
//     2025 - 2006,
//     'student',
//     ['Michael', 'Peter', 'Steven']
// ]

const bhavya = {
    firstName: 'Bhavya',
    lastName: 'Ahir',
    age: 2025 - 2006,
    job: 'student',
    friends: ['Michael', 'Peter', 'Steven']
}
console.log(bhavya);
console.log(bhavya.lastName);  // dot notation
console.log(bhavya['lastName']);  //We can use an expression instead of 'lastName' here

const nameKey = 'Name';

console.log(bhavya['first' + nameKey]);
console.log(bhavya['last' + nameKey]);

// console.log(bhavya.'last' + nameKey);  // Wont work :(

const interestedIn = prompt('What do you want to know about Bhavya? Choose between firstName, lastName, age, job, and friends');
// console.log(bhavya.interestedIn);  //not working
console.log(bhavya[interestedIn]);

if (bhavya[interestedIn]) {
    console.log(bhavya[interestedIn]);
} else {
    console.log('Wrong request! Choose between firstName, lastName, age, job, and friends.');
}

bhavya.location = 'India';
bhavya['social'] = '@bhavyaahir';
console.log(bhavya);

//Challenge
console.log(`${bhavya.firstName} has ${bhavya['friends'].length} friends, and his best friend is ${bhavya.friends[0]}`);
*/

/*
// Object Methods
const bhavya = {
    firstName: 'Bhavya',
    lastName: 'Ahir',
    birthYear: 2006,
    job: 'student',
    friends: ['Michael', 'Peter', 'Steven'],
    hasDriversLicense: true,
    // calcAge: function(birthYear) {
    //     return 2025 - birthYear;
    // }

    // calcAge: function() {
    //     console.log(this);
    //     return 2025 - this.birthYear;
    // }

    calcAge: function() {
        this.age = 2025 - this.birthYear;
        return this.age;
    },

    getSummary: function() {
        return `${bhavya.firstName} is a ${bhavya.age}-years old ${bhavya.job}, and he has ${this.hasDriversLicense ? 'a' : 'no'} driver's license.`
    }
};

console.log(bhavya.calcAge());
// console.log(bhavya['calcAge'](bhavya.birthYear));
console.log(bhavya.age);

//Challenge

// function checkDriversLicense(boolValue) {
//     if (boolValue === true) {
//         return "has a Driver's License.";
//     } else {
//         return "do not have a Driver's License.";
//     }
// }

// console.log(`${bhavya.firstName} is a ${bhavya.age}-years old ${bhavya.job}, and he ${checkDriversLicense(bhavya.hasDriversLicense)}`);
console.log(bhavya.getSummary());
*/

/*
//Assignment - Introduction to Objects
console.log('Assignment(Introduction to Objects) Solution here.');

const myCountry = {
    country: 'India',
    capital: 'Delhi',
    language: 'Hindi',
    population: 1436.8,
    neighbours: ['Bhutan', 'Bangladesh', 'China', 'Pakistan', 'Afghanistan', 'Sri Lanka']
}
console.log(myCountry);
*/

/*
//Assignment - Dot vs. Bracket Notation
console.log('Assignment(Dot vs. Bracket Notation) Solution Here.');
const myCountry = {
    country: 'India',
    capital: 'Delhi',
    language: 'Hindi',
    population: 1436.8,
    neighbours: ['Bhutan', 'Bangladesh', 'China', 'Pakistan', 'Afghanistan', 'Sri Lanka']
}

console.log(`${myCountry.country} has ${myCountry.population} million ${myCountry.language}-speaking people, ${myCountry.neighbours.length} neighbouring countries and a capital called ${myCountry.capital}.`);

myCountry.population = myCountry.population + 2;
console.log(myCountry);

myCountry['population'] = myCountry['population'] - 2;
console.log(myCountry);
*/

/*
//Assignment - Object Methods
console.log("Assignment(Object Methods) Solution here.");
const myCountry = {
    country: 'India',
    capital: 'Delhi',
    language: 'Hindi',
    population: 1436.8,
    neighbours: ['Bhutan', 'Bangladesh', 'China', 'Pakistan', 'Afghanistan', 'Sri Lanka'],

    describe: function() {
        console.log(`${this.country} has ${this.population} million ${this.language}-speaking people, ${this.neighbours.length} neighbouring countries and a capital called ${this.capital}.`)
    },

    checkIsland: function() {
        this.isIsland = (this.neighbours.length === 0);
        return this.isIsland;
    }
};

myCountry.describe();
console.log(myCountry.checkIsland());
*/

/*
//Coding Challenge - 3
const markData = {
    firstName: 'Mark',
    lastName: 'Miller',
    mass: 78,
    height: 1.69,

    calcBMI: function() {
        this.markBMI = this.mass / (this.height ** 2);
        return this.markBMI;
    }
};

const johnData = {
    firstName: 'John',
    lastName: 'Smith',
    mass: 92,
    height: 1.95,

    calcBMI: function() {
        this.johnBMI = this.mass / (this.height ** 2);
        return this.johnBMI;
    }
};

if (markData.markBMI > johnData.johnBMI) {
    console.log(`${markData.firstName}'s BMI (${markData.calcBMI()}) is higher than ${johnData.firstName}'s (${johnData.calcBMI()})!`);
} else {
    console.log(`${johnData.firstName}'s BMI (${johnData.calcBMI()}) is higher than ${markData.firstName}'s (${markData.calcBMI()})!`);
}
*/

/*
//Loops
// console.log('Lifting weights repetition 1!');
// console.log('Lifting weights repetition 2!');
// console.log('Lifting weights repetition 3!');
// console.log('Lifting weights repetition 4!');
// console.log('Lifting weights repetition 5!');
// console.log('Lifting weights repetition 6!');
// console.log('Lifting weights repetition 7!');
// console.log('Lifting weights repetition 8!');
// console.log('Lifting weights repetition 9!');
// console.log('Lifting weights repetition 10!');

// for loop keeps running while condition is TRUE
for(let rep = 1; rep <= 10; rep++) {
    console.log(`Lifting weights repetition ${rep}!`);
}
*/

/*
const bhavyaArray = [
    'Bhavya',
    'Ahir',
    2025 - 2006,
    'student',
    ['Michael', 'Peter', 'Steven']
];

const types = [];

for(let i = 0; i < bhavyaArray.length; i++) {
    console.log(bhavyaArray[i], typeof bhavyaArray[i]);

    //Filling types array
    // types[i] = typeof bhavyaArray[i];
    types.push(typeof bhavyaArray[i]);
}

console.log(types);

const years = [1991, 2001, 2006, 2020];
const ages = [];

for (let j = 0; j < years.length; j++) {
    ages.push(2025 - years[j]);
}
console.log(ages);
*/

/*
//continue and break
const bhavyaArray = [
    'Bhavya',
    'Ahir',
    2025 - 2006,
    'student',
    ['Michael', 'Peter', 'Steven']
];

const types = [];

console.log('----Only String----');
for (let i = 0; i < bhavyaArray.length; i++) {
    if(typeof bhavyaArray[i] !== 'string') continue;

    // types.push(typeof bhavyaArray[i]);
    console.log(bhavyaArray[i], typeof bhavyaArray[i]);
}
// console.log(types);

console.log('----Break with number----')
for (let i = 0; i < bhavyaArray.length; i++) {
    if(typeof bhavyaArray[i] === 'number') break;

    // types.push(typeof bhavyaArray[i]);
    console.log(bhavyaArray[i], typeof bhavyaArray[i]);
}
*/

/*
//while loop
let rep = 1;
while (rep <= 10) {
    console.log(`Lifting weights repetition ${rep}`);
    rep++;
}
*/

/*
//Assignment - Iteration: The for Loop
for (let i = 1; i <= 50; i++) {
    console.log(`Voter number ${i} is currently voting.`);
}
 */

/*
//Assignment - Looping Arrays, Breaking and Continuing
const indiaPopulation = 1436.8;
const chinaPopulation = 1441;
const russiaPopulation = 146;
const finlandPopulation = 33;

const populations = [indiaPopulation, chinaPopulation, russiaPopulation, finlandPopulation];
const percentageOfWorld = population => population / 79;
const percentages2 = [];

for (let i = 0; i < populations.length; i++) {
    percentages2.push(percentageOfWorld(populations[i]));
}
// console.log(percentages2);
 */

/*
//Assignment - Looping Backwards and Loops in Loops
const listOfNeighbours = [['Canada', 'Mexico'], ['Spain'], ['Norway', 'Sweden', 'Russia']];

for(let i = 0; i < listOfNeighbours.length; i++){
    console.log(`Neighbouring Countries list - ${i+1}`);
    for(let j = 0; j < listOfNeighbours[i].length; j++){
        console.log(`Neighbour - ${listOfNeighbours[i][j]}`);
    }
}
 */


// Coding Challenge - 4
const bills = [22, 295, 176, 440, 37, 105, 10, 1100, 86, 52];
const tips = [];
const totals = [];

function calcTip(billValue) {
    if (billValue >= 50 && billValue <= 300) {
        return (billValue * 15) / 100;
    } else {
        return (billValue * 20) / 100;
    }
}

for (let i = 0; i < bills.length; i++) {
    tips.push(calcTip(bills[i]));
    totals.push(tips[i] + bills[i]);
}

console.log(tips);
console.log(totals);