// Immediately Invoked Function Expressions (IIFE)
// Used to avoid global scope pollution


(function chai(){
    // named IIFE
    console.log(`DB CONNECTED`);
})(); // if ; removed, below function will throw TypeError
// It is beacuse IIFE doesn't know where to stop context.

( (name) => {
    console.log(`DB CONNECTED TWO ${name}`);
} )('hitesh')
