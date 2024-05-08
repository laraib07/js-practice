//var c = 300
// let a = 300
if (true) {
    let a = 10
    const b = 20
    var c = 30
    // console.log("INNER: ", a);

}

if(true) {
  if(true) {
    if(true) {
      var d = 100;
    }
  }
}
// console.log(d); // 100


// console.log(a); // Reference Error
// console.log(b); // Reference Error
// console.log(c); // 30 as scope of var is parent scope


function one(){
    const username = "hitesh"

    function two(){
        const website = "youtube"
        console.log(username);
    }
    // console.log(website); // ReferenceError

     two()

}

// one()

if (true) {
    const username = "hitesh"
    if (username === "hitesh") {
        const website = " youtube"
        // console.log(username + website);
    }
    // console.log(website);  // ReferenceError
}

// console.log(username); // ReferenceError


// ++++++++++++++++++ interesting ++++++++++++++++++


console.log(addone(5))

function addone(num){
    return num + 1
}



addTwo(5) // ReferenceError: Can't access this type of function before initialization
const addTwo = function(num){
    return num + 2
}

/*
What is hoisting? Explain in detail!

*/
