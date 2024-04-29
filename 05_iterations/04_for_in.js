const myObject = {
    [Symbol('kt')]: 'Kotlin',
    js: 'javascript',
    cpp: 'C++',
    rb: "ruby",
    swift: "swift by apple"
}

// Note: it cannot iterate over the symbol key
for (const key in myObject) {
    //console.log(`${key} shortcut is for ${myObject[key]}`);
}

const programming = ["js", "rb", "py", "java", "cpp"]

for (let key in programming) {
  // console.log(key); // give index/keys
  // console.log(typeof key); // string
    // console.log(programming[key]);
}

// const map = new Map()
// map.set('IN', "India")
// map.set('USA', "United States of America")
// map.set('Fr', "France")
// map.set('IN', "India")

// for (const key in map) {
//     console.log(key);
// } // map is not iteratable hence output will be nothing


/*
- []q Do a deeper dive in for_in vs for_of loop
*/
