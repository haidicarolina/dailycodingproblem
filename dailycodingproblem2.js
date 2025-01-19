/*
    Daily Coding Problem #2
    Given an array of integers, return a new array such that each element at index i of the new array is the product of all the numbers in the original array except the one at i.

    For example, if our input was [1, 2, 3, 4, 5], the expected output would be [120, 60, 40, 30, 24]. If our input was [3, 2, 1], the expected output would be [2, 3, 6].

    Follow-up: what if you can't use division?
*/

function productExceptSelf(arr) {
    const n = arr.length;

    const prefixProducts = new Array(n).fill(1);
    const suffixProducts = new Array(n).fill(1);
    const result = new Array(n).fill(1);

    for (let i = 1; i < n; i++) {
        prefixProducts[i] = prefixProducts[i - 1] * arr[i - 1];
    }

    for (let i = n - 2; i >= 0; i--) {
        suffixProducts[i] = suffixProducts[i + 1] * arr[i + 1];
    }

    for (let i = 0; i < n; i++) {
        result[i] = prefixProducts[i] * suffixProducts[i];
    }

    return result;
}

console.log(productExceptSelf([1, 2, 3, 4, 5])); // [120, 60, 40, 30, 24]
console.log(productExceptSelf([3, 2, 1]));       // [2, 3, 6]
