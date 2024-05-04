

function firstSolution(n: number): number {
	if (n === 0) return 0;
        return n + firstSolution(n - 1);
}

function secondSolution(n: number): number {
    return (n * (n + 1)) / 2;
}

function thirdSolution(n: number): number {
    let sum = 0;
    for (let i = 1; i <= n; i++) {
      sum += i;
    }
    return sum;
}
// Implementation 1: O(n) - Performs a linear amount of work due to the recursion depth being equal to n.
// Implementation 2: O(1) - Directly computes the sum using a mathematical formula without any iteration.
// Implementation 3: O(n) - Performs a constant amount of work for each integer from 1 to n.
