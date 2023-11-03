const inquirer = require("inquirer");
const fs = require("fs");
// Retrieves object exports from shapes.js file
const { Circle, Triangle, Square } = require("./lib/shapes.js");

// Array for inquirer questions
const questions = [
  {
    type: "input",
    name: "logoText",
    message: "Enter up to 3 letters to use for your logo.",
    validate: (logoText) => {
      if (logoText.length > 3) return "Please use up to 3 letters only."
      else return (!logoText ? "Please enter at least 1 letter" : true)
      }
    },
  {
    type: "input",
    name: "textColor",
    message:
      "Enter a color or hexadecimal number for your logo's text color.",
    validate: (text) => {
      return (!text ? "Please enter a color or hexadecimal number." : true)
    },
  },
  {
    type: "list",
    name: "shape",
    choices: ["Circle", "Triangle", "Square"],
    message: "Choose a shape for the logo.",
  },
  {
    type: "input",
    name: "shapeColor",
    message:
      "Enter a color or hexadecimal for the logo's color.",
    validate: (shape) => {
      return (!shape ? "Please enter a color or hexadecimal number." : true)
    },
  },
];

// Invoke init function to prompt user, then write to file
function init() {
  inquirer
    .prompt(questions)
    .then((data) => {
      // destructure data into four variables
      const { logoText, textColor, shape, shapeColor } = data;

      writeToFile(filename, data, shape)
  });
}

// Writes svg to file in examples folder.
// If successful, prints success message.
function writeToFile(filename, data, shape) {

  fs.writeFile(filename, data, (err) => {
    err ? console.log(err)
    : console.log(`${shape} Success! Check examples folder.`);
  });
}

// Initialization of app
init();