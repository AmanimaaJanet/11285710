
/**
 * Transforms an array of numbers by squaring even numbers and tripling odd numbers.
 * @param {number[]} arr - The array of numbers to process.
 * @returns {number[]} - The new array with transformed numbers.
 */
function processArray(arr) {
    return arr.map(num => num % 2 === 0 ? num * num : num * 3);
}

// Example usage
const inputArray = [19, 20, 21, 22, 23];
 const result = processArray(inputArray);
console.log(result); // Output: [400, 63, 484, 69, 576]




//task 2


/**
 * Transforms an array of numbers by squaring even numbers and tripling odd numbers.
 * @param {number[]} arr - The array of numbers to process.
 * @returns {number[]} - The new array with transformed numbers.
 */
function processArray(arr) {
    return arr.map(num => num % 2 === 0 ? num * num : num * 3);
}

/**s
 * Modifies an array of strings based on a corresponding array of numbers.
 * @param {string[]} strings - The array of strings to format.
 * @param {number[]} numbers - The array of numbers to guide formatting.
 * @returns {string[]} - The new array with formatted strings.
 */
function formatArrayStrings(strings, numbers) {
    if (strings.length !== numbers.length) {
        throw new Error('Arrays must be of the same length');
    }
    
    return strings.map((str, index) => {
        return numbers[index] % 2 === 0 ? str.toUpperCase() : str.toLowerCase();
    });
}

// Example usage
const strings = ["God", "is", "good", "all", "time"];
const numbers = [19, 20, 21, 22, 23];
const processedNumbers = processArray(numbers);
const formattedStrings = formatArrayStrings(strings, processedNumbers);

console.log('Processed Numbers:', processedNumbers);  
console.log('Formatted Strings:', formattedStrings);  