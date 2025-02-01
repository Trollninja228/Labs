if ("0")//true
 {
    alert( 'Hello' );
  }

  //Correct name of JS
  let value = prompt('What is the "official" name of JavaScript?', '');

  if (value == 'ECMAScript') {
    alert('Right!');
  } else {
    alert("You don't know? ECMAScript!");
  }

  a=1;
  b=3;
  let result = (a + b < 4) ? 'Below' : 'Over';
  alert("res:"+result);

  let login=''; 
  let message = (login == 'Employee') ? 'Hello' :
  (login == 'Director') ? 'Greetings' :
  (login == '') ? 'No login' :
  '';
  alert("mes:"+message);