var isPalindrome = function(s) {
    let word = s.replace(/[\W_]+/g,"").toLowerCase();
    let leftP = 0; 
    let rightP = word.length - 1;
    
    while(leftP < rightP){
        if(word[leftP] !== word[rightP]){
            return false;
        }
            leftP++; 
            rightP--;
        
}
    return true;
};
console.log(isPalindrome("r"));
