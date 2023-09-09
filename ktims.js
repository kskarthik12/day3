
  //anonymous function
var rotateArray = function (arr, k) {
  for (let i = 0; i < k; i++) {
    const temp = arr[arr.length - 1];
    arr.pop();
    arr.unshift(temp);
  }
  console.log(arr);
 
}

rotateArray([1,2,3,4,5],3);




//IIFE

(function (arr, k) {
  for (let i = 0; i < k; i++) {
    const temp = arr[arr.length - 1];
    arr.pop();
    arr.unshift(temp);
  }
  console.log(arr);
  
}) ([1,2,3,4,5],3);