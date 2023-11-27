function isBalanced(s) {
    let stack = [];
    let openBrackets = { '(': ')', '[': ']', '{': '}' };
  
    for (let char of s) {
      if (openBrackets[char]) {
        // If it's an opening bracket, push its corresponding closing bracket onto the stack
        stack.push(openBrackets[char]);
      } else if (char === ')' || char === ']' || char === '}') {
        // If it's a closing bracket, check if it matches the top of the stack
        if (stack.pop() !== char) {
          return false;
        }
      }
    }
  
    // Check if there are any unclosed brackets left in the stack
    return stack.length === 0;
  }
  
  // Test examples
  console.log(isBalanced("hello")); // true (no brackets)
  console.log(isBalanced("(hi) [there]")); // true
  console.log(isBalanced("(hi [there])")); // true
  console.log(isBalanced("(((hi)))")); // true
  console.log(isBalanced("(hello")); // false (bracket left open at end)
  console.log(isBalanced("(nope]")); // false (wrong type closed)
  console.log(isBalanced("((ok) [nope)]")); // false (closed out of 