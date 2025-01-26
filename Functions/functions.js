// const hummus = function(factor) {
//     const ingredient = function(amount, unit, name){
//         let ingredientAmount = amount * factor;
//         if (ingredientAmount > 1) {
//             unit +="s";
//         }
//     }

//     console.log(`${ingredientAmount} ${unit} ${name}`);
    
// }
// function findSolution(target) {
//     // Helper function that recursively explores possible operations
//     function find(current, history) {
//         // Base case: if the current number equals the target, return the history
//         if (current == target) {
//             return history;
//         }
//         // Base case: if the current number exceeds the target, stop exploring this path
//         else if (current > target) {
//             return null;
//         }
//         // Recursive case: try adding 5 or multiplying by 3
//         else {
//             // Use null coalescing to return the first valid solution
//             return find(current + 5, `(${history} + 5)`) ?? find(current * 3, `(${history} * 3)`);
//         }
//     }
//     // Start the recursion with the initial number 1 and its history
//     return find(1, "1");
// }

console.log(findSolution(11)); // Output: ((1 + 5) + 5)

function findSolution(target) {
    function find(current, history) {
        if (current == target) {
            return history;

        }
        else if (current > target) {
            return null;
        }
        else {
            return find(current + 5, `(${history} + 5)`) ?? find(current*3, `(${history} * 3)`);

        }
    }

    return find(1, "1");
}

console.log(findSolution(27));

