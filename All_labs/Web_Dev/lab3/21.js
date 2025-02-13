let num = 42;                // number
let str = "Hello";           // string
let flag = true;             // boolean
let nothing = null;          // null
let notDefined;              // undefined
let sym = Symbol("id");      // symbol
let big = 12345678901234567890n; // BigInt
let obj = { a: 1 };          // object

str = "hello";
console.log(str.toUpperCase()); // "HELLO"

let a = 10, b = 3;
console.log(a + b);   // 13
console.log(a / b);   // 3.333...
console.log(1 / 0);   // Infinity
console.log(0 / 0);   // NaN

let text = "JavaScript";
console.log(text.length);        // 10
console.log(text.slice(0, 4));   // "Java"
console.log(text.toLowerCase()); // "javascript"

let arr = [1, 2, 3, 4];
console.log(arr[0]); // 1
arr[2] = 42;
console.log(arr);    // [1, 2, 42, 4]

arr = [1, 2, 3];
arr.push(4);               // добавляет элемент в конец
console.log(arr);          // [1, 2, 3, 4]

let newArr = arr.map(x => x * 2);
console.log(newArr);       // [2, 4, 6, 8]

let filtered = arr.filter(x => x % 2 === 0);
console.log(filtered);     // [2, 4]

let map = new Map();
map.set("a", 1);
map.set("b", 2);
console.log(map.get("a"));  // 1

let set = new Set();
set.add(1);
set.add(2);
set.add(1);                 // дубли игнорируются
console.log(set.size);      // 2

let user = { name: "Alice", age: 25 };
console.log(Object.keys(user));   // ["name", "age"]
console.log(Object.values(user)); // ["Alice", 25]
console.log(Object.entries(user));// [["name", "Alice"], ["age", 25]]

[a, b] = [10, 20];
console.log(a, b); // 10 20

user = { name: "Bob", age: 30 };
let { name, age } = user;
console.log(name, age); // "Bob" 30


let now = new Date();
console.log(now);             // текущая дата и время
console.log(now.getFullYear()); // год
console.log(now.getMonth() + 1); // месяц (от 0 до 11, поэтому +1)

let jsonStr = JSON.stringify(user);
console.log(jsonStr); // '{"name":"Carol"}'

let parsed = JSON.parse(jsonStr);
console.log(parsed); // объект {name: "Carol"}


