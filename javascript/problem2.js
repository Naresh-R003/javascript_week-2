class Shape {
    constructor(colour = "Transparent") {
      this.colour = colour;
      this.type = "Shape";
    }
    describe() {
     console.log(`A ${this.colour} ${this.type}`);
   }
  }
  const myShape = new Shape("Red");
  myShape.describe();
  console.log(myShape.colour); 
  console.log(myShape.type);   

  const myOtherShape = new Shape();
  console.log(myOtherShape.colour); 
  console.log(myOtherShape.type);   
  class Shape1 {
    constructor(colour) {
     this.colour = colour;
   }
 }
 
 class Square extends Shape1 {
   constructor(colour, sideLength) {
     super(colour);
     this.sideLength = sideLength;
     this.type = "Square";
   }
   area() {
     return this.sideLength * this.sideLength;
   }
 }
 class Rectangle extends Shape1 {
   constructor(colour, width, height) {
     super(colour);
     this.width = width;
     this.height = height;
     this.type = "Rectangle";
   }
   area() {
     return this.width * this.height;
   }
 }

 const rectangle = new Rectangle("blue", 6, 8);
 console.log(rectangle);
 console.log(rectangle.area()); 

 const square = new Square("red", 5);
 console.log(square);      
 console.log(square.area()); 