//OBJECT TYPES (collections of values)

// Object
console.log(typeof { name: "Alice", age: 30 }); // "object"
// A collection of key-value pairs.


// Array (which is a special kind of object)
console.log(typeof [1, 2, 3]); // "object"
console.log(Array.isArray([1, 2, 3])); // true
// Ordered list of values.


// Function (a callable object)
console.log(typeof function() {}); // "function"
// Functions are a special type of object that can be invoked.


// Date (a built-in object type)
console.log(typeof new Date()); // "object"
// Represents dates and times.


// RegExp (Regular Expression)
console.log(typeof /abc/); // "object"
// Used for pattern matching in strings.

