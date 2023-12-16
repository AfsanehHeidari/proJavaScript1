function printLetters() {
    
    for (let letter = 97; letter <= 122; letter++) {
      console.log(String.fromCharCode(letter));
    }
  }
  
  function printNumbers() {
    for (let number = 1; number <= 9; number++) {
      console.log(number);
    }
  }
  
  printLetters();
  printNumbers();
  printLetters();