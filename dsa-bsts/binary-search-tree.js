class Node {
  constructor(val, left = null, right = null) {
    this.val = val;
    this.left = left;
    this.right = right;
  }
}

class BinarySearchTree {
  constructor(root = null) {
    this.root = root;
  }

  /** insert(val): insert a new node into the BST with value val.
   * Returns the tree. Uses iteration. */

  insert(val) {
    const newNode =new Node(val);
    if(!this.root){
      this.root = newNode;
      return this;
    }
    let curr = this.root;
    while(true){
      if(val === curr.val) return undefined;
      if(val < curr.val){
        if(!curr.left){
          curr.left = newNode;
          return this;
        }
        curr = curr.left;

      }else{
        if(!curr.right){
          curr.right = newNode;
          return this;
        }
        curr = curr.right;
      }
    }

  }

  /** insertRecursively(val): insert a new node into the BST with value val.
   * Returns the tree. Uses recursion. */

  insertRecursively(val, node= this.root) {
if(!node){
  this.root = new Node(val);
  return this;
}
if (val < node.val){
  if(!node.left) node.left = new Node(val);
  else this.insertRecursively(val, node.left);
}else if (val > node.val){
  if(!node.right) node.right = new Node(val);
  else this.insertRecursively(val, node.right);
}
return this;

  }

  /** find(val): search the tree for a node with value val.
   * return the node, if found; else undefined. Uses iteration. */

  find(val) {
let curr = this.root;
while(curr){
  if(val === curr.val)return  curr;
  curr = val < curr.val ? curr.left : curr.right;
}
return undefined;
  }

  /** findRecursively(val): search the tree for a node with value val.
   * return the node, if found; else undefined. Uses recursion. */

  findRecursively(val, node = this.root) {
    if(!node) return undefined;
    if(val === node.val) return node;
    return val < node.val ? this.findRecursively(val, node.left) :
      this.findRecursively(val, node.right)
      
    }

  /** dfsPreOrder(): Traverse the array using pre-order DFS.
   * Return an array of visited nodes. */

   dfsPreOrder() {
    const visited = [];
    function traverse(node) {
      if (node) {
        visited.push(node.val);  // Push the value, not the node
        traverse(node.left);
        traverse(node.right);
      }
    }
    traverse(this.root);
    return visited;
  }

  dfsInOrder() {
    const visited = [];
    function traverse(node) {
      if (node) {
        traverse(node.left);
        visited.push(node.val);  // Push the value, not the node
        traverse(node.right);
      }
    }
    traverse(this.root);
    return visited;
  }

  

  /** dfsPostOrder(): Traverse the array using post-order DFS.
   * Return an array of visited nodes. */

   dfsPostOrder() {
    const visited = [];
    function traverse(node) {
      if (node.left) traverse(node.left);
      if (node.right) traverse(node.right);
      visited.push(node.val);
    }
    traverse(this.root);
    return visited;
  }

  /** bfs(): Traverse the array using BFS.
   * Return an array of visited nodes. */

   bfs() {
    const queue = [this.root];
    const visited = [];
    while (queue.length) {
      let node = queue.shift();
      visited.push(node.val);
      if (node.left) queue.push(node.left);
      if (node.right) queue.push(node.right);
    }
    return visited;
  }

  /** Further Study!
   * remove(val): Removes a node in the BST with the value val.
   * Returns the removed node. */

  remove(val) {
    this.root = this._removeNode(this.root, val);

  }
  _removeNode(node,val){
    if (!node){
      return null;
    }
    if (val < node.val){
      node.left = this._removeNode(node.left, val);
      return node;
    }else if(val > node.val){
      node.right = this._removeNode(node.right, val);
      return node;
    }else {
      if(!node.left){
        return node.right;
      }else if(!node.right) {
        return node.left;
      }
      node.val = this._minValue(node.right);
      node.right = this._removeNode(node.right, node.val);
    }
    return node;
  }
_minValue(node) {
  let minVal = node.val;
  while (node.left){
    minVal = node.left.val;
    node = node.left;
  }
  return minVal;
}

  /** Further Study!
   * isBalanced(): Returns true if the BST is balanced, false otherwise. */

  isBalanced() {
    return this._checkedHeight(this.root) !== -1

  }
  _checkedHeight(node) {
    if(!node) return 0;
    let leftHeight = this._checkedHeight(node.left);
    if(leftHeight === -1)return -1;
    let rightHeight = this._checkedHeight(node.right);
    if(rightHeight === -1) return -1;

    if (Math.abs(leftHeight - rightHeight) > 1) return -1;
    return Math.max(leftHeight, rightHeight) + 1;
  }

  /** Further Study!
   * findSecondHighest(): Find the second highest value in the BST, if it exists.
   * Otherwise return undefined. */

  findSecondHighest() {
    if(!this.root || (!this.root.left && !this.root.right)) {
      return undefined;
    }
    return this._findSecondHighest(this.root);
  }
  _findSecondHighest(node) {
    if (!node.right && node.left){
      return this._findMax(node.left);
    }
    if(node.right && !node.right.right && !node.right.left ){
      return node.val;
    }
    return this._findSecondHighest(node.right);
  }
  _findMax(node){
    while(node.right){
      node = node.right;
    }
    return node.val;
  }
}

module.exports = BinarySearchTree;
