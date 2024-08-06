What is hoisting ?
 Answer :
 Hoisting is a JavaScript mechanism where variable and function declarations are moved to the top of their containing scope during the compilation phase, before the code execution begins. This means that you can use variables and functions before they are actually declared in the code. However, only the declarations are hoisted, not the initializations.

1. Variable Hoisting:

When variables are declared using var, their declaration is hoisted to the top of their function or global scope. However, their initialization remains in place.

Variables declared with let and const are also hoisted, but they are not initialized until the code execution reaches their declaration. This creates a "temporal dead zone" from the start of the block until the declaration is encountered.

2. Function Hoisting:

Function declarations are completely hoisted, meaning both the function name and its definition are moved to the top of their scope.

Function expressions, however, are treated like variable assignments and only the variable declaration is hoisted, not the function definition.