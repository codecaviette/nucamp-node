// This is a module with two exports. Created module by moving parimeter and area object properties from app.js file

exports.perimeter = (x, y) => 2 * (x + y);              // Create module. Can use "module.exports" keyword from Node, or its shorthand version, "exports" keyword 
exports.area = (x,y) => (x * y);                        // "exports" keyword is followed by method name "perimeter" and "area"