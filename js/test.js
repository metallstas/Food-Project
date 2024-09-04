// function User(name, age) {
//     this.name = name
//     this.age = age
//     this.human = true
//     this.sayHi = () => {
//         return `Hi ${this.name}`
//     }
// }

// User.prototype.sayBay = function() {
//     return `By ${this.name}`
// }

// const stas = new User('Stas', 32)

// console.log(stas.sayBay())
// console.dir(stas)

class Rectangle {
    constructor(width, height) {
       this.width = width,
        this.height = height
    }
    clacArea() {
        return this.width * this.height
    }
}

class ColoredRectangle extends Rectangle {
     constructor(width, height, color) {
        super(width, height)
        this.color = color
     }

     showMyProps() {
        console.log(`color: ${this.color}, width: ${this.width}, height: ${this.height}`)
     }
}

const square = new ColoredRectangle(10, 5, 'red')

console.log(square.clacArea())
square.showMyProps()
