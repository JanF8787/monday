console.log('Jan');

let a = 7;
if (a < 5) {
  console.log(a / 2);
} else {
  console.log(a * 2);
}

//---------------
let numbers = 10;

for(let i = 0; i <= numbers * 2; i++){
    console.log(i);
}

//                       FUNCTIONS:

// Exercise 1

let printNumbersTill = number => {
     for(let i = 1; i <= number; i++){
         console.log(i);
     }
};

console.log(printNumbersTill(15));

// Exercise 2

let getGreetingTo = name => {
    return console.log(`Hello ${name}!`);
};

console.log(getGreetingTo('Mark'));

//                    For loops and arrays

// Exercise 1

let printValues = array => {
    for(let i = 0; i < array.length; i++){
        console.log(array[i]);
    }
};

printValues([0, 3, 6, 7, 9]);

let myNumbers = [10, 20, 30, 50, 12];

myNumbers.forEach((number) => {
    console.log(number);
});

// Exercise 2

let printValues2 = [0, 3, 6, 7, 9];

printValues2.forEach((number2) => {
    console.log(number2);
});