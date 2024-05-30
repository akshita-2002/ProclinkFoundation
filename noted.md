# Intro To JAVASCRIPT

## Variable declaration  
- var x =10;
- to get type of the variable => typeof(x)
- Data types => string,number and boolean

```js
 var student = {
    name: "lohith",
    age: 20,
    company : "Proclink",
 }

 to get type of name => typeof(student.name);
```
> data type of array will return object as there is a key value pair of index and value.

- type of infinity will return number => typeof(infinity) = number

```js
var z;
typeof(z); // will return undefined
```

```js
var t = null
typeof(t) // will return object (it is a bug, was not fixed as many websites will crash if changed)

console.log(); // to get output printed 

```

## Type of Declarations

- var - 
```js
    var name = "Akshita";
    var name = "Akshita";
```
> redeclaration is considered
- let -
```js
     let name="AKshita";
     let name="Akshita";
```
> redeclaration not considered , shows error
- const - 
```js
    const name = "Akshita";
    const name = "Akshita";
```
> redeclaration is not valid , shows error

- 
```js
 const marks = [80,90,60];
 marks[1]=70;
 console.log(marks); // output will be 80,70,60
```
this is valid because the address is not changed the value stored at the address is changed.

- pythontutor => website to see the process of memory allocation when you run a code


   