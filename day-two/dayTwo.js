var fs = require('fs');
var input = fs.readFileSync("./input.txt", 'utf8');

var inputArray = input.split(/\r?\n/);

var validCount = 0;

// read each array item and validate (is number of letters in password within range)
inputArray.forEach(value => {
    const splitValue = value.split(' ');
    const record = {range: splitValue[0], letter: splitValue[1], password: splitValue[2]}
    // read each item and validate (is number of letters in password within range)
    const letterCount = record.password.split(record.letter[0]).length - 1;
    const lowerRange = record.range.split('-')[0]
    const upperRange = record.range.split('-')[1]

    if (lowerRange <= letterCount && upperRange >= letterCount){
        // if password is valid, add to counter
        validCount ++;
    }
});
console.log('Part One count: ', validCount);



var validCountPart2 = 0;

// read each array item and validate 
inputArray.forEach(value => {
    const splitValue = value.split(' ');
    const record = {positions: splitValue[0], letter: splitValue[1], password: splitValue[2]}
    // console.log(record);
    // read each item and validate (is either the first OR second number letter in the password populated by the letter given)
    const positionOne = record.positions.split('-')[0] - 1
    const positionTwo = record.positions.split('-')[1] - 1    

    if (record.letter[0] === record.password[positionOne] ){
       if (record.letter[0] !== record.password[positionTwo]){
            // if password is valid, add to counter
            validCountPart2 ++;
       }  
    }
    if (record.letter[0] === record.password[positionTwo] ){
        if (record.letter[0] !== record.password[positionOne]){
             // if password is valid, add to counter
             validCountPart2 ++;
        }  
     }
});
console.log('Part Two count: ', validCountPart2);




