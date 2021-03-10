---
title: Runtime Complexity
order: 1
---

Describe the performance of an algorithm.

### Time complexity

Time complexity can be measured by taking a look at the iterations that is going on within the code

| Complexity    | Description      | Examples                                 |
| ------------- | ---------------- | ---------------------------------------- |
| O(1)          | Constant time    | Access of a key in Object (or map)       |
| O(log n)      | Logarithmic time | Most Search algos                        |
| O(n)          | Linear time      | Simple for loop iteration                |
| O(n \* log n) | QuasiLinear time | Most sort algos                          |
| O(n^2)        | Quadratic time   | Iteration of a matrix(Nested for loops)  |
| O(2^n)        | Exponential time | Pizza topping combination (google it)    |
| O(n+m)        |                  | Iterating over 2 different inputs        |
| O(n \* m)     |                  | Nested iteration over 2 different inputs |

### Space complexity

- Amount of memory an algorithm needs to complete the operation. Calculation is very similar to time complexity
- Space complexity is amount of space required by an algorithm (excluding input size) for a given input size.
