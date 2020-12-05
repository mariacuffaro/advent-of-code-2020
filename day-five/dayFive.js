// read boarding passes
var fs = require('fs');
var input = fs.readFileSync("./input.txt", 'utf8');
//create an array of rows
var boardingPasses = input.split(/\r?\n/);


const binarySplit = (input,maxRange,lowerHalfLetter) => {
    let minRange = 0
    let range = maxRange-minRange
    
    let i
    for (i = 0; i < input.length; i++) {
       if (input[i] === lowerHalfLetter){
            maxRange = Math.floor(maxRange-range/2)
        }else{
            minRange = Math.floor(maxRange-range/2)+1
        }
        range = maxRange-minRange
    }
    return minRange
};

const findRow = (boardingPass) => {
    let rowLetters = boardingPass.substr(0,7)
    let rowDigits = rowLetters.split('');
    return binarySplit(rowDigits,127,'F')
};

const findColumn = (boardingPass) => {
    let columnLetters = boardingPass.substr(7,3)
    let columnDigits = columnLetters.split('');
    return binarySplit(columnDigits,7,'L')
};

//Part One
var seatIDs = [];

boardingPasses.forEach(boardingPass => {
    const row = findRow(boardingPass);
    const column = findColumn(boardingPass);
    const seatID = (row * 8)+column
    seatIDs.push(seatID);
});
console.log(Math.max(...seatIDs));

//Part Two
const sortedIDs = seatIDs.sort((a,b)=>(a-b));
let missing

for (i = 0; i < sortedIDs.length; i++) {
    if (sortedIDs[i] !== i + sortedIDs[0]){
        missing = sortedIDs[i]
        break
    }
};
console.log('missing', missing)