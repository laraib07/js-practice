const user = {
    username: "hitesh",
    price: 999,

    welcomeMessage: function() {
        console.log(`${this.username} , welcome to website`);
        console.log(this); // refers to current object
    }

}

// user.welcomeMessage()
// user.username = "sam"
// user.welcomeMessage()

// console.log(this); // refers to global context: {} in node and window object in browser

// function chai(){
//     let username = "hitesh"
//     console.log(this); // print function context related stuffs
//     console.log(this.username); // undefined: doesn't work in functions
// }

// chai()

// const chai = function () {
//     let username = "hitesh"
//     console.log(this.username); // undefined: doesn't work in function
// }


// Arrow function
const chai =  () => {
    let username = "hitesh"
    console.log(this); // {}
}


// chai()

// const addTwo = (num1, num2) => {
//     return num1 + num2
// }

// Arrow function with implicit return
// const addTwo = (num1, num2) =>  num1 + num2

// const addTwo = (num1, num2) => ( num1 + num2 )

// Cannot return object this way because curly braces starts a new
// local scope. It will no longer be an arrow function with implicit
// return.
// const addTwo = (num1, num2) => {username: "hitesh"}

// To return an object implicitly, wrap it withing parenthesis
const addTwo = (num1, num2) => ({username: "hitesh"})


console.log(addTwo(3, 4))


// const myArray = [2, 5, 3, 7, 8]

// myArray.forEach()
