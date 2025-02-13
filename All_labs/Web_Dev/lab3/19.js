function User(name) {
    this.name = name;
    this.isAdmin = false;
}

let user = new User("Jack");

// console.log(user.name); // Jack
// console.log(user.isAdmin); // false

function User() {
    if(new.target){
        console.log("GGGGGnew.target");
    }else{
        console.log(new.target);
    }
}

User(); // new.target


function A() { return {};}
function B() { return {};}

let a = new A();
let b = new B();

console.log( new A() ,new B() ); 


function Calculator() {
    this.read = function() {
      this.a = +prompt('a?', 0);
      this.b = +prompt('b?', 0);
    };
  
    sum = function() {
      return this.a + this.b;
    };
  
    mul = function() {
      return this.a * this.b;
    };
  }
  
  let calculator = new Calculator();

  calculator.read();
  
  console.log("Sum=" + calculator.sum());
  console.log("Mul=" + calculator.mul());
  