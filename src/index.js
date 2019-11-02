// const checkLonger = (str1, str2) => {
//     // Deal with stupid users
//     // Create the function skeleton
//     // setup the arguments (2 strings)
//     // get and save the length of each string
//     // compare the length of the strings
//     // return the longest
//     if (typeof str1 !== "string" && typeof str2 !== "string") {
//         return "input a string"
//     }
//     if(str1.length === str2.length){
//         return "They are equal in length!"
//     }else if (str1.length > str2.length) {
//         return str1
//     } else {
//         return str2
//     }
// }

// console.log(checkLonger("Jimmy", "Jimmy"))

let everyoneInTheClass = ["Jimmy", "Gio", "Bill", "Michael", "Kevin"]
console.log(everyoneInTheClass.find((e) => e === "Bill"))
console.log(everyoneInTheClass.filter((e) => e.length < 7))

let numbers = [1,2,3,4,5,6,,7,45,45,13,51,3,413,41,234,12,35,3246,4,5634,613,5,134,5]
console.log("Greater than 10", numbers.filter((num) => num > 10))
console.log("All even numbers", numbers.filter((num) => num % 2 === 0))
console.log("All the odds", numbers.filter((num) => num % 2 !== 0))
console.log("> 10 && < 100", numbers.filter((num) => num > 10 && num < 100))