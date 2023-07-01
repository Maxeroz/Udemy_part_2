/*
// Lecture: Values and Variables
const country = "Russia";
const continent = "Europe";
let population = 145;

// console.log(country);
// console.log(continent);
// console.log(population);

// Lecture: Data types

const isIsland = false;
let language = "";;
console.log(isIsland);
console.log(population);
console.log(country);
// Lecture: let, const and var ;
language = "Russian";

console.log(language);

const averagePopulation = 33;

console.log(population / 2);
population++
console.log(population);
console.log(population > 6);
console.log(population > averagePopulation);

// const description = country + " " + "is in Europe, and its " + population + " millions people speak " + language;
// console.log(description);

const newDescription = `${country} is in Europe, and its ${population} millions people speak ${language}`;
console.log(newDescription);

if (population > 33) {
    console.log(`${country}'s population is above average.`);
} else {
    console.log(`${country}'s population is ${averagePopulation - population} million below average`);
}

// const massMark = 78;
// const heightMark = 1.69;
// const massJohn = 92;
// const heightJohn = 1.95;

// const BMIMark = massMark / (heightMark * heightMark);
// const BMIJohn = massJohn / (heightJohn * heightJohn);
// console.log(BMIMark, BMIJohn);

// if (BMIMark > BMIJohn) {
//     console.log(`Mark's BMI (${BMIMark}) is higher than John's (${BMIJohn})!`);
// } else {
//     console.log(`John's BMI (${BMIJohn}) is higher than Mark's (${BMIMark})!`);
// }

// console.log("9" - "5"); //4
// console.log("19" - "13" + "17") //617
// console.log("19" - "13" + 17) //23
// console.log("123" < 57) //false
// console.log(5 + 6 + "4" + 9 - 4 - 2);//1143

// const numNeighbours = Number(prompt("How many neighbour countries does your country have?"));
// console.log(numNeighbours);

// if (numNeighbours === 1) {
//     console.log("Only 1 border");
// } else if (numNeighbours > 1) {
//     console.log("More than 1 border");
// } else {
//     console.log("No borders");
// }

if (language === "English" && population < 50 && !isIsland) {
    console.log(`You should live in ${country} :)`);
} else {
    console.log(`${country} does not meet your criteria :(`);
}

switch (language) {
    case "Chinese":
    case "Mandarian":
        console.log("MOST number of native speakers!");
        break;
    case "Spanish":
        console.log("2nd place in number of native speakers");
        break;
    case "English":
        console.log("3rd place");
        break;
    case "Hindi":
        console.log("Number 4");
        break;
    case "Arabic":
        console.log("5th most spoken language");
        break;
    default:
        console.log("Great language too :D")
        break;
}

// population > 33 ? console.log(`${country}'s population is above average`) : console.log(`${country}'s population is below average`);

// console.log(`${country}'s population is ${population > 33 ? "above" : "below"} average`);

const bill = 275;
const tip = bill >= 50 && bill <= 300 ? bill * 0.15 : bill * 0.2;

console.log(`The bill was ${bill},the tip was ${tip},and the total value 
${bill + tip}`);

function describeCountry(country, population, capitalCity) {
    const description = `${country} has ${population} million people and its capital city is ${capitalCity}`;
    return description;
}

const russia = describeCountry("Russia", 145, "Moscow");
const spain = describeCountry("Spain", 47, "Madrid");
const england = describeCountry("England", 56, "London");

console.log(russia);
console.log(spain);
console.log(england);

function percentageOfWorld1(population) {
    return ((population / 7900) * 100);
}

const percentageRussia = percentageOfWorld1(145);
const percentageItaly = percentageOfWorld1(59);
const percentageChina = percentageOfWorld1(1441);

console.log(percentageRussia, percentageItaly, percentageChina);


const percentageOfWorld2 = function (population) {
    return ((population / 7900) * 100);
}

console.log(percentageOfWorld2(145), percentageOfWorld2(59), percentageOfWorld2(1441));

const percentageOfWorld3 = population => (population / 7900) * 100;

console.log(percentageOfWorld3(145), percentageOfWorld3(59), percentageOfWorld3(1441));

function percentageOfWorld1(population) {
    return ((population / 7900) * 100);
}

function describePopulation(country, population) {
    const percentOfPopulation = percentageOfWorld1(population)

    return `${country} has ${population} million people which is about ${percentOfPopulation} of the world`
}

console.log(describePopulation("Russia", 145));
console.log(describePopulation("China", 1441));
console.log(describePopulation("Italy", 59));

const calcAverage = (scoreOne, scoreTwo, scoreThree) => (scoreOne + scoreTwo + scoreThree) / 3;

let scoreDolphins = calcAverage(44, 23, 71);
let scoreKoalas = calcAverage(65, 54, 49);

console.log(scoreDolphins, scoreKoalas);

function checkWinner(avgDolphins, avgKoalas) {
    if (avgDolphins > (avgKoalas * 2)) {
        console.log(`Doplhins win ${avgDolphins} vs. ${avgKoalas}`);
    } else if (avgKoalas > (avgDolphins * 2)) {
        console.log(`Koalas win ${avgKoalas} vs. ${avgDolphins}`)
    } else {
        console.log(`No team wins`)
    }
}

checkWinner(scoreDolphins, scoreKoalas);

scoreDolphins = calcAverage(85, 54, 41);
scoreKoalas = calcAverage(23, 34, 27);

console.log(scoreDolphins, scoreKoalas);
checkWinner(scoreDolphins, scoreKoalas);

const population = [145, 1441, 59, 56];

if (population.length === 4) {
    console.log("Has 4 elements");
} else {
    console.log("Does not containt 4 elemets");
}
console.log(population);

function percentageOfWorld1(population) {
    return ((population / 7900) * 100);
}

const percentages = [
    percentageOfWorld1(population[0]),
    percentageOfWorld1(population[1]),
    percentageOfWorld1(population[2]),
    percentageOfWorld1(population[3])
];

console.log(percentages);

const neighbours = ["Ukraine", "Qazaqstan", "China", "USA", "Finland"];
console.log(neighbours);

neighbours.push("Utopia");
console.log(neighbours);

neighbours.pop();
console.log(neighbours);

if (neighbours.includes("Germany")) {
    console.log("Central European country")
} else {
    console.log("Probably not a central European country :D")
}

// console.log(neighbours.indexOf("Finland"));
// neighbours[4] = "Republic of Finland";
neighbours[neighbours.indexOf("Finland")] = "Republic of Finland";
console.log(neighbours);

function calcTip(bill) {
    if (bill >= 50 && bill <= 300) {
        return bill / 100 * 15;
    } else {
        return bill / 100 * 20;
    }
}

console.log(calcTip(100));

const bills = [125, 555, 44];
const tips = [calcTip([bills[0]]), calcTip([bills[1]]), calcTip(bills[2])];
console.log(tips);

const total = [bills[0] + tips[0], bills[1] + tips[1], bills[2] + tips[2]];
console.log(total);

const myCountry = {
    country: "Russia",
    capital: "Moscow",
    language: "Russian",
    population: 145,
    neighbours: ["Ukraine", "China", "Kazahstan", "Belarus"]
}

console.log(myCountry);

const myCountry = {
    country: "Russia",
    capital: "Moscow",
    language: "Russian",
    population: 145,
    neighbours: ["Ukraine", "China", "Kazahstan", "Belarus"]
}

console.log(`${myCountry.country} has ${myCountry.population} million ${myCountry.language}-speaking people, ${myCountry.neighbours.length} neighbouring countries and a capital called ${myCountry.capital}`);

myCountry.population += 2;
console.log(myCountry);
myCountry["population"] -= 2;
console.log(myCountry)

const myCountry = {
    country: "Russia",
    capital: "Moscow",
    language: "Russian",
    population: 145,
    neighbours: ["Ukraine", "China", "Kazahstan", "Belarus"],

    describe: function () {
        console.log(`${this.country} has ${this.population} million ${this.language}-speaking people, ${this.neighbours.length} neighbouring countries and a capital called ${this.capital}.`);
    },
    checkIsIsland: function () {
        return myCountry.isIsland = this.neighbours ? "false" : "true";
    }
}

myCountry.describe()
myCountry.checkIsIsland()

console.log(myCountry);

const mark = {
    fullName: "Mark Miller",
    mass: 78,
    height: 1.69,

    calcBMI: function () {
        this.bmi = this.mass / (this.height * this.height);
        return this.bmi;
    }
}

const john = {
    fullName: "John Smith",
    mass: 92,
    height: 1.95,

    calcBMI: function () {
        this.bmi = this.mass / (this.height * this.height);
        return this.bmi;
    }
}

console.log(mark.calcBMI())
console.log(john.calcBMI())

console.log(john);
console.log(mark);

console.log(`${john.bmi > mark.bmi ? john.fullName : mark.fullName} (${john.bmi > mark.bmi ? john.bmi : mark.bmi}) BMI is higher than ${mark.bmi < john.bmi ? mark.fullName : john.fullName} (${mark.bmi < john.bmi ? mark.bmi : john.bmi}) BMI!`);
*/

for (let voter = 1; voter <= 50; voter++) {
    console.log(`Voter number ${voter} is currently voting`);
};