//anonymous function
var odd = function (arr) {
    for (let i = 0; i < arr.length; i++) {
        if (arr[i] % 2 == 1) {
            console.log(arr[i])
        }
    }
}

odd([1, 2, 3, 4, 5]);

//IIFE

(function (arr) {
    for (let i = 0; i < arr.length; i++) {
        if (arr[i] % 2 == 1) {
            console.log(arr[i])
        }
    }
})([1, 2, 3, 4, 5]);

// arrow function
var odds = (arr) => {
    for (let i = 0; i < arr.length; i++) {
        if (arr[i] % 2 == 1) {
            console.log(arr[i])
        }
    }
}
odds([1, 2, 3, 4, 5]);
