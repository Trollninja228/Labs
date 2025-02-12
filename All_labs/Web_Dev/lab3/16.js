g=NaN;
console.log(typeof(g));



let user = new Object(); // "object constructor" syntax

console.log(typeof(user));

user = {};

console.log(typeof(user));

user={
    name: "John",
    age: 30,
    isAdmin: true,
    salary: 10000 //or ','
}

user.age=31;

delete user.salary;

console.log(user.name, user.age, user.isAdmin, user.salary);

user["likes birds"]=true;

console.log(user["likes birds"]);

let user = {};
user.name = "John";
user.surname = "Smith";
user.name = "Pete";
delete user.name;

let salaries = {
    John: 100,
    Ann: 160,
    Pete: 130
};

let sum = 0;

for (let key in salaries) {
sum += salaries[key];
}

alert(sum);

function multiplyNumeric(obj) {
for (let key in obj) {
    if (typeof obj[key] == 'number') {
    obj[key] *= 2;
    }
}
}