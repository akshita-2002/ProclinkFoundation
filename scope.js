// const books = [
//   { title: "Infinite Jest", rating: 4.5, genre: "Fiction" },
//   { title: "A Brief History of Time", rating: 4.8, genre: "Science" },
//   { title: "The catcher in the Rye", rating: 3.9, genre: "Fiction" },
//   { title: "Sapiens", rating: 4.9, genre: "History" },
//   { title: "Clean Code", rating: 4.7, genre: "Technology" },
// ];

// for (let i of books) {
//   if (i.rating > 4.7) {
//     console.log(i.title);
//   }
// }


// const employes = [
//     { id: 1, name: "Alice", grade: 78 },
//     { id: 2, name: "Bob", grade: 85 },
//     { id: 3, name: "Charlie", grade: 92 },
//     { id: 4, name: "David", grade: 88 },
//     { id: 5, name: "Eva", grade: 76 },
//   ];

// var all = [];

//   for(let i of employes){
//     if(i.grade>=80){
//        all.push({id:i.id,status:'Promoted'});
       
//     }
//   }

//   console.log(all);

 
const movies = [
    { title: "Inception", ratings: [5, 4, 5, 4, 5] },
    { title: "Interstellar", ratings: [5, 5, 4, 5, 4] },
    { title: "Dunkirk", ratings: [4, 4, 4, 3, 4] },
    { title: "The Dark Knight", ratings: [5, 5, 5, 5, 5] },
    { title: "Memento", ratings: [4, 5, 4, 5, 4] },
  ];


function getAvg(ratings){
    var sum = 0;
    for(let i=0;i<ratings.length;i++){
        sum+=ratings[i];
    }
    return sum/ratings.length;
}

var topRated = null;
var highAvg = 0;

for(var i=0;i<movies.length;i++){
    var avgRating = getAvg(movies[i].ratings);
    if(avgRating > highAvg){
        highAvg=avgRating;
        topRated = movies[i];
    } 
}

console.log(topRated.title);



