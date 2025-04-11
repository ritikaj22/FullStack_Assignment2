// 2. Reverse a String without using built-in methods

function reverseString(str) {
    let reversed = '';
    for (let i = str.length - 1; i >= 0; i--) {
      reversed += str[i];
    }
    return reversed;
  }
  
  // Example
  console.log(reverseString("hello")); // Output: "olleh"
  