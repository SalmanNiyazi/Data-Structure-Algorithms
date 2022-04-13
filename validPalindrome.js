/*A phrase is a palindrome if, after converting all uppercase letters into lowercase letters and removing all non-alphanumeric characters, it reads the same forward and backward.
Alphanumeric characters include letters and numbers.

Given a string s, return true if it is a palindrome, or false otherwise.

*/

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
