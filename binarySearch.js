//Simple implementation of binary search in C++

#include<iostream>
using namespace std;

int binarySearch(int arr[], int size, int key){
    int start = 0;
    int end  = size-1;

    int mid = (start + (end-start)/2);

    while(start <= end){
        if(arr[mid] == key){
            return mid;
        }
        if(key >= arr[mid]){
            start = mid + 1;
        }
        else {
            end = mid - 1;
        }
        mid = (start + end)/2;  
    }
    return -1;
}

int main(){
        int even[6] = {2,4,6,8,12,18};
        int odd[5] = {3,8,11,14,16};

    int index  = binarySearch(odd, 6, 20);
    cout<< "Index of 14 is "<<index<<endl;


    return 0;
}

//time complexity of binary search is O(logn)





//program to implement recursive binary search in Javascript
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
