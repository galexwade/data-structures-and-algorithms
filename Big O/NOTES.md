What is good code?

1. Readablility
2. Scalability
   - Speed
   - Memory

Big O means when we grow bigger and bigger with our input, how much does the algorithm slow down? The less or slower it slows down, the better.

## BIG O's

EXCELLENT:

- O(1): Contant time - no loops.

GOOD:

FAIR:

- O(n): Linear time - for loops & while loops through "n" items.

HORRIBLE:

- O(n^2): Quadratic time - every element in a collection needs to be compared to every other element. Two nested loops.
- O(n!): Factorial time - you are adding a loop for every element.

## Rule Book

1. Rule 1: Always worst Case
2. Rule 2: Remove Constants
3. Rule 3: Different inputs should have different variables. O(a + b). A and B arrays nested would be
   O(a \* b)

- "+ (addition)" for steps in order
- "\* (multiplication)" for nested steps

4. Rule 4: Drop Non-dominant terms

Iterating through half a collection is still O(n)
Two separate collections: O(a \* b)

## What causes time in a function?

1. Operations (+, -, /, \*)
2. Comparisons (<, >, ==)
3. Looping (for, while)
4. Outside Function call (Function())

## What causes Space Complexity?

- Variables
- Data Structures
- Function Call
- Allocations

### Data Structures + Algorithms = Programs

## 3 Pillars of programming

1. Readable
2. Memory (Space Complexity)
3. Speed (Time Complexity)

## Space Complexity

Heap and Stack
