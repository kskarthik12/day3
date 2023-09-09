//anonymous function
var sum = function (arr) {
    var t = 0;
    for (let i = 0; i < arr.length; i++) {
        t = t + i;
    }
    console.log(t);
}

sum([1, 2, 3, 4, 5]);

//IIFE

(function (arr) {
    var t = 0;
    for (let i = 0; i < arr.length; i++) {
        t = t + i;
    }
    console.log(t);
})([1, 2, 3, 4, 5]);

// arrow function
var sums = (arr) => {
    var t = 0;
    for (let i = 0; i < arr.length; i++) {
        t = t + i;
    }
    console.log(t);
}
sums([1, 2, 3, 4, 5]);
