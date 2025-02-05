alert( null || 2 || undefined ); //2

alert( alert(1) || 2 || alert(3) );//1 after 2

alert(1 && null && 2); //null, because first false value

alert( alert(1) && alert(2) );// 1, after undefined because first flase value

alert( null || 2 && 3 || 4 );
// The precedence of AND && is higher than ||, so it executes first.
//  The result of 2 && 3 = 3, so the expression becomes:null || 3 || 4

if (age >= 14 && age <= 90){
    alert(" GIVE US YOUR TAXXXES!!!!");
}


// Runs.
if (-1 || 0) alert( 'first' );

// Doesn't run
if (-1 && 0) alert( 'second' );

// Executes
// Operator && has a higher precedence than ||
// so -1 && 1 executes first, giving us the chain:
// null || -1 && 1  ->  null || 1  ->  1
if (null || -1 && 1) alert( 'third' );



let userName = prompt("Who's there?", '');

if (userName === 'Admin') {

  let pass = prompt('Password?', '');

  if (pass === 'TheMaster') {
    alert( 'Welcome!' );
  } else if (pass === '' || pass === null) {
    alert( 'Canceled' );
  } else {
    alert( 'Wrong password' );
  }

} else if (userName === '' || userName === null) {
  alert( 'Canceled' );
} else {
  alert( "I don't know you" );
}