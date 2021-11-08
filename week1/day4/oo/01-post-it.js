class PostIt {
  constructor(backgroundColor, text, textColor) {
    this.backgroundColor = backgroundColor
    this.text = text
    this.textColor = textColor
  }
  toString() {
    return `an ${this.backgroundColor} with ${this.textColor} text: "${this.text}"`
  }
}

console.log(String(new PostIt('orange', 'blue', 'Idea 1')))
console.log(String(new PostIt('pink', 'black', 'Awesome')))
console.log(String(new PostIt('yellow', 'green', 'Superb!')))