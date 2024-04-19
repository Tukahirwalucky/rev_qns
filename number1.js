//Write a JavaScript function that reverses a number. Example x = 32243;

//Reversing a number:
function reverseNumber(num) {
    return parseInt(num.toString().split('').reverse().join(''));
}

const reversed = reverseNumber(32243);
console.log(reversed)