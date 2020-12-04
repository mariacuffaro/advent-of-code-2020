var fs = require('fs');

//read file
var input = fs.readFileSync("./input.txt", 'utf8');
//split lines into array of values
var inputArray = input.split(/\r?\n/);

// test only
// const inputArray = ['1000','2000','3000','1020','5000']

//Part 1 for each value add to all other values until you find two that sum to 2020
let i, j;
let sum;
for (i = 0; i < inputArray.length; i++) {
    for (j = i+1; j <inputArray.length; j++){
        sum = Number(inputArray[i]) + Number(inputArray[j]);
        if (sum === 2020) {break}
    }
    if (sum === 2020) {
        //multiply the two values together
        console.log('answer', Number(inputArray[i]) * Number(inputArray[j]) );
         break}
    }//for each value add to all other values until you find three that sum to 2020

//Part 2 for each value add to all other values until you find three that sum to 2020
let k;
for (i = 0; i < inputArray.length; i++) {
    for (j = i+1; j <inputArray.length; j++){
        for (k = j+1; k <inputArray.length; k++){
            sum = Number(inputArray[i]) + Number(inputArray[j]) + Number(inputArray[k]);
            if (sum === 2020) {break}
        }
        if (sum === 2020) {break}
    }
    if (sum === 2020) {
    //multiply the three values together
    console.log('answer', Number(inputArray[i]) * Number(inputArray[j]) * Number(inputArray[k]));
    break
    }       
}


    

