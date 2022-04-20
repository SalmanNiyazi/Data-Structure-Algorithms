//Nearest greater element OR Next largest element 
class Stack {
    constructor() {
      this.stack = [];
    }
  
    isEmpty() {
      return this.stack.length === 0;
    }
  
    push(num) {
      this.stack.push(num);
    }
  
    pop() {
      if (this.isEmpty()) {
        throw "Stack Underflow";
      }
      return this.stack.pop();
    }
  
    peek() {
      if (this.isEmpty()) {
        return null;
      }
      return this.stack[this.stack.length - 1];
    }
  }
  
  function nearestGreaterToRight(arr) {
    const stack = new Stack();
    let result = [];
  
    for (let i = arr.length - 1; i >= 0; i--) {
      if (stack.isEmpty()) {
        result.push(-1);
        stack.push(arr[i]);
      } else if (!stack.isEmpty()) {
        while (!stack.isEmpty() && arr[i] > stack.peek()) {
          stack.pop();
        }
        if (stack.isEmpty()) {
          result.push(-1);
        } else {
          result.push(stack.peek());
        }
        stack.push(arr[i]);
      }
    }
  
    result.reverse();
    return result;
  }
  
  arr = [1, 3, 2, 4];
  console.log(nearestGreaterToRight(arr));