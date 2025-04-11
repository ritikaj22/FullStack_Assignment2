// 3. Check if a String is a Palindrome

function isPalindrome(str) {
    const cleaned = str.toLowerCase().replace(/[^a-z0-9]/g, '');
    const reversed = cleaned.split('').reverse().join('');
    return cleaned === reversed;
  }
  
  // Example
  console.log(isPalindrome("Madam")); // Output: true
  console.log(isPalindrome("Hello")); // Output: false
  