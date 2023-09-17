class Product {
	constructor() {
		this.name = '삼겹살';
		this.price = 1690;
	}

	calculator(weight)
	{
		return weight * 0.01 * this.price;
	}
}

const product1 = new Product();
console.log(product1.calculator(200));

