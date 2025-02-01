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
