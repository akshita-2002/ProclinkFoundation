//task6
// let sentence = "Hello world from JavaScript";
// let transformed = transformSentence(sentence);
// console.log(transformed); // Output: "JAVASCRIPT FROM WORLD HELLO"

// // function transformSentence(sentence){
// //     // Your code here
// //     var capital=sentence.toUpperCase();
// //     var arr = capital.split(" ");
// //     var reversearr = arr.reverse();
// //     return reversearr.join(" ");
// // }

// function transformSentence(sentence){
//         // Your code here
//         return sentence.toUpperCase().split(" ").reverse().join(" ");
//     }

// Task 7: Improving code quality

// function processNames(names) {
//     let result = [];
//     for (let i = 0; i < names.length; i++) {
//       let upperCaseName = names[i].toUpperCase();
//       let nameParts = upperCaseName.split(" ");
//       let joinedName = nameParts.join("_");
//       result.push(joinedName);
//     }
//     return result;
//   }

//   const namesArray = ["john doe", "jane smith", "alice jones"];
//   console.log(processNames(namesArray));

function processNames1(names) {
  let result = [];
  for (let i of names) {
    result.push(i.toUpperCase().split(" ").join("_"));
  }
  return result;
}

const namesArray1 = ["john doe", "jane smith", "alice jones"];
console.log(processNames1(namesArray1));
