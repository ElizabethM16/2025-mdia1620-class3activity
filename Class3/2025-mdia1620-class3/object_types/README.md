### What Are Object Types?

Object types are like **containers** or **boxes** that can hold **a bunch of stuff** inside. Unlike primitive types (which are small and simple), object types can be **big and full of different things**—like toys in a toy box!

They help organize and group data together.

---

Here are the **main object types**, explained simply:

---

### 1. **Object** – A Box with Labeled Drawers

**Example:** `{ name: "Mario", age: 40 }`  
📦 *An object is like a box with labels (called "keys") and stuff inside (called "values").*

```javascript
let person = {
  name: "Mario",
  age: 40
};
```

*You can store lots of info in one place, like a character’s name, age, and power level!*

---

### 2. **Array** – A List of Things

**Example:** `[ "apple", "banana", "orange" ]`  
📋 *An array is like a to-do list or a lineup of toys. Each item has a number spot (starting from 0).*

```javascript
let fruits = ["apple", "banana", "orange"];
```

🔢 *You can count them and get them by their number: fruits[0] is "apple"*

---

### 3. **Function** – A Machine That Does Stuff

**Example:** `function sayHi() { console.log("Hi!"); }`  
⚙️ *A function is like a robot or machine. You give it something, and it does a job.*

```javascript
function greet() {
  console.log("Hello!");
}
```

*You can “call” a function and it runs its code like pushing a button!*

---

### 4. **Date** – A Calendar Clock

**Example:** `new Date()`  
📆 *Used to get the date and time, like when something happened.*

```javascript
let today = new Date();
```

*It can tell you what day it is, the time, or your birthday.*

---

### 5. **RegExp (Regular Expression)** – A Pattern Finder

**Example:** `/cat/`  
*This is like a smart detective that looks for patterns in words.*

```javascript
let pattern = /cat/;
```

*Used to check if a word contains something special, like “cat” in “catalog”.*

---

### Summary Table:

| Type     | What it's like                         | Example              |
| -------- | -------------------------------------- | -------------------- |
| Object   | A box with labeled drawers             | `{ name: "Luigi" }`  |
| Array    | A list of things                       | `[1, 2, 3]`          |
| Function | A robot or machine that does something | `function jump() {}` |
| Date     | A clock/calendar                       | `new Date()`         |
| RegExp   | A pattern-finder or word detective     | `/hello/`            |