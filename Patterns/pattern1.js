function printPattern(n){

    let string = "";

    for(let i = 0; i < n; i++){
        for(let j = 1; j < n; j++){
            string += "*";
        }
        string += "\n";
    }
    return string;
}
let result = printPattern(4);
console.log(result);

