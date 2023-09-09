
//anonymous function
var median = function (arr1,arr2) {
    var arr3=arr1.concat(arr2);
     arr3=arr3.sort(function(a, b){return a-b});
     
     let mid=Math.floor(arr3.length/2);
     let result=arr3.length % 2 !== 0 ? arr3[mid] : (arr3[mid - 1] + arr3[mid]) / 2;
     console.log(result);
}

median([1,2,6],[3,4,5]);




//IIFE

(function (arr1,arr2) {
    var arr3=arr1.concat(arr2);
     arr3=arr3.sort(function(a, b){return a-b});
     
     let mid=Math.floor(arr3.length/2);
     let result=arr3.length % 2 !== 0 ? arr3[mid] : (arr3[mid - 1] + arr3[mid]) / 2;
     console.log(result);
}) ([1,2,6],[3,4,5]);



