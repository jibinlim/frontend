var person = {
    name : 'Lee',
    age : 25,
    sayHello : function(){
        console.log(`Hello my name is ${this.name}.`);
    }
};

//console.log(age);
delete person.age;
console.log(person.age);
console.log(person.name);
console.log(person.sayHello());
