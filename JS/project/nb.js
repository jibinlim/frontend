let x = ['5324','1234','9382','0134','9876','2537','1923','6032','h','4396'];

function pick_num() {
    let num = [];
    while(num.length < 4)
    {
     let random = Math.floor(Math.random() * 10);
        if(num.indexOf(random) === -1)
          num.push(random);
    }
    return (num);
}

function to_array(n)
{
    let arr = [];
    for(let i = 3; i >= 0; i--)
    {
        arr[i] = n % 10;
        if(isNaN(arr[i]))
            return false;
        n = Math.floor(n/10);
    }
    return (arr);
}

function print_strike_ball(arr,num)
{
    let strike = 0;
    let ball = 0;
    for(let i = 0; i < 4; i++)
    {
        if(num.indexOf(arr[i]) === i)
            strike++;
        else if(num.indexOf(arr[i]) !== -1)
            ball++;
    }
    if(strike === 4)
    {
        console.log('홈런!!!');
        return true;
    }
    console.log(`${strike}스트라이크,${ball}볼 입니다.`);
    return false;
}

function input_check(arr)
{
    let check = [];
    for(let i = 0; i < 10; i++)
        check[i] = 0;
    for(let i = 0; i < 4; i++)
    {
        check[arr[i]]++;
    }
    for(let i = 0; i < 10; i++)
        if(check[i] > 1)
            return false;
    return true;
}

function reset()
{
    count = 10;
    num = pick_num();
}
function hint()
{
    let ht = [];
    ht[0] = num[Math.floor(Math.random() * 4)];
    while(ht.length < 5)
    {
        let rand = Math.floor(Math.random() * 10);
        if(ht.indexOf(rand) === -1)
            ht.push(rand);
    }
    ht.sort((a,b) => b - a);
    for(let i = 0; i < 5; i++)
        console.log(ht[i]);
}

var count = 10;
var num = pick_num();

while(count > 0)
{
    console.log(`${count}회 남았습니다.`);
    let val = prompt('숫자를 입력하세요(리셋 : r, 힌트 : h):');
    if(val === 'r')
      {
        reset();
        continue;
      }
    if(val === 'h')
       {
        hint();
        continue;
       }
    if(val.length !== 4)
    {
       console.log('4자리로 입력해주세요!')
       continue;
    }
    const inp = to_array(val);
    if(!inp)
    {
        console.log('숫자를 입력하세요!');
        continue;
    }
    if(!input_check(inp))
    {
        console.log('중복된 숫자는 입력하지마세요!');
        continue;
    }

    var s_b = print_strike_ball(inp,num);
    if(s_b)
        break;
    count--;
}
if(!s_b)
    console.log(`횟수 초과!! 정답은 ${num}`);