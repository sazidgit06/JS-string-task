// If a given string has either x, replace x by y. if the given string has X, replace it by Y.

function checkInput(str){
    return str.replace('x','y').replace('X','Y');
}

let inputString = "Hint: You should be able to check whether x or X exists. After that, search online how to replace a character in a string.";
console.log(checkInput(inputString));