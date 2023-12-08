class BinaryTreeNode {
  constructor(val, left = null, right = null) {
    this.val = val;
    this.left = left;
    this.right = right;
  }
}

class BinaryTree {
  constructor(root = null) {
    this.root = root;
  }

  minDepth() {
    if (!this.root) return 0;
    
    function depth(node) {
      if (!node) return Infinity;
      if (!node.left && !node.right) return 1;
      return Math.min(depth(node.left), depth(node.right)) + 1;
    }

    return depth(this.root);
  }

  maxDepth() {
    function depth(node) {
      if (!node) return 0;
      return Math.max(depth(node.left), depth(node.right)) + 1;
    }

    return depth(this.root);
  }

  maxSum() {
    if (!this.root) return 0;  // Return 0 if the tree is empty

    let maxSum = -Infinity;
  
    function findMaxSum(node) {
      if (!node) return 0;
      let left = Math.max(0, findMaxSum(node.left));
      let right = Math.max(0, findMaxSum(node.right));
      maxSum = Math.max(maxSum, node.val + left + right);
      return node.val + Math.max(left, right);
    }
  
    findMaxSum(this.root);
    return maxSum;
  }

  nextLarger(lowerBound) {
    let result = null;

    function traverse(node) {
      if (!node) return;
      if (node.val > lowerBound && (result === null || node.val < result)) {
        result = node.val;
      }
      traverse(node.left);
      traverse(node.right);
    }

    traverse(this.root);
    return result;
  }

  areCousins(node1, node2) {
    if (!node1 || !node2 || node1 === node2) return false;

    function findDepthAndParent(node, target, depth = 0, parent = null) {
      if (!node) return null;
      if (node === target) return { depth, parent };

      let left = findDepthAndParent(node.left, target, depth + 1, node);
      let right = findDepthAndParent(node.right, target, depth + 1, node);

      return left || right;
    }

    let node1Info = findDepthAndParent(this.root, node1);
    let node2Info = findDepthAndParent(this.root, node2);

    return node1Info && node2Info && 
           node1Info.depth === node2Info.depth && 
           node1Info.parent !== node2Info.parent;
  }

  static serialize(tree) {
    function serializeHelper(node) {
      if (!node) return "null";
      return `${node.val},${serializeHelper(node.left)},${serializeHelper(node.right)}`;
    }

    return serializeHelper(tree.root);
  }

  static deserialize(str) {
    let arr = str.split(',');

    function deserializeHelper() {
      let val = arr.shift();
      if (val === "null") return null;
      let newNode = new BinaryTreeNode(parseInt(val));
      newNode.left = deserializeHelper();
      newNode.right = deserializeHelper();
      return newNode;
    }

    return new BinaryTree(deserializeHelper());
  }

  lowestCommonAncestor(node1, node2) {
    function findLCA(node) {
      if (!node || node === node1 || node === node2) return node;

      let left = findLCA(node.left);
      let right = findLCA(node.right);

      if (left && right) return node;
      return left || right;
    }

    return findLCA(this.root);
  }
}

module.exports = { BinaryTree, BinaryTreeNode };

