function Min(arr){
	let min = arr.reduce((acc,cur) =>{
			return acc > cur ? cur : acc;
			},0);

	return min;
}

let arr = [1,2,3,4,5,-1];

console.log(Min(arr));
