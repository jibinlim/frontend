function Circle(radius) {
	this.radius = radius;
	this.getArea = function () {
		return Math.PI * this.radius * this.radius;
	}
}

const circle1 = new Circle(1);
const circle2 = new Circle(2);

console.log(circle1.constructor);
console.log(circle2.constructor.name);

const obj = {};
const arr = [];
const func = function () {};
const str = 'str';
const str1 = new String('str');
const num = 123;

console.log(obj.constructor);
console.log(arr.constructor);
console.log(func.constructor);
console.log(str.constructor);
console.log(num.constructor);

console.log(obj instanceof Object);
console.log(str instanceof String);
console.log(str1 instanceof String);
