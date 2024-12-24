/**
 * To run this file in Gitpod, use the 
 * command node destructuring.js in the terminal
 */

// Destructuring arrays
let ages = [30, 26, 27];
//let john = ages[0];
//let mary = ages[1];
//let joe = ages[2];
let [john, mary, joe] = ages;
console.log(john, mary, joe);
// Destructuring objects
let jobs = {
    mike: "Designer",
    jill: "Developer",
    alicia: "accountant",
};
let {mike, jill, alicia} = jobs;
console.log(mike, jill, alicia);
// Destructuring subsets
let languages = ["English", "French", "Spanish", "German", "Japanese"];
let [johnNative, johnSecondary] = languages;
console.log(johnNative, johnSecondary);

let[, , maryNative, marySecondary] = languages;
console.log(maryNative, marySecondary);

let languages2 = {
    firstLanguage: "English",
    secondLanguage: "French",
    thirdLanguage: "German",
    forthLanguage: "Japanese",
};

let {firstLanguage, thirdLanguage} = languages2;
console.log(firstLanguage, thirdLanguage);

// Using rest parameter syntax
let fruits = ["apple", "orange", "banana", "Peach", "cherry"];
let [favourite, secondFavourite, ...other] = fruits;
console.log(favourite);
console.log(secondFavourite);
console.log(other);

let favouriteFoods = {
    brian: "pizza",
    anna: "pasta",
    sarah: "vegitarian",
    andrea: "steak",
};

let {brian, anna, ...rest} = favouriteFoods;
console.log(brian);
console.log(anna);
console.log(rest);