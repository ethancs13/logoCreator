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
        return '<svg></svg>'
    }
}

class Triangle extends Shape {
    constructor(logoText, textColor, shapeColor) {
      super(logoText, textColor, shapeColor);
    }
    render() {
        return '<svg></svg>'
    }
}

class Square extends Shape {
    constructor(logoText, textColor, shapeColor) {
      super(logoText, textColor, shapeColor);
    }
    render() {
        return '<svg></svg>'
    }
}

module.exports = { Circle, Triangle, Square, Shape };