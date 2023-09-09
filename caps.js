//anonymous function
var cap = function (str) {
    str = str.toLowerCase().split(' ');
    for (let i = 0; i < str.length; i++) {
        str[i] = str[i].charAt(0).toUpperCase() + str[i].slice(1);

    }
    console.log(str.join(" "));
}

cap('i am karthik');

//IIFE

(function (str) {
    str = str.toLowerCase().split(' ');
    for (let i = 0; i < str.length; i++) {
        str[i] = str[i].charAt(0).toUpperCase() + str[i].slice(1);

    }
    console.log(str.join(" "));
}) ('i am karthik');

// arrow function
var caps = (str) => {
    str = str.toLowerCase().split(' ');
    for (let i = 0; i < str.length; i++) {
        str[i] = str[i].charAt(0).toUpperCase() + str[i].slice(1);

    }
    console.log(str.join(" "));
}

caps('i am karthik');
