class Node {
    constructor(value) {
      this.value = value;
      this.next = null;
    }
  }

  class Queue {
    constructor() {
      this.first = null;
      this.last = null;
      this.length = 0;
    }
    peek() {
        if (this.length === 0) {
            return "Queue is empty"
        }
        return this.first.value
    }

    enqueue(value) {
        const newNode = new Node(value)
        if (this.first == null) {
            this.first = newNode;
            this.last = newNode;
        } else {
            this.last.next = newNode;
            this.last = newNode;
        }
        this.length++;
        return this;
    }

    dequeue() {
        if (this.length === 0 ) {
            return "Queue is empty"
        } else if (this.length == 1) {
            this.first = null;
            this.last = null
            this.length--;
            return this;
        }
        this.first = this.first.next

        this.length--;
        return this;
    }
    //isEmpty;
  }

  const myQueue = new Queue();
  console.log(myQueue.enqueue("Joy"))
  console.log(myQueue.enqueue("Matt"))
  console.log(myQueue.enqueue("Pavel"))
  console.log(myQueue.enqueue("Samir"))
  console.log(myQueue.peek())
  console.log(myQueue.dequeue())
  console.log(myQueue.dequeue())


  //Joy
  //Matt
  //Pavel
  //Samir