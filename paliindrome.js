

//anonymous function
var pali = function () {
    function isPalindrome(word) {
        const firstHalf = word.slice(0, Math.ceil(word.length/2));
        const secondHalfReversed = word.slice(Math.floor(word.length/2)).split('').reverse().join('');
    
        return firstHalf === secondHalfReversed;
    }
    
    function getPalindromesFromArray(arr) {
        return arr.filter(isPalindrome);
    }
    
    const wordsArr = ['foo', 'racecar', 'pineapple', 'porcupine', 'pineenip'];
    
    console.log(getPalindromesFromArray(wordsArr));
    
}

pali();



//IIFE

(function () {
    function isPalindrome(word) {
        const firstHalf = word.slice(0, Math.ceil(word.length/2));
        const secondHalfReversed = word.slice(Math.floor(word.length/2)).split('').reverse().join('');
    
        return firstHalf === secondHalfReversed;
    }
    
    function getPalindromesFromArray(arr) {
        return arr.filter(isPalindrome);
    }
    
    const wordsArr = ['foo', 'racecar', 'pineapple', 'porcupine', 'pineenip'];
    
    console.log(getPalindromesFromArray(wordsArr));
    
}) ();



// arrow function
var palis = (str) => {function isPalindrome(word) {
    const firstHalf = word.slice(0, Math.ceil(word.length/2));
    const secondHalfReversed = word.slice(Math.floor(word.length/2)).split('').reverse().join('');

    return firstHalf === secondHalfReversed;
}

function getPalindromesFromArray(arr) {
    return arr.filter(isPalindrome);
}

const wordsArr = ['foo', 'racecar', 'pineapple', 'porcupine', 'pineenip'];

console.log(getPalindromesFromArray(wordsArr));
    
}

palis();
