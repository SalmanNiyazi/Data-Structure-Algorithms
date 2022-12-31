//Stack Implementation
 class Stack{
     constructor(){
         this.items = []
         this.count = 0
     }
     //add element to top of stack
     push(element){
         this.items[this.count] = element
         console.log(`${element} added to ${this.count}`)
         this.count += 1
         return this.count -1
     }
     //return and remove top element in stack 
     //return undefined if stack is empty
     pop(element){
         if(this.count == 0) 
         return undefined
         let deleteItem = this.items[this.count-1]
         this.count -= 1
         console.log(`${deleteItem} removed`)
         return deleteItem
 }
    //check top element on stack
    peek(element){
        console.log(`Top element is ${this.items[this.count-1]}`)
        return this.items[this.count-1]
    }
    //check if stack is empty or not
    isEmpty(element){
        console.log(this.count == 0 ? `Stack is empty`:'Stack is not empty')
        return this.count == 0
    }
    //check the size of stack
    size(element){
        console.log(`Size of stack is ${this.count}`)
        return this.count
    }
    
}
 const stack = new Stack()
  
    stack.push(100)
    stack.push(200)

    stack.push(300)
    stack.size()
    stack.isEmpty()
    stack.peek()
    stack.pop()
    stack.pop()

