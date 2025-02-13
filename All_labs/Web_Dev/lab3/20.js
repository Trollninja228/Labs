let sym = Symbol("test");

console.log(sym); // TypeError: Cannot convert a Symbol value to a string
console.log(sym.toString()); // "Symbol(test)"
console.log(sym.description); // "test"


let id = Symbol("id");
let user = {
  name: "John",
  [id]: 123
};

console.log(user[id]); // 123


id = Symbol("ID");
user = {
  name: "John",
  [id.description]: 123
};

console.log(user[id.description]); // 123

console.log("\n","\n","\n","\n","\n");


id = Symbol("id");
user = {
  name: "Alice",
  age: 25,
  [id]: 123
};

for (let key in user) {
  console.log(key); // Выведет только "name" и "age", но не id
}

console.log(Object.keys(user)); // ["name", "age"]
console.log(Object.getOwnPropertySymbols(user)); // [Symbol(id)]

let collection = {
    items: ["apple", "banana", "cherry"],
    [Symbol.iterator]() {
      let index = 0;
      return {
        next: () => ({
          value: this.items[index],
          done: index++ >= this.items.length
        })
      };
    }
  };
  
  for (let item of collection) {
    console.log(item); // "apple", "banana", "cherry"
  }



let sym1 = Symbol.for("shared");
let sym2 = Symbol.for("shared");

console.log(sym1 === sym2); // true, потому что это один и тот же глобальный символ

console.log(Symbol.keyFor(sym1)); // "shared"
console.log(Symbol.keyFor(Symbol("local"))); // undefined (не глобальный символ)


let obj = {
    [Symbol.toPrimitive](hint) {
      if (hint === "string") return "Object as string";
      if (hint === "number") return 42;
      return null;
    }
};

console.log(String(obj)); // "Object as string"
console.log(+obj); // 42
console.log(obj + ""); // "Object as string"