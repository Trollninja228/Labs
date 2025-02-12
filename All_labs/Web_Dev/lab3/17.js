let message = "Hello!";
let phrase = message;

phrase="TEST!!";
console.log(message);

let user = { name: 'John' };

let admin = user    // copy the reference;

admin.name = 'Pete'; // changed by the "admin" reference

console.log(user.name);

user.name = 'John';
admin = {};
for(let i in user){
    let key = i;
    value = user[i];
    admin[key]=value;

}
admin.name = 'Pete';
console.log(user);
console.log(admin);



let user = { name: "John" };

let permissions1 = { canView: true };
let permissions2 = { canEdit: true };

// copies all properties from permissions1 and permissions2 into user
Object.assign(user, permissions1, permissions2);

// now user = { name: "John", canView: true, canEdit: true }
alert(user.name); // John
alert(user.canView); // true
alert(user.canEdit); // true


function marry(man, woman) {
    woman.husband = man;
    man.wife = woman;
  
    return {
      father: man,
      mother: woman
    }
  }
  
  let family = marry({
    name: "John"
  }, {
    name: "Ann"
  });