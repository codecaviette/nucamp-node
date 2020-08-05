
// Moved this JS to rectangle.js to make a node module and replaced with "require" keyword (see below)
// const rect = {
//     perimeter: (x, y) => 2 * (x + y),
//     area: (x, y) => x * y
// }

const rect = require('./rectangle');            // "require" keyword is from Node. What's inside the () tells code to go into the rectangle.js file within the same folder and import its exports; now that the rectangle.js module is a function, const rect will also be a function (whereas it was previously an object)   

function solveRect(l, w) {
    console.log (`Solving for rectangle with dimentions: ${l}, ${w}`);              // Use template literal with backticks; this is a more concise way of a string

    rect(l, w, (err, rectangle) => {
        if (err) {
            console.log('ERROR:', err.message);
        } else {
            console.log(`Area of rectangle with dimensions ${l}, ${w} is: ${rectangle.area()} `);
            console.log(`Perimeter of rectangle with dimensions ${l}, ${w} is: ${rectangle.perimeter()}`);
        }
    });
    console.log(`This statemnet is logged after the call to rect()`);
}

solveRect(2,4);
solveRect(3,5);
solveRect(0,5);
solveRect(5,-3);