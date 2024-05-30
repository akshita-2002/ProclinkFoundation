# Intro To JAVASCRIPT

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
 const t1 = [40,50,60];
 const t2=t1; //the changes made in either will effect the other
 ```

 - copy by value
```js
 var q1 = [100,200];
 var q2 = [...q1]; //only the values of q1 are copied the changes made in q1 will not effect q2 .The ... is called spread operator.

 var q3 = [60,...q1,90,40]; //output: 60,100,200,90,40
```

 ## DIFFERENT for LOOPS

 - for loop-more control
 ```js
 const marks = [80,90,100];
for(let i = 0;i<marks.length;i++){
        console.log("Index: ",i,"Marks: ",marks[i]);
}
```
 - for..of - readable and cleaner but no control over indexes
 ```js
 for(let mark of marks){
    console.log("Mark:",mark);
 }
 ```

 - for..in - more readable and simple nut can't increase index more than one
 ```js
 for(let idx in marks){
    console.log("Index: ",idx,"Marks:",marks[idx]);
 }
 ```
