// 8. Implement a Stack Using an Array

class Stack {
    constructor() {
      this.items = [];
    }
  
    push(item) {
      this.items.push(item);
    }
  
    pop() {
      return this.items.pop();
    }
  
    peek() {
      return this.items[this.items.length - 1];
    }
  
    isEmpty() {
      return this.items.length === 0;
    }
  }
  
  // Example
  const s = new Stack();
  s.push("X");
  s.push("Y");
  console.log(s.peek());     // Output: Y
  console.log(s.pop());      // Output: Y
  console.log(s.pop());      // Output: X
  