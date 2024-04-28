const { Circle, Triangle, Square } = require('./shapes');

describe('shapes', () => {
    test('circle', () => {
        const shape = new Circle("SVG", "red", "blue");
        expect(shape.circleContent).toEqual( `<svg version="1.1" width="300" height="200" xmlns="http://www.w3.org/2000/svg"><circle cx="150" cy="100" r="80" fill="blue" /><text x="150" y="125" font-size="60" text-anchor="middle" fill="red">SVG</text></svg>`);
    });
    test('triangle', () => {
        const shape = new Triangle("SVG", "red", "blue");
        expect(shape.triangleContent).toEqual(`<svg version="1.1" width="300" height="200" xmlns="http://www.w3.org/2000/svg"><polygon points="150, 18 244, 182 56, 182" fill="blue" /><text x="150" y="150" font-size="50" text-anchor="middle" fill="red">SVG</text></svg>`);
    });
    test('square', () => {
        const shape = new Square("SVG", "red", "blue");
        expect(shape.squareContent).toEqual(`<svg width="300" height="200" xmlns="http://www.w3.org/2000/svg"><rect width="150" height="150" x="10" y="10" rx="20" ry="20" fill="blue" /><text x="87" y="105" font-size="60" text-anchor="middle" fill="red">SVG</text></svg>`);
    });
  });
  