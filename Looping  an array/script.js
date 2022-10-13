// Array

var num = [10,20,30,40,50,60];

console.log(num[0]);
console.log(num[1]);
console.log(num[2]);
console.log(num[3]);
console.log(num[4]);
console.log(num[5]);


// Looping an array

var num = [10,20,30,40,50,60];

   for(var i=0; i<6; i++){

    console.log(num[i]);
    
   }


// Summation using loop

var num = [10,20,30,40,50,60];

var sum = 0;

   for(var i=0; i<6; i++){

    console.log(num[i]);
    sum = sum + num[i];
   }

   console.log(sum);
   console.log("sum = " + sum);


// User inputed value

var sum = new Array();

   for(var i=0; i<5; i++){

    num[i] = parseInt(prompt("Enter a number : "));

   }

var sum = 0;

   for(var i=0; i<5; i++){

    console.log(num[i]);
    sum = sum + num[i];
   }

   console.log(sum);
   console.log("sum = " + sum);