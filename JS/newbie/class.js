class Person{
	constructor(name)
	{
		this.name = name;
	}

	sayHi() {
		console.log(`Hi! My name is ${this.name}`);
	}

	static sayHello() {
		console.log(`Hello!`);
	}
}

const me = new Person('Cho');

me.sayHi();
//me.sayHello();
Person.sayHello();
