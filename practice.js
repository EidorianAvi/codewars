const wordlist = ['APPLE', 'PLEAS', 'PLEASE'] 
const keypads = ['AELWXYZ', 'AELPXYZ', 'AELPSXY', 'SAELPRT', 'XAEBKSY'] 


//Expected output: [0, 1, 3, 2, 0] 

//The problem is we are trying to see how many words from the WORDLIST can be a possible solution for each KEYPAD. 

//The first letter in the keypad has to be part of the solution. Letters can be reused. It will return an array of in order of keypad as to how many of the provided words would be a possibility on that keypad. 

const solve = (wordlist, keypads) => {
    let keypadLetters = keypads.map(keypad => keypad.split(''));
    let wordlistLetters = wordlist.map(word => word.split(''));    
    let possibleWordsPerKeypad = [];

    for(let i = 0; i < keypadLetters.length; i++){
        let possibleWords = 0;

        for(let j = 0; j < wordlist.length; j++){
            if(wordlistLetters[j].every(letter => keypadLetters[i].includes(letter))){
                possibleWords++;
                if(!wordlist[j].includes(keypadLetters[i][0])){
                    possibleWords--;
                }
            }
        }

        possibleWordsPerKeypad.push(possibleWords);

    }

    console.log(possibleWordsPerKeypad);

}

solve(wordlist, keypads);

// let checker = (arr, target) => target.every(v => arr.includes(v));