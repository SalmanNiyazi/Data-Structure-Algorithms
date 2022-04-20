//using reverse method
//keep in mind that reverse method will also modify the original array
let array = [12,43,1,2,6,7];
/*let newArray = array.reverse();
console.log(newArray);
*/
//some challenges want you to preserve the original array 
//lets see some methos that we can use to reverse an array without changing the original array

//using push method with a decrementing loop
/*let newArray = [];

for(let i = array.length-1; i >= 0; i--){
    newArray.push(array[i]);
}

console.log(newArray);
*/
//
function customReverse(originalArray) {

    let leftIndex = 0;
    let rightIndex = originalArray.length - 1;
  
    while (leftIndex < rightIndex) {
  
      // Swap the elements with temp variable
      let temp = originalArray[leftIndex];
      originalArray[leftIndex] = originalArray[rightIndex];
      originalArray[rightIndex] = temp;
  
      // Move indices to the middle
      leftIndex++;
      rightIndex--;
    }
  }
 let newArray = customReverse(array);
 console.log(newArray);