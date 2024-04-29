const fs = require('fs');

class Shape {
    constructor(text, textColor, shapeColor, shapeContent) {
        this.text = text,
        this.textColor = textColor,
        this.shapeColor = shapeColor
    }
}

class Circle extends Shape {
    constructor(text, textColor, shapeColor, circleContent) {
        super(text, textColor, shapeColor)
        this.circleContent = `<svg version="1.1" width="300" height="200" xmlns="http://www.w3.org/2000/svg"><circle cx="150" cy="100" r="80" fill="${shapeColor}" /><text x="150" y="125" font-size="60" text-anchor="middle" fill="${textColor}">${text}</text></svg>`;
        this.createSVG = function() {
            fs.writeFile('logo.svg', this.circleContent, (err) => {
                err ? console.error(err) : console.log('Generated logo.svg');
            })
        }
    }
}

class Triangle extends Shape {
    constructor(text, textColor, shapeColor) {
        super(text, textColor, shapeColor)
        this.triangleContent = `<svg version="1.1" width="300" height="200" xmlns="http://www.w3.org/2000/svg"><polygon points="150, 18 244, 182 56, 182" fill="${shapeColor}" /><text x="150" y="150" font-size="50" text-anchor="middle" fill="${textColor}">${text}</text></svg>`;
        this.createSVG = function() {
              fs.writeFile('logo.svg', this.triangleContent, (err) => {
                err ? console.error(err) : console.log('Generated logo.svg');
            })
        }
    }
}

class Square extends Shape {
    constructor(text, textColor, shapeColor) {
        super(text, textColor, shapeColor)
        this.squareContent = `<svg width="300" height="200" xmlns="http://www.w3.org/2000/svg"><rect width="150" height="150" x="10" y="10" rx="20" ry="20" fill="${shapeColor}" /><text x="87" y="105" font-size="60" text-anchor="middle" fill="${textColor}">${text}</text></svg>`;
        this.createSVG = function() {
            fs.writeFile('logo.svg', this.squareContent, (err) => {
                err ? console.error(err) : console.log('Generated logo.svg');
            })
        }
    }
}

module.exports = {Triangle, Circle, Square};