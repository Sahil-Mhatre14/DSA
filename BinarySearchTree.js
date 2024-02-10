class Node {
  constructor(value) {
    this.left = null;
    this.right = null;
    this.value = value;
  }
}

class BinarySearchTree {
  constructor() {
    this.root = null;
  }
  //   insert(value) {
  //     // create a new node
  //     let newNode = new Node(value);
  //     //if root is null, set root as new node
  //     if (!this.root) {
  //       this.root = newNode;
  //       return this;
  //     }

  //     // if new node value > currentNode, check if currentNode.next is empty
  //     // if yes, newNode becomes currentNode.next
  //     // else move to currentNode.next
  //     //else move to currentNode.prev, check if currentNode.prev is empty
  //     // if yes, newNode becomes currentNode.prev
  //     // else move to currentNode.prev

  //     let currentNode = this.root;
  //     let nextNode =
  //       value < currentNode?.value ? currentNode?.left : currentNode?.right;

  //     while (nextNode) {
  //       currentNode = nextNode;
  //       nextNode =
  //         value < currentNode?.value ? currentNode?.left : currentNode?.right;
  //     }

  //     if (value < currentNode.value) {
  //       currentNode.left = newNode;
  //     } else {
  //       currentNode.right = newNode;
  //     }
  //     return this;
  //   }

  insert(value) {
    const newNode = new Node(value);

    if (this.root === null) {
      this.root = newNode;
    } else {
      let currentNode = this.root;
      while (true) {
        if (currentNode.value > value) {
          // Left
          if (!currentNode.left) {
            currentNode.left = newNode;
            return this;
          }
          currentNode = currentNode.left;
        } else {
          // Right
          if (!currentNode.right) {
            currentNode.right = newNode;
            return this;
          }
          currentNode = currentNode.right;
        }
      }
    }
  }

  lookup(value) {
    if (!this.root) {
      return false;
    }
    let currentNode = this.root;
    while (currentNode) {
      if (value < currentNode.value) {
        currentNode = currentNode.left;
      } else if (value > currentNode.value) {
        currentNode = currentNode.right;
      } else if (value === currentNode.value) {
        return currentNode;
      }
    }
    return false;
  }

  remove(value) {}

  breadthFirstSearch() {
    let currentNode = this.root;
    let list = [];
    let queue = [];
    queue.push(currentNode);

    while (queue.length > 0) {
      currentNode = queue.shift();
      console.log(currentNode.value);
      list.push(currentNode.value);
      if (currentNode.left) {
        queue.push(currentNode.left);
      }
      if (currentNode.right) {
        queue.push(currentNode.right);
      }
    }
    return list
  }
}

const tree = new BinarySearchTree();
tree.insert(9);
tree.insert(4);
tree.insert(6);
tree.insert(20);
tree.insert(170);
tree.insert(15);
tree.insert(1);
tree.remove(170);
console.log("Tree", JSON.stringify(traverse(tree.root)));
console.log("Node", tree.lookup(20));
console.log('BFS traversal', tree.breadthFirstSearch())
//     9
//  4     20
//1  6  15  170

function traverse(node) {
  const tree = { value: node.value };
  tree.left = node.left === null ? null : traverse(node.left);
  tree.right = node.right === null ? null : traverse(node.right);
  return tree;
}
