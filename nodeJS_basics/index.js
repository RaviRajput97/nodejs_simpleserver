const square = require('./square.js');

const calsquare = (a) =>{
	console.log(`The value of a is ${a}. And the area is ` +square.area(a));
	console.log(`The value of a is ${a}. And the perimeter is ` +square.perimeter(a));
}

calsquare(5);

console.log(__filename);
console.log(__dirname);