function moji(f)
{
	if(f() == 1)
		console.log("happy");
	else
		console.log("sad");
}

function happy()
{
	return 1;
}

function sad()
{
	return 0;
}

moji(happy);
moji(sad);
