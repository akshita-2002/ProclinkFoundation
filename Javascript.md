# INTRO To JAVASCRIPT

- javascript code is written within the tag script before the closing body tag at the end.

## VARIABLE DECLARATION

- var x =10;
- to get type of the variable => typeof(x)
- Data types => string ,number, boolean , object, undefined

```js
 var student = {
    name: "lohith",
    age: 20,
    company : "Proclink",
 }

 to get type of name in the object => typeof(student.name);
```

> data type of array will return object as there is a key value pair of index and value.

- type of infinity will return number => typeof(infinity) = number

```js
var z;
typeof z; // will return undefined
```

```js
var t = null;
typeof t; // will return object (it is a bug, was not fixed as many websites will crash if changed)

console.log(); // to get output printed
```

## TYPES OF DECLARATIONS

- var -

```js
var name = "Akshita";
var name = "Akshita";
```

> redeclaration is considered

- let -

```js
let name = "Akshita";
let name = "Akshita";
```

> redeclaration not considered , shows error

- const -

```js
const name = "Akshita";
const name = "Akshita";
```

> redeclaration is not valid , shows error

> Reassignment is possible in var and let but not const

-

```js
const marks = [80, 90, 60];
marks[1] = 70;
console.log(marks); // output will be 80,70,60
```

this is valid because the address is not changed the value stored at the address is changed.

- pythontutor => website to see the process of memory allocation when you run a code

## SCOPE

- Lifetime of variable => where the variable is born and till where it has lifetime.

- when variable is not in use -> goes to garbage collector

```js
       {
            var x1 = 10;
            let x2 = 20;
        }
        console.log(x1); // prints 10
        console.log(x2); // gives error that x2 is not     defined

- let and const  are block scope , var is not a block scope. Var is a function scope.
- block scope means the scope is only between the curly brackets.
```

- undefined -> its a value
- not defined is error

- function declaration

```js
function fun() {
  var t1 = 10;
  let t2 = 20;
}

console.log(t1); // gives error that t1 is not defined
console.log(t2); // gives error that t2 is not defined
```

- example

```js

function drivingTest(age){
    if(age > 18){
        let msg = "eligible";
    }else{
        let msg = "not eligible";
    }

    console.log("are" + msg);
}
drivingTest(20);

Output : gives error as not defined as scope of let is within block
```

## TYPECASTING/COERCION

- Javascript has automatic typecasting (implicit cohesion)

```js
var x1 = 3;
var x2 = "5";
console.log(x1+x2); //35
console.log(x1-x2); //-2

//x1+x2 => operator overloading, as + has two options concatenation and addition , concatenation is given higher priority than addition,hence x1 is typecasted to int.

[2,4,5]+"abc" //output : '2,4,5abc'
[]+[] //output : ''
null+5 //output : 5
4 * "5a" //Output : NaN (Not a number)
```

- Explicit cohesion

```js
var x1 = 3;
var x2 = "5";
console.log(x1 + parseInt(x2)); //8
console.log(x1 - x2);

//parseInt()=> ignores decimals, for decimals use parseFloat()
```

> typeof(NaN) => number

## COMPARISIONS

```js
var g1 = 5;
var g2 = "5";
console.log(g1 == g2); //compares after type conversion to same data type
console.log(g1 === g2); //compares without type conversion
```

> === is faster than == as == has a extra process of type conversion

## TYPES OF FUNCTIONS

- Advantages of using functions

  - Readability
  - Modularity
  - Reusability
  - changes made in one place reflects everywhere

- Normal Function

```js
//function declaration
function double(n) {
  return n * 2;
}
//function call
console.log(double(10));
// n is the parameter
// 10 that is passed to n is argument
```

- Arrow Function

```js
const double = (n) => {
  return n * 2;
};
```

-if one line of code

```js
const double = (n) => n * 2;
```

-two parameter function

```js
const sum1 = (a, b) => a + b;
```

- Anonymous Function
- IIFE (Pattern)

### MEASURING CODE QUALITY

- 5 PILLARS
  - Readability (others must be able to read)
  - Maintainability - code debts
  - Extensibility (new features should be easily added)
  - Testability ( must be testable)
  - Performance (space and time complexity)

## COPY BY VALUE & COPY BY REFERENCE

- Copy by reference is copying the address

```js
const t1 = [40, 50, 60];
const t2 = t1; //the changes made in either will effect the other
```

- copy by value

```js
var q1 = [100, 200];
var q2 = [...q1]; //only the values of q1 are copied the changes made in q1 will not effect q2 .The ... is called spread operator.

var q3 = [60, ...q1, 90, 40]; //output: 60,100,200,90,40
```

## DIFFERENT for LOOPS

- for loop-more control

```js
const marks = [80, 90, 100];
for (let i = 0; i < marks.length; i++) {
  console.log("Index: ", i, "Marks: ", marks[i]);
}
```

- for..of - readable and cleaner but no control over indexes

```js
for (let mark of marks) {
  console.log("Mark:", mark);
}
```

- for..in - more readable and simple nut can't increase index more than one

```js
for (let idx in marks) {
  console.log("Index: ", idx, "Marks:", marks[idx]);
}
```

## ES6 Features

- ### let & const
- ### (```)TEMPLATE LITERAL

```js
function fullname(firstname, lastname) {
  return "Welcome " + lastname + "," + firstname + "!!";
}
```

template literal can be used to make this code more readable

```js
//Refactoring - quality better & functionality same
function fullname(firstname, lastname) {
  return `Welcome ${lastname}, ${firstname} !!`;
} //called as interpolation
```

