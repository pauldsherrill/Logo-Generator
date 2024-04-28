const inquirer = require('inquirer');
const { Circle, Triangle, Square } = require('./lib/shapes');
const fs = require('fs');

// Asks user questions regarding logo 
inquirer.prompt([
    {
        type: 'input',
        message: 'What text should the logo include? (At most 3 characters)',
        name: 'text',
        // Prevents user answer from being more than 3 characters
        validate: function(answer) {
            if (answer.length > 3) {
                return false;
            } else {
                return true;
            }
        },
    },
    {
        type: 'input',
        message: 'What color should the text be? (must be a valid color or a hexadecimal)',
        name: 'textColor',
    },
    {
        type: 'list',
        message: 'What shape should the logo be?',
        name: 'shape',
        choices: ['circle', 'triangle', 'square'],
    },
    {
        type: 'input',
        message: 'What color should the shape be? (must be a valid color or a hexadecimal)',
        name: 'shapeColor',
    },
])
// implements user input into logo.svg file
.then((answers) => {
    if (answers.shape == 'circle') {
        const logo = new Circle(answers.text, answers.textColor, answers.shapeColor);
        logo.createSVG();
    } else if (answers.shape == 'triangle') {
        const logo = new Triangle(answers.text, answers.textColor, answers.shapeColor);
        logo.createSVG();
    } else if (answers.shape == 'square') {
        const logo = new Square(answers.text, answers.textColor, answers.shapeColor);
        logo.createSVG();
    }
});