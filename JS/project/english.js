const words = ["jibin","notebook","eclipse","binch"];

word = words[Math.floor(Math.random() * words.length)];
let output = new Array(word.length);
let inputed = new Array(27);
output.fill('_');

for(let i = 0; i < word.length; i++)
	document.write(output[i]);
let count = 10;
let j = 0;
let flag = 0;
while(count > 0)
{
	alert(`${count}회 남았습니다`);
	let input = prompt('알파벳 입력하세여');
	flag = 0;
	if(inputed[input - 'a'] <= 1)
		continue;
	else
		inputed[input - 'a']++;
	for(let i = 0; i < word.length; i++)
	{
		if(input === word[i])
			output[i] = input;
	}
	count--;
	for(let i = 0; i < output.length; i++)
		if(output[i] === '_')
		{
			flag = 1;
			break;
		}
	if(flag === 0)
		break;
}
if(flag === 0)
	alert('성공');
if(count <= 0)
{
	alert(`실패 정답은 ${word}였습니다`);
}