` => supports multiline string

- ### (...)SPREAD OPERATOR
- ### (...)REST OPERATOR

```js
var[t1,t2,...t3]=[10,50,60,70,50,80,90]; => t3=60,70,50,80,90 //colllects the values 
//if the ... is before = then it is rest and if it is to the right of = then spread
```
- ### DESTRUCTURING
  - unpacking the elements in a array

```js
const [t1, t2] = [100, 200]; // t1=100 , t2=200

const [t1, t2, t3] = [100, 200];
console.log(t1, t2, t3); // t3 will be undefined
```

```js
//destructuring
const [t1, t2, t3 = 80] = [100, 200];
console.log(t1, t2, t3); // t1=100,t2=200,t3=80 => we are unpacking the array ,t3=80 is called default value
// default will taken only when t3 is undefined
```

```js
const [t1, t2, t3 = 80] = [100, 200, 500];
console.log(t1, t2, t3); // t1=100, t2=200, t3=500 as t3 is not undefined
```

```js
const [t1, t2, t3 = 80] = [100, 200, null];
console.log(t1, t2, t3); //t1=100 , t2=200, t3=null as null is also a value
```

```js
const [t1, t2, t3 = 80] = [100, 200, undefined];
console.log(t1, t2, t3); //t1=100, t2=200 , t3=80

//holes can be used to skip the value
const [, t1, t2, t3 = 80] = [100, 200, null]; //holes
console.log(t1, t2, t3); //t1=200, t2=null , t3=80
```

- Oject Destructuring

```js
const { name, networth, power } = {
  name: "Tony Stark",
  house: "Canada",
  networth: 100,
  power: "Fight",
};

console.log(name); //instead of console.log(avenger.name)
console.log(networth);
console.log(power);
console.log(skill); //undefined
```

```js
const {
  name,
  networth,
  power,
  skill = ["genius", "playboy"],
} = {
  name: "Tony Stark",
  house: "Canada",
  networth: 100,
  power: "Fight",
};

console.log(skill); //["genius","playboy"];
```

- ### CLASS
- ### ARROW FUNCTION
- ### NUMERIC SEPARATORS 1_00_00_000
```js
  var num = 1_00_00_000 => 10000000
```
- ### (??) NULLISH COHERIENCE
   - The nullish coalescing (??) operator is a logical operator that returns its right-hand side operand when its left-hand side operand is null or undefined, and otherwise returns its left-hand side operand.
  - the falsy table has only two values for this operator => null and undefiend
  ```js
  var avgtemp = 20;
  var temp = 0 ?? avgtemp; // temp = 0



## MORE ON OBJECTS

```js
let salaries = {
  John: 100,
  Pete: 300,
  Mary: 250,
};

Object.keys(salaries); // Output: ['John','Pete','Mary']
Object.values(salaries); // Output: [100,300,250]
```

## TERNARY OPERATOR

```js
5 > 4 ? "Awesome" : "Cool";
```

## BINARY OPERATOR

- Airthmetic +,-,/,*
- Logical &&, || , ^
- Relational >,<,>=,<=,==,===

```js
var height = 150;
var final = 140 || height; // final = 140
```
```js
var height = 150;
var final = 0 || height;  //final = 150
```
## UNARY OPERATOR

- ++,--
- !

## TRUTHY vs FALSY
- if the value gets converted to true => truthy

```js
let x="cool";

if(x){
  console.log("Hey 😊😊");
} else{
  console.log("Nope 👻");
}      // output : Hey 😊😊 , implicit conversion is taking place, x is converting to boolean
```
- for null,NaN,"",0 => it gets converted to false => falsy => check the document if there then falsy otherwise truthy 
https://developer.mozilla.org/en-US/docs/Glossary/Falsy
```js
let x=null;

if(x){
  console.log("Hey 😊😊");
} else{
  console.log("Nope 👻");
}  
```
```js
let x=[];

if(x){
  console.log("Hey 😊😊");
} else{
  console.log("Nope 👻");
} // output: Hey
```


## METHODS
- toUpperCase()
```js
"Nithin".toUpperCase();
```
- split()
```js
"This is a beautiful day".split(" ") //OUtput=> ['This','is','a','beautiful','day']

"This is a beautiful day".split("") // splits every character and stores in array
```
- join()
```js
['This','is','a','beautiful','day'].join("|") //Output=> 'This|is|a|beautiful|day'
```
- push()
```js
[1,2,3].push(4,5) => [1,2,3,4,5]
```
- reverse() => reverses the array

- slice()
```js
[1,2,3,4,5].slice(2,3) //output [3] => extracts elements starting from index 2 excluding 3

[1,2,3,4,5].slice(0,5) // this gives all elements in array => used to copy
```

## CODING STANDARDS
- coding standards are meant to have unifromity through out your code base
- variables => camel case and understandable / descriptive. Cannot start with numbers or use reserved keywords. Cannot use special symbols($,@,#,!)  except "_". 
```js
let age = 50;
let studentName = "Akshita";
```
- classes => start with capital(Pascel case)
- DRY (dont repeat yourself) 
- choose 'let' over 'var', 'const' over 'let' => so that other developers know that it cannot be changed.
```js
let panCard = "BRP00067"; ❌
const PAN_CARD = "BRP00067"; ✅
const marks = [10,20,40]; ✅
```

## DOCUMENTATION
- Single comment
```js
//
```
- Multiple Comment
```js
/**
 * This is cool
 * function
 * 
 */
```
![alt text](<Screenshot (9).png>)
- this is called js doc
- @param means parameter
- number means datatype
- @returns {number} => the return type of function is also number.
- @example => give a example of the function


> ESLint => help to check errors in javascript. To enforce coding standards.