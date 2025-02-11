//task2: Count how many times a string has the letter a or A

function countA(str){
    let count = 0;
    for(const char of str){
        if(char === 'a' || char === 'A'){
            count++;        
        }
    }
    return count;
}

console.log(countA('An avogado'));