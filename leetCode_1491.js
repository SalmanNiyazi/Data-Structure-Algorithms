/*You are given an array of unique integers salary where salary[i] is the salary of the ith employee.

Return the average salary of employees excluding the minimum and maximum salary. Answers within 10-5 of the actual answer will be accepted.

 */
/**
 * @param {number[]} salary
 * @return {number}
 */
 var average = function(salary) {
    let max = Math.max(...salary)
    let min = Math.min(...salary)
    let sum = salary.reduce((a,b) => a + b)
    
    sum -= max
    sum -= min
    
    return sum / (salary.length - 2)
};

//optimal memory usage solution
var average = function(salary) {
    salary = salary.sort((a,b) => a-b);
    let result  = salary.reduce((prev,curr) => prev +=curr);
    result = (result - salary[0] - salary [salary.length-1])/(salary.length-2);
    return result.toFixed(5);
};