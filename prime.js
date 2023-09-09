//anonymous function
var Prime= function (num) {
  let numArray = [];
    for (let i = 1; i <= num; i++) {
      numArray.push(i);
    }
  
         
    numArray.map((number) => {
      for (let i = 2; i < number; i++) {
          if(number % i === 0) {
              let index = numArray.indexOf(number);
              return numArray.splice(index, 1);       
          }
      }   
    });
  
   console.log(numArray);
  
}
Prime(20); 


//IIFE

(function (num) {
  let numArray = [];
    for (let i = 1; i <= num; i++) {
      numArray.push(i);
    }
  
         
    numArray.map((number) => {
      for (let i = 2; i < number; i++) {
          if(number % i === 0) {
              let index = numArray.indexOf(number);
              return numArray.splice(index, 1);       
          }
      }   
    });
  
   console.log(numArray);
  
}) (20);

// arrow function
var Primes = (num) => {
  let numArray = [];
    for (let i = 1; i <= num; i++) {
      numArray.push(i);
    }
  
         
    numArray.map((number) => {
      for (let i = 2; i < number; i++) {
          if(number % i === 0) {
              let index = numArray.indexOf(number);
              return numArray.splice(index, 1);       
          }
      }   
    });
  
   console.log(numArray);
  
}

Primes(20); 
