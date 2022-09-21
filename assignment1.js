// program to check leap year
function checkLeapYear(year) {

    //three conditions to find out the leap year
    if ((0 == year % 4) && (0 != year % 100) || (0 == year % 400)) {
        console.log(year + ' is a leap year');
    } else {
        console.log(year + ' is not a leap year');
    }
}

// take input
// const year = prompt('Enter a year:');

checkLeapYear(2022);

// answer = 2022 is not a leap year




// convert temperatures to and from Celsius to Fahrenheit


const caltemp = function(){

    // enter tem here
    const temp  = 60;

    const cl = (temp * (9/5)+32);

    console.log(` ${temp}°C is ${cl} °F`);
}

caltemp();




// factorial of a number


let fact= 1;

const findFactorial = function (){

    const number = 6 ;
    
    for (let i = 1 ; i<=number ; i++){

        fact = fact*i;
    }

    console.log(`Factorial of ${number} is : ${fact}`);
}

findFactorial();