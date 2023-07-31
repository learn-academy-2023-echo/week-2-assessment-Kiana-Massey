// ASSESSMENT 2: Coding Conceptual Questions

// Examine the following examples.

// First, predict the outcome based on your understanding of the code.
// Then, uncomment the console.log() and verify the output. Briefly explain why your initial answer was correct or incorrect.

// --------------------1) What will this log?

const cohort = "Echo 2023"
//console.log(cohort.split(""))

// a) Your answer: it will take each character in the string, separate them individually, and convert it into an array after execution.
// b) Verify and explain: correct, the .split("") built in method with closed quotations marks splits the string within the variable into individual characters, then converts it into an array.

// --------------------2) What will this log?

const greeter = (name) => {
  `Hello, ${name}!`
}
//console.log(greeter("LEARN Student"))

// a) Your answer: Output will be undefined
// b) Verify and explain: correct, there is no return for the function to invoke a output.

// --------------------3) What will this log?

const multipliedByTwo = [4, 5, 6, 7, 8].map((number) => number * 2)
//console.log(multipliedByTwo)

// a) Your answer: [8, 10, 12, 14, 16]
// b) Verify and explain: correct. the map() method iterates through the array and creates a new array from the function without changing the original array. the function will take the values within the array and multiple the value number by 2.

// --------------------4) What will this log?

const onlyOdds = [11, 12, 13, 14, 15].filter((number) => number % 2 !== 0)
//console.log(onlyOdds)

// a) Your answer:[11, 13, 15]
// b) Verify and explain: correct. the .filter method will iterate through the array and return the values that meet the condition stated. number % 2 !== 0 will evaluate to true if the variable is NOT divisible by 2, giving you odd numbers in return.

// --------------------5) What will this log?

const myCodingSkills = {
  languages: ["JavaScript", "Ruby"],
  frameworks: ["React", "Ruby on Rails"],
  databases: "PostgreSQL",
  versionControl: "GitHub"
}
//console.log(myCodingSkills.languages[0])

// a) Your answer: JavaScript
// b) Verify and explain: correct. we are accessing the values from the object "myCodingSkills" with dot notation. Calling the object variable with the key "languages" and indexing [0] within the key. Index starts at zero, not one, so the zero index within the key "languages", is "Javascript".

// --------------------STRETCH: What will this log?

class Learn {
  constructor(name) {
    this.student = name
    this.cohort = "Echo"
    this.year = 2023
  }
}
const learnStudent = new Learn("George")
//console.log(learnStudent)

// a) Your answer: "George", "Echo", "2023"
// b) Verify and explain: yes, because within the class "Learn", the parameter within the constructor function is "name". the variable "learn student" assigns a new instance of the object with the "new" keyword. the constructor function will now return "george" for the "this.student" key, along with the "this.cohort" and "this.year" keys for the output.
