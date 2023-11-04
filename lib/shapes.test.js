const { Circle, Triangle, Square } = require("./shapes");


const firstShape = new Circle('YES', 'black', 'red');
firstShape.setColor("blue");

test('circle', () => {
    expect(firstShape.render()).toBe(
`<svg xmlns="http://www.w3.org/2000/svg" height="200" width="300"><circle cx="150" cy="100" r="80" fill="blue" />
<text x="50%" y="50%" dominant-baseline="middle" text-anchor="middle" style="font-size: 2.5em;" fill="black">YES</text></svg>`
    );
});

const secondShape = new Square('YES', 'black', 'red');
secondShape.setColor("green");

test('square', () => {
    expect(secondShape.render()).toBe(
`<svg xmlns="http://www.w3.org/2000/svg" height="200" width="300"><rect x="75" y="25" height="150" width="150" fill="green" />
<text x="50%" y="50%" dominant-baseline="middle" text-anchor="middle" style="font-size: 2.5em;" fill="black">YES</text></svg>`
    );
});

const thirdShape = new Triangle('YES', 'black', 'red');
thirdShape.setColor("blue");

test('triangle', () => {
    expect(thirdShape.render()).toBe(
`<svg xmlns="http://www.w3.org/2000/svg" height="200" width="300"><polygon points="150, 18 244, 182 56, 182" fill="blue" />
<text x="50%" y="60%" dominant-baseline="middle" text-anchor="middle" style="font-size: 2.5em;" fill="black">YES</text></svg>`
    );
});

