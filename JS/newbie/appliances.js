class Appliances {
	constructor(name,EA,price)
	{
		this.name = name;
		this.EA = EA;
		this.price = price;
	}

	total()
	{
		return (`${this.name}의 구매수량은 ${this.EA}개 이므로 ${this.EA * this.price}원 입니다.`);
	}
}

class Pay extends Appliances
{
	total()
	{
		if(this.EA * this.price > 1000000)
			return (super.total() + ' 카드 지불하겠습니다.');
		else
			return (super.total() + ' 현금 지불하겠습니다.');
	}
}

const pay1 = new Pay('냉장고',1,10000000);
const pay2 = new Pay('김치냉장고',6, 50000);
console.log(pay1.total());
console.log(pay2.total());
