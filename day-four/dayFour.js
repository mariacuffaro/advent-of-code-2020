// read in passports
var fs = require('fs');
var input = fs.readFileSync("./input.txt", 'utf8');
// var input = fs.readFileSync("./testInvalidInput.txt", 'utf8');
// var input = fs.readFileSync("./testInput.txt", 'utf8');

//create an array of rows
var passports = input.split(/\r?\n{2,}/);

// create valid counter
let validCount = 0;

const makePasswordObject = (passportString) => { 
    // reformat into json string
    const strWithoutLineBreaks = passportString.replace(/\r?\n|\r/g,' ');
    const array = strWithoutLineBreaks.split(' ');
    keyValuePairs = array.map(v => v.split(':'));
    let objectString = '{ ';
    keyValuePairs.forEach(keyValPair => {
        objectString = `${objectString} "${keyValPair[0]}": "${keyValPair[1]}",`;
    });
    objectString = objectString.substr(0, objectString.length-1)
    objectString = `${objectString} }`;
    passportObject = JSON.parse(objectString);

    return passportObject
 };
 
 const validYear = (year, min, max) =>{
    if (year.length === 4 && year >= min && year <= max){
        return true
    }else{return false}
 }
 
//  console.log('validTest?',validYear('2010', '2011', '2012'));
 
 const validUoM = ['cm', 'in'];
 const validHeight = (height) =>{
    const hgtValue = height.substr(0, height.length-2);
    const hgtUoM = (height.substr(height.length-2, height.length));
    const isValidUoM = validUoM.includes(hgtUoM);
    
    if (isValidUoM && hgtUoM === 'cm' && hgtValue >=150 && hgtValue<=193){
        return true
    }else if(isValidUoM && hgtUoM === 'in' && hgtValue >=59 && hgtValue <=76){
        return true
    }else{
        return false
    }
 }
//  console.log('validHeight 150cm?',validHeight('150cm'));
//  console.log('validHeight 193cm?',validHeight('193cm'));
//  console.log('validHeight 149cm?',validHeight('149cm'));
//  console.log('validHeight 194cm?',validHeight('194cm'));
//  console.log('validHeight 59in?',validHeight('59in'));
//  console.log('validHeight 76in?',validHeight('76in'));
//  console.log('validHeight 58in?',validHeight('58in'));
//  console.log('validHeight 77in?',validHeight('77in'));
//  console.log('validHeight 76?',validHeight('76'));
//  console.log('validHeight 76im?',validHeight('76im'));


// hcl (Hair Color) - a # followed by exactly six characters 0-9 or a-f.
const validHair = (colour) => {
    if (colour.length !== 7){return false}

    const firstChar = colour.substr(0,1)
    const restOfChars = colour.substr(1,7)

    if (firstChar === '#' && restOfChars.match("^[a-zA-Z0-9]*$")){
        return true
    }else{ 
        return false 
    }
}
// console.log('validHair #123456?',validHair('#123456'));
// console.log('validHair #12345?',validHair('#12345'));
// console.log('validHair #1234567?',validHair('#1234567'));
// console.log('validHair 1234567?',validHair('1234567'));

const validatePassport = (passport) => { 
    let isValid = false
    const { eyr, ecl, pid, hgt, iyr, byr, hcl} = passport
    
    // byr (Birth Year) - four digits; at least 1920 and at most 2002.
    if (byr && validYear(byr, '1920', '2002')) {
        isValid = true
    }else{isValid = false}

    // iyr (Issue Year) - four digits; at least 2010 and at most 2020.
    if (isValid && iyr && validYear(iyr, '2010', '2020')){
        isValid = true
    }else{isValid = false}

    // eyr (Expiration Year) - four digits; at least 2020 and at most 2030.
    if (isValid && eyr && validYear(eyr, '2020', '2030')){
        isValid = true
    }else{isValid = false}

    if (isValid && hgt && validHeight(hgt)){
        isValid = true
    }else{isValid = false}

    // hcl (Hair Color) - a # followed by exactly six characters 0-9 or a-f.
    if(isValid && hcl  && validHair(hcl)){
        isValid = true
    }else{isValid = false}

    // ecl (Eye Color) - exactly one of: amb blu brn gry grn hzl oth.
    const validEyeColours = ['amb', 'blu', 'brn', 'gry', 'grn', 'hzl', 'oth']
    if (isValid && ecl && validEyeColours.includes(ecl)){
        isValid = true
    }else{isValid = false}

    // pid (Passport ID) - a nine-digit number, including leading zeroes.
    if (isValid && pid && pid.length === 9 && pid.match("^[0-9]*$")){
        isValid = true
    }else{isValid = false}

    return isValid
 };

passports.forEach(passport => {
    const passportObject = makePasswordObject(passport);
    const isValid = validatePassport(passportObject);
    if (isValid) {validCount ++}
});
console.log('validCount', validCount);
