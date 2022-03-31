//program to implement recursive binary search
//A recursive binary search function that returns location of x in given array arr[l...r], if present otherwise -1.
function binarySearch(arr,l,r,x){
    if(r >= 1){
        let mid = l + Math.floor((r-1)/2);
    }
    //if element is present at middle then return itself
    if(arr[mid] == x){
        return mid;
    }
    //if element is smaller than mid then it can only be present in left subarray
    if(arr[mid] > x){
        return binarySearch(arr, l, mid-1, x)
    }//Else the element is present only in right subarray
    else{
        return binarySearch(arr, l, mid+1, x)
    }
    //We reach here when element is not present in array
    return -1;
}

let arr = [2,3,4,10,40];
let x = 10;
let n = arr.length;
let result = binarySearch(arr, 0, n-1, x);
(result == -1) ? console.log("Element is not present in array") : console.log("element is present at index" + result);