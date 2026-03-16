// Helper: Insert an element at the bottom of the array (acting as a stack)
function pushToBottom(stack, x) {
  // Base case: if the stack is empty, push the element
  if (stack.length === 0) {
    stack.push(x);
    return;
  }

  // Recursive step: pop top, recurse, then push top back
  const temp = stack.pop();
  pushToBottom(stack, x);
  stack.push(temp);
}

// Main: Reverse the stack (array) using recursion
function reverse(stack) {
  // Base case: if the stack is empty, return
  if (stack.length === 0) {
    return;
  }

  // Recursive step: pop top, reverse remaining, insert top at bottom
  const temp = stack.pop();
  reverse(stack);
  pushToBottom(stack, temp);
}

// --- Execution ---

const str = "hello world";

// 1. Initialize stack using a simple array
let stack = [];

// 2. Push characters onto the stack
for (const char of str) {
  stack.push(char);
}

// 3. Reverse the array acting as a stack
reverse(stack);

// 4. Pop everything to verify (or just join the array directly)
let result = "";
while (stack.length > 0) {
  result += stack.pop();
}

console.log(result);
// Expected Output: "dlrow olleh"
