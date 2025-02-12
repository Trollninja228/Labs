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
    sum(a,b){
        console.log(a+b);
    },
    mul(a,b){
        console.log(a*b);
    },
    read(){
        process.stdin.setEncoding("utf8");
        process.stdin.on("data", function(input) {
        var input;
        console.log(input.trim());
        process.exit();
        });
    }
  };
  
  input=calculator.read();
  console.log(input);
//   alert( calculator.sum() );
//   alert( calculator.mul() );