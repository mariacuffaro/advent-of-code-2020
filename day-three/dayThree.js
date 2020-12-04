//read input
var fs = require('fs');
var input = fs.readFileSync("./input.txt", 'utf8');
// var input = fs.readFileSync("./testInput.txt", 'utf8');

//create an array of rows
var inputArray = input.split(/\r?\n/);

// Part 1
let treeCounter = 0;
//read item in position 0 of first row
let i, j = 0;
arrayWidth = inputArray[0].length
// console.log('length of row: ',arrayWidth);

for (i = 0; i < inputArray.length; i++) { 
    //if row number > array length read record at mod of row number / row length
    j = (3*i) % arrayWidth
    // console.log('value: ',inputArray[i][j]);
    
    //if tree (#) add to tree counter
    if (inputArray[i][j] === '#'){
        treeCounter ++;
        
    }
}
console.log('Number of trees Part 1: ', treeCounter);

// Part 2
// turn part 1 into a function

const treesOnRoute = (right, down) => {
    let treeCounter = 0;
    let i, j = 0;
    arrayWidth = inputArray[0].length

    for (i = 0; i < inputArray.length; i++) { 
        if (i%down === 0) {
            j = (right*i/down) % arrayWidth
            if (inputArray[i][j] === '#'){
                treeCounter ++; 
        }
    }
}
return treeCounter;
}

let slope2 = treesOnRoute(3,1)
let slope1 = treesOnRoute(1,1)
let slope3 = treesOnRoute(5,1)
let slope4 = treesOnRoute(7,1)
let slope5 = treesOnRoute(1,2)
console.log('product: ', slope1*slope2*slope3*slope4*slope5);

