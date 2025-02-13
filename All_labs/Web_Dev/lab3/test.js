function onlyLatinLetters(str) {
    return /^[A-Za-z]+o$/.test(str);
  }
  
  console.log(onlyLatinLetters("Hello"));   // true
  console.log(onlyLatinLetters("Hello123")); // false
  console.log(onlyLatinLetters("Hell")); // false

  