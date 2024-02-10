class Node {
  constructor(value) {
    this.value = value;
    this.next = null;
  }
}

class LinkedList {
  constructor(value) {
    this.head = {
      value: value,
      next: null,
    };
    this.tail = this.head;
    this.length = 1;
  }

  append(value) {
    const newNode = {
      value: value,
      next: null,
    };
    this.tail.next = newNode;
    this.tail = newNode;
    this.length++;
    return this;
  }

  prepend(value) {
    const newNode = new Node(value);
    newNode.next = this.head;
    this.head = newNode;
    this.length++;
    return this;
  }

  printList() {
    let array = [];
    let currentNode = this.head;
    while (currentNode != null) {
      array.push(currentNode.value);
      currentNode = currentNode.next;
    }
    return array;
  }

  insert(index, value) {
    //Check for proper parameters;
    if (index >= this.length) {
      console.log("yes");
      return this.append(value);
    }

    const newNode = {
      value: value,
      next: null,
    };
    const leader = this.traverseToIndex(index - 1);
    const holdingPointer = leader.next;
    leader.next = newNode;
    newNode.next = holdingPointer;
    this.length++;
    return this.printList();
  }
  traverseToIndex(index) {
    //Check parameters
    let counter = 0;
    let currentNode = this.head;
    while (counter !== index) {
      currentNode = currentNode.next;
      counter++;
    }
    return currentNode;
  }

  remove(index) {
    const leader = this.traverseToIndex(index - 1);
    const unwantedNode = leader.next;
    leader.next = unwantedNode.next;
    this.length--;
    return this;
  }

  // reverse() {
  //   // 1. set currentNode to tail and make it head
  //   // 2. loop length - 1 times
  //   // 3. find prevNode
  //   // 4. currentNode.next = prevNode
  //   // 5. if i = 0, currentNode.next = null, set currentNode as tail
  //   let currentNode = this.tail;
  //   let tempTail = this.tail;

  //   for (let i = this.length - 1; i > 0; i--) {
  //     const prevNode = this.traverseToIndex(i - 1);
  //     currentNode.next = prevNode;
  //     currentNode = prevNode;
  //   }
  //   currentNode.next = null;
  //   this.tail = currentNode;
  //   this.head = tempTail;
  //   return this;
  // }

  reverse() {
    if (!this.head.next) {
      return this.head;
    }
    let first = this.head;
    this.tail = this.head;
    let second = first.next;

    while (second) {
      let temp = second.next;
      second.next = first;
      first = second;
      second = temp;
    }
    this.head.next = null
    this.head = first
  }
}

let myLinkedList = new LinkedList(10);
myLinkedList.append(5);
myLinkedList.append(15);
myLinkedList.prepend(1);
myLinkedList.insert(2, 20);
console.log("Linked List is ", myLinkedList.printList());
myLinkedList.remove(3);
console.log("Linked list after deleting is ", myLinkedList.printList());
myLinkedList.reverse();
console.log("Linked list after reversing is ", myLinkedList.printList());
