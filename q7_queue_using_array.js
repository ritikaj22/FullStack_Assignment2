// 7. Implement a Queue Using an Array

class Queue {
    constructor() {
      this.items = [];
    }
  
    enqueue(item) {
      this.items.push(item);
    }
  
    dequeue() {
      return this.items.shift();
    }
  
    peek() {
      return this.items[0];
    }
  
    isEmpty() {
      return this.items.length === 0;
    }
  }
  
  // Example
  const q = new Queue();
  q.enqueue("A");
  q.enqueue("B");
  console.log(q.peek());     // Output: A
  console.log(q.dequeue());  // Output: A
  console.log(q.dequeue());  // Output: B
  console.log(q.isEmpty()); // Output: true