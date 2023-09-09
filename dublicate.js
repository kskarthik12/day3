//anonymous function
var dublicate = function (chars) {
    let uniqueChars = chars.filter((element, index) => {
        return chars.indexOf(element) === index;
    });
    
    console.log(uniqueChars);
    
}

dublicate(['A', 'B', 'A', 'C', 'B']);

//IIFE

(function (chars) {
    let uniqueChars = chars.filter((element, index) => {
        return chars.indexOf(element) === index;
    });
    
    console.log(uniqueChars);
    
}) (['A', 'B', 'A', 'C', 'B']);






