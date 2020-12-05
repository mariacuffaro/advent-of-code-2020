// read boarding passes
var fs = require('fs');
var input = fs.readFileSync("./input.txt", 'utf8');
//create an array of rows
var boardingPasses = input.split(/\r?\n/);
var seatIDs = [];

const findRow = (boardingPass) => {

    let passDigits = boardingPass.split('');
    let minRange = 0
    let maxRange = 127
    let range = maxRange-minRange

    passDigits[0] === 'F' ? maxRange = Math.floor(maxRange/2) : minRange = Math.floor(maxRange/2)+1
    range = maxRange-minRange

    let i
    for (i = 1; i < 7; i++) {
       if (passDigits[i] === 'F'){
            maxRange = Math.floor(maxRange-range/2)
        }else{
            minRange = Math.floor(maxRange-range/2)+1
        }
        range = maxRange-minRange
    }
    return minRange

};
const findColumn = (boardingPass) => {
    let passDigits = boardingPass.split('');
    let minRange = 0
    let maxRange = 7
    let range = maxRange-minRange

    passDigits[7] === 'L' ? maxRange = Math.floor(maxRange/2) : minRange = Math.floor(maxRange/2)+1
    range = maxRange-minRange

    let i
    for (i = 8; i < 10; i++) {
       if (passDigits[i] === 'L'){
            maxRange = Math.floor(maxRange-range/2)
        }else{
            minRange = Math.floor(maxRange-range/2)+1
        }
        range = maxRange-minRange
    }
    return minRange
};
boardingPasses.forEach(boardingPass => {
    const row = findRow(boardingPass);
    const column = findColumn(boardingPass);
    const seatID = (row * 8)+column
    seatIDs.push(seatID);
});
console.log(Math.max(...seatIDs));

const sortedIDs = seatIDs.sort((a,b)=>(a-b));
console.log(sortedIDs);
let missing

currentId = 84;
for (i = 0; i < sortedIDs.length; i++) {
    if (sortedIDs[i] !== i + 84){
        missing = sortedIDs[i]
        break}
};
  console.log('missing', missing)