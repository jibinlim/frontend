class MyArray extends Array {
	uniq() {
		return this.filter((v,i,self) => self.indexOf(v) === i);
	}

	average() {
		return this.reduce((pre,cur) => pre + cur, 0) / this.length;
	}
}

const myArray = new MyArray(2,2,4,5);
console.log(MyArray);

console.log(myArray.uniq());
console.log(myArray.average());
