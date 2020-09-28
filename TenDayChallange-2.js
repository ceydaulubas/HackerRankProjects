'use strict';

process.stdin.resume();
process.stdin.setEncoding('utf-8');

let inputString = '';
let currentLine = 0;

process.stdin.on('data', inputStdin => {
    inputString += inputStdin;
});

process.stdin.on('end', _ => {
    inputString = inputString.trim().split('\n').map(string => {
        return string.trim();
    });
    
    main();    
});

function readLine() {
    return inputString[currentLine++];
}

function vowelsAndConsonants(s) {
    const vowel= ['a','e','i','o','u'];
    var consonant=[ ];

    for (let i=0; i< s.length; i++){
        if (vowel.includes(s[i])){ 
        console.log(s[i]);
        }
        else{
            consonant.push(s[i]);
        }
    }
    for (let i=0; i< consonant.length; i++){
        console.log(consonant[i]);
    }  
}


function main() {
    const s = readLine();
    
    vowelsAndConsonants(s);
}