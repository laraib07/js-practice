// switch (key) {
//     case value:

//         break;

//     default:
//         break;
// }

const month = "feb"

switch (month) {
    case "jan":
        console.log("January");
        break;
    case "feb":
        console.log("feb");
        break; // if break is removed and "feb" is matched,
        // it will execute everything till next break except default
    case "march":
        console.log("march");
        break;
    case "april":
        console.log("april");
        break;

    default:
        console.log("default case match");
        break;
}
