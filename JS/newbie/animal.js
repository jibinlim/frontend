class Animal {
	constructor(age, weight)
	{
		this.age = age;
		this.weight = weight;
	}
	eat() { return 'eat';}
	move() { return 'move';}
	static x() {return 'x';};
}

class Bird extends Animal{
	constructor(age, weight, c)
	{
		super(age,weight);
		this.c = c;
	}
	fly() {return 'fly';}
}

const bird = new Bird(1, 5,6);

console.log(Bird.x());
console.log(bird);
console.log(bird instanceof Bird);
console.log(bird instanceof Animal);

console.log(bird.age);
console.log(bird.eat());
console.log(bird.move());
console.log(bird.fly());
