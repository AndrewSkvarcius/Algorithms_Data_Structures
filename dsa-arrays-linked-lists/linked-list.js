/** Node: node for a singly linked list. */

class Node {
  constructor(val) {
    this.val = val;
    this.next = null;
  }
}

/** LinkedList: chained together nodes. */

class LinkedList {
  constructor(vals = []) {
    this.head = null;
    this.tail = null;
    this.length = 0;

    for (let val of vals) this.push(val);
  }
  
  ///_get(idx) retrieves node at idx
 _get(idx) {
    let current = this.head;
    let count = 0;

    while (current !== null && count != idx){
      count += 1;
      current = current.next;
    }
    return current;

  }

  /** push(val): add new value to end of list. */

  push(val) {
    let newNode = new Node(val);

    if (!this.head) {
      this.head = newNode;
      this.tail = newNode
    } else {
      this.tail.next = newNode;
      this.tail = newNode;
    }
    this.length += 1;

  }

  /** unshift(val): add new value to start of list. */

  unshift(val) {

    let newNode = new Node(val);
    
    if (!this.head){
      // if list is empty set head and tail to new Node

      this.head = newNode;
      this.tail = newNode;

    }else {
      // if list is not empty set new Node to next to current head 
      newNode.next = this.head;
      // update head to new Node
      this.head = newNode;

    }
    this.length += 1;

  }

  /** pop(): return & remove last item. */

  pop() {
    return this.removeAt(this.length - 1);
  }

  /** shift(): return & remove first item. */

  shift() {
    return this.removeAt(0);

  }

  /** getAt(idx): get val at idx. */

  getAt(idx) {
    if (idx < 0 || idx >= this.length){
      throw new Error("Invalid index");
    }

    return this._get(idx).val;
  }

  /** setAt(idx, val): set val at idx to val */

  setAt(idx, val) {
    if (idx < 0 || idx >= this.length){
      throw new Error("Invalid index");
    }
     let current = this._get(idx);
     current.val = val;

  }

  /** insertAt(idx, val): add node w/val before idx. */

  insertAt(idx, val) {
     // Check for invalid index
  if (idx < 0 || idx > this.length) {
    throw new Error("Index out of bounds.");
  }

  // If index is 0, use unshift to add to the beginning
  if (idx === 0) return this.unshift(val);
  // If index is equal to the length of the list, use push to add to the end
  if (idx === this.length) return this.push(val);
  // get node before   
  let prev = this._get(idx - 1);

  // Create a new node
 let newNode = new Node(val);
  // Insert the new node
  newNode.next = prev.next;
  prev.next = newNode;

  // Increment the length
  this.length += 1;

  }

  /** removeAt(idx): return & remove item at idx, */

  removeAt(idx) {
    // check for vaild idx
    if ( idx < 0 || idx >= this.length) {
      throw new Error("Index not valid");

    }
    // special case removing first node
    if (idx === 0) {
      let val = this.head.val;
      this.head = this.head.next;
      this.length -= 1;
      if(this.length < 2)this.tail = this.head;
        return val
    }

      let prev = this._get(idx - 1);
    
      // special case remove tail node 
      if (idx === this.length - 1) {
        let val = prev.next.val;
        prev.next = null;
        this.tail = prev;
        this.length -= 1;
        return val;
      }
      // normal remove node from middle
      let val = prev.next.val;
      prev.next = prev.next.next;
      this.length -= 1;
      return val;
  }

  /** average(): return an average of all values in the list */

  average() {
    if (this.length === 0) {
    return 0;
    }
    let total = 0;
    let current = this. head;

    while(current) {
      total += current.val;
      current = current.next;
    }
    return total / this.length;
  }
}

module.exports = LinkedList;
