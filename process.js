console.log(process.argv); // Things that can only be done in Node
// "process.argv" is an array , command line tool , Get arguments from command line
// To run -> node file_name 1000
// process.argv[0] -> Node installation location
// process.argv[1] -> File Location
// process.argv[2] -> Arguments

//------DOUBLE OF A NUMBER------
const dbl = (n) => n * 2;
console.log(dbl(10));

console.log(dbl(process.argv[2]));
//or
const [, , num] = process.argv;
console.log(dbl(num));

//------SUM OF TWO NUMBERS------
const [, , num1, num2] = process.argv;
console.log(+num1 + +num2);

//------COVERTION OF CELCIUS TO FARENHEIT------
const [, , Num1] = process.argv;
function convertion(celcius) {
  return `${celcius * (9 / 5) + 32}°F`;
}
console.log(convertion(+Num1));
