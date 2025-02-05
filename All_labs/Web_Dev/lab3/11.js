let a = "1";
let b = 0;

switch (+a) {
  case b + 1:
    alert("this runs, because +a is 1, exactly equals b+1");
    break;

  default:
    alert("this doesn't run");
}



let arg = prompt("Enter a value?");

switch (arg) {
  case '0':
  case '1':
    alert( 'One or zero' );
    break;

  case '2':
    alert( 'Two' );
    break;

  case 3:
    alert( 'Never executes!' );
    break;
  default:
    alert( 'An unknown value' );
}


if(browser == 'Edge') {
    alert("You've got the Edge!");
  } else if (browser == 'Chrome'|| browser == 'Firefox'|| browser == 'Safari'|| browser == 'Opera') {
    alert( 'Okay we support these browsers too' );
  } else {
    alert( 'We hope that this page looks ok!' );
  }


a = +prompt('a?', '');

  switch (a) {
    case 0:
      alert( 0 );
      break;
  
    case 1:
      alert( 1 );
      break;
  
    case 2:
    case 3:
      alert( '2,3' );
      break;
  }

  