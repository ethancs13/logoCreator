class Shape {
    constructor(logoText, textColor, shapeColor) {
      this.logoText = logoText;
      this.textColor = textColor;
      this.shapeColor = shapeColor;
    }
}

class Circle extends Shape {
    constructor(logoText, textColor, shapeColor) {
      // use params from parent constructor
      super(logoText, textColor, shapeColor);
    }
    render() {
        return `<svg xmlns="http://www.w3.org/2000/svg" height="200" width="300"><circle cx="150" cy="100" r="80" fill="${this.shapeColor}" />
<text x="50%" y="50%" dominant-baseline="middle" text-anchor="middle" style="font-size: 2.5em;" fill="${this.textColor}">${this.logoText}</text></svg>`;  
    }
}

class Triangle extends Shape {
    constructor(logoText, textColor, shapeColor) {
      super(logoText, textColor, shapeColor);
    }
    render() {
        return `<svg xmlns="http://www.w3.org/2000/svg" height="200" width="300"><polygon points="150, 18 244, 182 56, 182" fill="${this.shapeColor}" />
<text x="50%" y="60%" dominant-baseline="middle" text-anchor="middle" style="font-size: 2.5em;" fill="${this.textColor}">${this.logoText}
</text></svg>`;
    }
}

class Square extends Shape {
    constructor(logoText, textColor, shapeColor) {
      super(logoText, textColor, shapeColor);
    }
    render() {
        return `<svg xmlns="http://www.w3.org/2000/svg" height="200" width="300"><rect x="75" y="25" height="150" width="150" fill="${this.shapeColor}" />
<text x="50%" y="50%" dominant-baseline="middle" text-anchor="middle" style="font-size: 2.5em;" fill="${this.textColor}">${this.logoText}</text></svg>`;  
    }
}

module.exports = { Circle, Triangle, Square, Shape };