let user = { name: "John" };
let admin = { name: "Admin" };

function sayHi() {
  console.log(this.name);
}

user.f = sayHi;
admin.f = sayHi;

user.f();  // John
admin.f(); // Admin

user = {
    firstName: "Ilya",
    sayHi() {
      let arrow = () => console.log(this.firstName);
      arrow();
    }
  };
  
  user.sayHi(); // Ilya
  

  let calculator = {
    a: 0,
    b: 0,
    sum(a,b){
        console.log(a+b);
    },
    mul(a,b){
        console.log(a*b);
    },
    read(){
        prompt("Enter a number", this.a);
        prompt("Enter a number", this.b);
    }
  };
  
  calculator.read();
  calculator.sum();
  calculator.mul();