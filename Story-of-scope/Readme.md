Scoping rules of `let` & `var`

1. `for (let i = 0; i < 5; i++)`
- Behavior: `let` creates a block-scoped variable. Each iteration of the loop gets its own distinct i due to block scoping.

- Execution:
1. Iteration 1: `i` is `0`, and setTimeout schedules a log after 1000 ms.
2. Iteration 2: `i` is `1`, and setTimeout schedules another log after 1000 ms.
3. Iteration 3: `i` is `2`, and setTimeout schedules another log after 1000 ms.
4. Iteration 4: `i` is `3`, and setTimeout schedules another log after 1000 ms.
5. Iteration 5: `i` is `4`, and setTimeout schedules another log after 1000 ms.

- After 1000 ms, the scheduled setTimeout callbacks are executed. Each callback captures its own i value due to block scoping.

- Output:
- Logs: `0`, `1`, `2`, `3`, `4`

2. `for (var i = 0; i < 5; i++)`
- Behavior: `var` has function or global scope, so there is only one i variable shared across all iterations of the loop.

- Execution:
1. Iteration 1: `i` is `0`, and setTimeout schedules a log after 1000 ms.
2. Iteration 2: `i` is `1`, and setTimeout schedules another log after 1000 ms.
3. Iteration 3: `i` is `2`, and setTimeout schedules another log after 1000 ms.
4. Iteration 4: `i` is `3`, and setTimeout schedules another log after 1000 ms.
5. Iteration 5: `i` is `4`, and setTimeout schedules another log after 1000 ms.

- After the loop completes, `i` has the value `5` (because i increments to 5 and the loop condition fails).

- Output:
Logs: `5`, `5`, `5`, `5`, `5`

Explanation of Outputs

- `let` Output (`0`, `1`, `2`, `3`, `4`): Each setTimeout callback captures its own `i` due to block scoping. When setTimeout executes after 1000 ms, it logs the value of `i` that was present during that specific iteration of the loop.

- `var` Output (`5`, `5`, `5`, `5`, `5`): All setTimeout callbacks share the same `i`, which ends up being `5` after the loop finishes. Therefore, each setTimeout callback logs `5`.
