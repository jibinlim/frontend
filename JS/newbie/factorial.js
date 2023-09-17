/*
function fac(n)
{
	if(n === 1)
		return 1;
	return fac(n - 1) * n;
}

console.log(fac(100));
*/
function reverse(stack,word,size)
{
	if(size === -1)
		return;
//	console.log(word[size]);
	stack.push(word[size]);
	reverse(stack,word,size - 1);
}

const word = "hello world!";
var stack = [];

reverse(stack,word,word.length - 1);
console.log(stack.join(''));
