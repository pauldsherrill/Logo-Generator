class Shape {
    constructor(text, textColor, shapeColor) {
        this.color = '';
        this.text = text,
        this.textColor = textColor,
        this.shapeColor = shapeColor
    }
    setColor(color) {
        this.color = color;
    }
}

class Triangle extends Shape {
    constructor(color, text, textColor, shapeColor, dimensions) {
        super(color, text, textColor, shapeColor)
        this.dimensions = ''
    }
}

class Circle extends Shape {
    constructor(color, text, textColor, shapeColor, dimensions) {
        super(color, text, textColor, shapeColor)
        this.dimensions = ''
    }
}

class Square extends Shape {
    constructor(color, text, textColor, shapeColor, dimensions) {
        super(color, text, textColor, shapeColor)
        this.dimensions = ''
    }
}

module.exports = {Triangle, Circle, Square};