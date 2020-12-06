// read in passports
var fs = require('fs');
var input = fs.readFileSync("./input.txt", 'utf8');
// var input = fs.readFileSync("./testInvalidInput.txt", 'utf8');
// var input = fs.readFileSync("./testInput.txt", 'utf8');
//create an array of rows
var groupAnswers = input.split(/\r?\n{2,}/);
// console.log('groupanswers', groupAnswers);


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
let groupArrays = []

let withoutDuplicates = [];
groupAnswers.forEach(group => {
    // console.log('here', group);
    // console.log('group', group);

    groupArrays.push(group.split('\n'));

    const removeDuplicates = uniqueValues(group)
    withoutDuplicates.push(removeDuplicates.replace(/\r?\n|\r/g, '')); 

});



let count = 0;
let i = 0
withoutDuplicates.forEach(group => {
    console.log('group', group);
    console.log('group array', groupArrays[i]);
    let numberInGroup =  groupArrays[i].length
    console.log('numberInGroup', numberInGroup);

    const answers = group.split('')
    const currentGroup = groupArrays[i]
    answers.forEach(answer => {
        console.log('answer', answer);
        let answerCount = 0
        currentGroup.forEach(personInGroup =>{
            console.log('person', personInGroup);
            if (personInGroup.includes(answer)){
                answerCount++
            }
        })
        console.log('answerCount', answerCount);

        if (answerCount === numberInGroup){
            count ++
        }
    })
    console.log('count', count);

    
// console.log('group', group);
i ++
});
console.log(count);

//part 2
// You don't need to identify the questions to which anyone answered "yes"; you need to identify the questions to which everyone answered "yes"!
// In the first group, everyone (all 1 person) answered "yes" to 3 questions: a, b, and c.

// In the second group, there is no question to which everyone answered "yes".
// In the third group, everyone answered yes to only 1 question, a. Since some people did not answer "yes" to b or c, they don't count.
// In the fourth group, everyone answered yes to only 1 question, a.
// In the fifth group, everyone (all 1 person) answered "yes" to 1 question, b.

//for each group
//if number in group = 1 questions all answered yes to = length of group 
let questionCount = 0
// for
