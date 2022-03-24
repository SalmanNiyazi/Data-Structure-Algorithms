let a = [1,2,4,3,6,1,2,7,9]
//we want to remove all the duplicates in the array
//First Approach: Brute force approach

let b = []//take a new empty array

let len = a.length;

for(let i = 0; i < len; i++){
    if(b.indexOf(a[i]) === -1){
        b.push(a[i]);
    }
}
console.log(b);

//complexity of this algorithm is very high i.e. close to n**2
//therefore we will try another algorithm

a.sort()//lets sort the array first
let temp;
for(let i = 0; i < len; i++){
    if(a[i] !== temp){
        b.push(a[i]);
        temp = a[i];
    }
}


console.log(b);

//Another approach using objects

Object = {};
for(let i of a){
    Object[i] = true;
}
console.log(Object);
