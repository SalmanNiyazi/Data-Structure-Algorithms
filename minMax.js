//Write a program to return minimum and maximum in an array
let arr = [70,65,3,21,58,93,12,82,15,34,73,2,12];
//Brute force approach using two loops
/*let max = arr[0];
let min = arr[arr.length-1];
for(let i = 0; i < arr.length; i++){
    for(let j = arr.length-1; j >= 0; j--){
    if(arr[i] >= max){
        max = arr[i];
    }
    else if(arr[j] < min){
        min = arr[j];
    }
}
}
console.log(max);
console.log(min);
//lets solve this with another appraoch
*/
function getMinMax(arr,n){
    minimax = new Array();
    let i,min,max;

    //if there is only one element then return it as min and max both
    if(n==1){
        minimax.min = arr[0];
        minimax.max = arr[0];
        return minmax;
    }
    //if there are more than one elements, then initialiaze min and max

    if(arr[0] > arr[1]){
        minimax.min = arr[1];
        minimax.max = arr[0];
    }
    else{
        minimax.min = arr[0];
        minimax.max = arr[1];
    }
    for(i = 2; i < n; i++){
        if(arr[i] > minimax.max){
            minimax.max = arr[i];
        }
        else if(arr[i] < minimax.min){
            minimax.min = arr[i];
        }
    }
    return minimax;
}

let result = getMinMax(arr,13);
console.log(result);
