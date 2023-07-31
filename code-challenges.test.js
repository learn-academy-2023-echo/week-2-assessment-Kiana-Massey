// ASSESSMENT 2: Coding Practical Questions with Jest

// Please read all questions thoroughly
// Pseudo coding is REQUIRED
// If you get stuck, leave comments to help us understand your thought process

// Use test driven development to complete the following questions
// Add appropriate dependencies: $ yarn add jest

// Reminder: The test will call your function
// Run the file with the following command: $ yarn jest

// --------------------INSTRUCTOR EXAMPLE: Create a function that takes in an array of numbers and returns an array with all the numbers multiplied by 3.

// a) Create a test with expect statements for each of the variables provided.

const numbersArray1 = [6, 7, 8, 9, 10]
// Expected output: [18, 21, 24, 27, 30]
const numbersArray2 = [24, 27, 30, 33, 36]
// Expected output: [72, 81, 90, 99, 108]

// b) Create the function that makes the test pass.

// Pseudo code:

// --------------------1) Create a function that takes a object as an argument and decides if the number inside it is evenly divisible by three or not.

// a) Create a test with expect statements for each of the variables provided.

const object1 = { number: 15 }
// Expected output: "15 is divisible by three"
const object2 = { number: 0 }
// Expected output: "0 is divisible by three"
const object3 = { number: -7 }
// Expected output: "-7 is not divisible by three"

        describe("divByThree", () => {
            it("if the number inside it is evenly divisible by 3 or not", () => {
                const object1 = { number: 15 }
                    expect(divByThree(object1)).toEqual("15 is divisible by 3")
                const object2 = { number: 0 }
                    expect(divByThree(object2)).toEqual("0 is divisible by 3")
                const object3 = { number: -7 }
                    expect(divByThree(object3)).toEqual("-7 is not divisible by 3")
            })
        })
//ReferenceError: divByThree is not defined

// b) Create the function that makes the test pass.

// Pseudo code:
// declare a function with the varible of divByThree, add in a object parameter.
// write a conditional that will determine output values on if the value number is % 3 === 0 or not.
// if the value is % 3 === 0, return "is divisible by 3"
// if the value is not % 3 === 0, return "is not divisible by 3"

        const divByThree = (object) => {
            if (object.number % 3 === 0) {
                return `${object.number} is divisible by 3`
            } 
            else {
                return `${object.number} is not divisible by 3`
            }
        }
//Test Suites: 1 passed, 1 total
//Tests:       1 passed, 1 total





// --------------------2) Create a function that takes in an array of words and returns an array with all the words capitalized.

// a) Create a test with expect statements for each of the variables provided.

const randomNouns1 = ["streetlamp", "potato", "teeth", "conclusion", "nephew"]
// Expected output: ["Streetlamp", "Potato", "Teeth", "Conclusion", "Nephew"]
const randomNouns2 = ["temperature", "database", "chopsticks", "mango"]
// Expected output: ["Temperature", "Database", "Chopsticks", "Mango"]

        describe("capWords", () => {
            it("take in an array of words and returns an array with all the words capitalized", () => {
                const randomNouns1 = ["streetlamp", "potato", "teeth", "conclusion", "nephew"]
                    expect(capWords(randomNouns1)).toEqual(["Streetlamp", "Potato", "Teeth", "Conclusion", "Nephew"])
                const randomNouns2 = ["temperature", "database", "chopsticks", "mango"]
                    expect(capWords(randomNouns2)).toEqual(["Temperature", "Database", "Chopsticks", "Mango"])
            })
        })

//ReferenceError: capWords is not defined

// b) Create the function that makes the test pass.

// Pseudo code:
// create a function, use array as a parameter
// use .map to iterate through the array and select the 1st letter of each value. 
// use .toUpperCase to uppercase the selected 1st letters of each value through .map
// use .slice for a given start of the rest of the value letters and use .toLowerCase to keep the remaining letters in the values lowercase

        const capWords = (array) => {
            return array.map((value) => value[0].toUpperCase() + value.slice(1).toLowerCase())
        }

//Test Suites: 1 passed, 1 total
//Tests:       1 passed, 1 total



// --------------------3) Create a function that takes in a string and logs the index of the first vowel.

// a) Create a test with expect statements for each of the variables provided.

const vowelTester1 = "learn"
// Expected output: 1
const vowelTester2 = "academy"
// Expected output: 0
const vowelTester3 = "challenges"
// Expected output: 2

        describe("firstVowelIndex", () => { 
            it("takes in a string and logs the index of the first vowel", () => {
                const vowelTester1 = "learn"
                    expect(firstVowelIndex(vowelTester1)).toEqual(1)
                const vowelTester2 = "academy"
                    expect(firstVowelIndex(vowelTester2)).toEqual(0)
                const vowelTester3 = "challenges"
                    expect(firstVowelIndex(vowelTester3)).toEqual(2)
            })
        })

//ReferenceError: firstVowel is not defined

// b) Create the function that makes the test pass.

// Pseudo code:
// declare a function, use string within the parameter
// assign the vowels "aeiou" in uppercase and lowercase form into a variable
// use a for loop to iterate through the string to pull the vowels and return the index


        const firstVowelIndex = (str) => {
            let vowels = "aeiouAEIOU"
            for (let i = 0; i < str.length; i++) {
                if (vowels.includes(str[i])) {
                    return i
                }
            }
        }

// Test Suites: 1 passed, 1 total
// Tests:       1 passed, 1 total