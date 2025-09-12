Preview Link: https://tanjil37.github.io/Assignment-06-Green-Earth/


## 1) Difference between `var`, `let`, and `const`

| Feature         | `var`                          | `let`                           | `const`                        |
|-----------------|--------------------------------|----------------------------------|--------------------------------|
| Scope           | Function-scoped                | Block-scoped (`{ }`)             | Block-scoped (`{ }`)           |
| Redeclaration   | ✅ Allowed                     | ❌ Not allowed (same scope)      | ❌ Not allowed                  |
| Reassignment    | ✅ Allowed                     | ✅ Allowed                       | ❌ Not allowed                  |
| Hoisting        | ✅ Hoisted (initialized `undefined`) | ✅ Hoisted (TDZ)            | ✅ Hoisted (TDZ)               |
| Initialization  | Optional                       | Optional                        | Mandatory                      |

---

## 2) Difference between `map()`, `forEach()`, and `filter()`

| Method     | Returns          | Purpose                                     | Example |
|------------|------------------|---------------------------------------------|---------|
| `map()`    | New array        | Transform each element                      | `[1,2,3].map(n => n*2)` → `[2,4,6]` |
| `forEach()`| `undefined`      | Perform action for each element (no return) | `[1,2,3].forEach(n => console.log(n))` |
| `filter()` | New array        | Keep elements that pass a condition         | `[1,2,3,4].filter(n => n%2===0)` → `[2,4]` |

---

## 3) Arrow Functions in ES6

- Shorter syntax for functions.
- Lexical `this` (inherits `this` from parent scope).
- Cannot be used with `new`.

```js
// Normal function
function add(a, b) {
  return a + b;
}

// Arrow function
const add = (a, b) => a + b;
```

## 4) Destructuring Assignment in ES6

- Extract values from arrays or objects.

```
// Array destructuring
const arr = [10, 20, 30];
const [a, b] = arr; // a=10, b=20

// Object destructuring
const user = { name: "Tanjil", age: 22 };
const { name, age } = user;

// With default value
const { city = "Chattogram" } = user;
```
## 5) Template Literals in ES6

- Use backticks (`).

- Allow multi-line strings and string interpolation (${}).

```
const name = "Tanjil";
const age = 22;

// Concatenation
const intro1 = "My name is " + name + " and I am " + age + " years old.";

// Template literal
const intro2 = `My name is ${name} and I am ${age} years old.`;

console.log(intro2);
```