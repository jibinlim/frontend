var ans = [];
var check = [];
for(var i = 0; i < 10; i++)
    check[i] = 0;
ans[0] = Math.floor(Math.random()*9);
check[ans[0]]++;

for(var i = 1; i < 4; i++)
{
    ans[i] = Math.floor(Math.random()*9);
    console.log(ans[i]);
    if(check[ans[i]] !== 0)
        i--;
    else
        check[ans[i]]++;
}

