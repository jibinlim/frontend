const friends = [{
    name : 'ji',
    age : 25,
    gender : 'Male'
},
{
    name : 'pk',
    age : 28,
    gender : 'Female'
},
{
    name : 'kk',
    age : 39,
    gender : 'Male'
}
];

const result= friends.reduce((acc,cur) =>{
    if(cur.gender == 'Male')
        acc += cur.age;
    return acc;
},0);
console.log(result);
