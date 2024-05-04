// Provide 3 unique implementations of the following function in JavaScript.

// **Input**: `n` - any integer

// *Assuming this input will always produce a result lesser than `Number.MAX_SAFE_INTEGER`*.

// **Output**: `return` - summation to `n`, i.e. `sum_to_n(5) === 1 + 2 + 3 + 4 + 5 === 15`.

var sum_to_n_a = function(n) {
    if(typeof n === 'number' && n > 0) {
        let total = 0;
        total = (n * (n + 1)) / 2;
        return total;
    } else {
        console.log("Array size must be a number and greater than 0");
        return 0;
    }
};

var sum_to_n_b = function(n) {
    if(typeof n === 'number' && n > 0) {
        let total = 0;
        for (let i = 1; i <= n; i++) {
            total += i;
        }
        return total;
    } else {
        console.log("Array size must be a number and greater than 0");
        return 0;
    }
};

var sum_to_n_c = function(n) {
    if(typeof n === 'number' && n > 0) {
        if (n === 1) {
            return 1;
        }
        return n + sum_to_n_c(n - 1);
    } else {
        console.log("Array size must be a number and greater than 0");
        return 0;
    }
};

// Testing
const numbers = 10;
console.log("Result for sum_to_n_a: ",sum_to_n_a(numbers));
console.log("Result for sum_to_n_b: ",sum_to_n_b(numbers));
console.log("Result for sum_to_n_c: ",sum_to_n_c(numbers));