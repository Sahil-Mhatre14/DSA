// using Linked List

//wrong solution because we are traversing bottom to top and not top to bottom
// class Node {
//   constructor(value) {
//     this.value = value;
//     this.next = null;
//   }
// }

// class Stack {
//   constructor() {
//     this.top = null;
//     this.bottom = null;
//     this.length = 0;
//   }

//   peek() {
//     if (this.length > 0) {
//         return this.top
//     }
//     else {
//         return "stack is empty"
//     }
//   }

//   push(value) {
//     const newNode = new Node(value);
//     if (this.length == 0) {
//       this.bottom = newNode;
//     } else {
//       this.top.next = newNode;
//     }
//     this.top = newNode;
//     this.length++;
//     return this;
//   }

//   pop() {
//     if(this.length == 0) {
//         return "stack is empty"
//     } else if (this.length == 1) {
//         this.top = null;
//         this.bottom = null;
//         this.length = 0;
//         return this
//     }
//     let currentNode = this.bottom;
//     while(currentNode.next.next) {
//         currentNode = currentNode.next
//     }
//     this.top = currentNode;
//     currentNode.next = null;
//     this.length--;
//     return this;
//   }

//   print() {
//     if(this.length == 0) {
//         return []
//     }
//     let currentNode = this.bottom;
//     let array = []
//     while (currentNode) {
//         array.push(currentNode.value)
//         currentNode = currentNode.next
//     }
//     return array
//   }

//   //isEmpty
// }

// const myStack = new Stack();
// console.log(myStack.push("google"))
// console.log(myStack.push("discord"))
// console.log(myStack.push("udemy"))
// console.log(myStack.peek())
// console.log("Stack ", myStack.print())
// myStack.pop()
// console.log("After one pop operation", myStack.print())
// myStack.pop()
// console.log("After 2 pop operation", myStack.print())
// myStack.pop()
// console.log("After 3 pop operation", myStack.print())
// myStack.pop()
// console.log("After 4 pop operation", myStack.print())


//correct solution

class Node {
    constructor(value) {
      this.value = value;
      this.next = null;
    }
  }
  
  class Stack {
    constructor() {
      this.top = null;
      this.bottom = null;
      this.length = 0;
    }
    peek() {
      return this.top;
    }
    push(value) {
      const newNode = new Node(value);
      if (this.length === 0) {
        this.top = newNode;
        this.bottom = newNode;
      } else {
        const holdingPointer = this.top;
        this.top = newNode;
        this.top.next = holdingPointer;
      }
      this.length++;
      return this;
    }
    pop() {
      if (!this.top) {
        return null;
      }
      if (this.top === this.bottom) {
        this.bottom = null;
      }
      // const holdingPointer = this.top;
      this.top = this.top.next;
      this.length--;
      return this;
    }
    //isEmpty
  }
  
  const myStack = new Stack();
  console.log(myStack.push("google"));
  console.log(myStack.push("discord"));
  console.log(myStack.push("udemy"));

  console.log(myStack.peek());
  console.log(myStack.pop());
  console.log(myStack.pop());

