// This is a Node module
// "exports" keyword is shorthand for "module.exports" and can be used when defining methods on the export like we did previously
// However, here we're assigning a function to the ENTIRE export, rather than methods to be exported, so must use modeule.export


module.exports = (x, y, callback) => {                 // module.exports function has 3 params (x, y, callback)
    // First, check for errors; if there are any, execute callback function (3rd param in module.exports) and give it the Error object as its first param
    if (x <= 0 || y <= 0) {                               
        callback(new Error(`Rectangle dimensions must be greater than zero. Received: ${x}, ${y}`));                 // It's best practice to set callback fxn's first argument as the Error object. Error object is a global object in JS that contains info about an error   
    // If no errors, simulate a delay then call same callback function but with null as first argument and 2nd argument is an object computing perimeter and area 
    } else {
        setTimeout(() =>
            callback(null, {
                perimeter: () => 2 * (x + y),             
                area: () => (x * y),
            }),
            2000
        )
    }
};

