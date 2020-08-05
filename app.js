
// Moved this JS to rectangle.js to make a node module and replaced with "require" keyword (see below)
// const rect = {
//     perimeter: (x, y) => 2 * (x + y),
//     area: (x, y) => x * y
// }

const rect = require('./rectangle');            // "require" keyword is from Node. What's inside the () tells code to go into the rectangle.js file within the same folder and import its exports to set as this rect object's properties/methods  

function solveRect(l, w) {
    console.log (`Solving for rectangle with dimentions: ${l}, ${w}`);              // Use template literal with backticks; this is a more concise way of a string

    if (l <= 0 || w <= 0) {
        console.log(`Rectangle dimensions must be greater than zero. Received: ${l}, ${w}`)
    } else {
        console.log(`Area of rectangle: ${rect.area(l,w)} `);
        console.log(`Perimeter of rectangle: ${rect.perimeter(l,w)}`);
    }
}

solveRect(2,4);
solveRect(3,5);
solveRect(0,5);
solveRect(5,-3);