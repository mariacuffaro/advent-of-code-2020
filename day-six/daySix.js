// read in passports
var fs = require('fs');
var input = fs.readFileSync("./input.txt", 'utf8');

//create an array of rows
var groupAnswers = input.split(/\r?\n{2,}/);

const uniqueValues = (string) =>{
    const array = string.split('')
    let unique = []

    array.forEach(letter => {
        if (!unique.includes(letter)) {
            unique.push(letter)
        }
    });

    return unique.join().replace(/\r?,|\r/g,'')
}

// console.log('test unique', uniqueValues('aaabs'));
let groups = []
let uniqueAnswers = [];

groupAnswers.forEach(group => {
    groups.push(group.split('\n'));
    uniqueAnswers.push(uniqueValues(group).replace(/\r?\n|\r/g, '')); 
});

let partOneCount = 0;
let partTwoCount = 0;
let i = 0

uniqueAnswers.forEach(group => {
    partOneCount += group.length
    const currentGroup = groups[i]
    const numberInGroup =  currentGroup.length
    const answers = group.split('')

    answers.forEach(answer => {
        let answerCount = 0
        currentGroup.forEach(personInGroup =>{
            if (personInGroup.includes(answer)){
                answerCount++
            }
        })
        if (answerCount === numberInGroup){
            partTwoCount ++
        }
    })
i ++
});
console.log(partOneCount);
console.log(partTwoCount);

