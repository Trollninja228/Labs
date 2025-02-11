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