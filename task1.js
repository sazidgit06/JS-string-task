
// task1 : Count how many times a string has the letter a

/*
 *using for loop
    function countA(str){
        let count = 0;
        for(let char of str){
            if(char === 'a'){
                count++;
            }
        }
        return count;
    }

    console.log(countA('banana'));
*/

// using split and length

function countA (str){
    return str.split('a').length-1;
}

console.log(countA('banana and apple'));