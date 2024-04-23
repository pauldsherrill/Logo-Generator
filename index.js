const inquirer = require('inquirer');
const Shapes = require('./lib/shapes');
const fs = require('fs');

inquirer.prompt([
    {
        type: 'input',
        message: 'What text should the logo include? (At most 3 characters)',
        name: 'text',
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
.then((answers) => {
    fs.writeFile('logo.svg', answers);
})
.then((answers) => {
    console.log('Generated logo.svg');
}
)