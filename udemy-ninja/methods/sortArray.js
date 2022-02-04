/* Sorting Method */

/* Put an array in order of score */

// example 1 - sorting strings alphabetically
const names = ["mario", "shaun", "chun-li", "yoshi", "luigi"];

// names.sort();
names.reverse();
console.log(names);

// example 2 - sorting numbers by first element order
const scores = [10, 50, 20, 5, 35, 70, 45];

//Short code - sorting numbers lower to higher
scores.sort((a, b) => b - a);

// scores.sort();
scores.reverse();
console.log(scores);

/* Put an object in order of score */

// example 3 - sorting objects
const players = [
  { name: "mario", score: 20 },
  { name: "luigi", score: 10 },
  { name: "chun-li", score: 50 },
  { name: "yoshi", score: 30 },
  { name: "shaun", score: 70 },
];

//Short code
players.sort((a, b) => b.score - a.score);

console.log(players);

//Long code
// players.sort((a,b) => {
//   if(a.score > b.score){
//     return -1;
//   } else if (b.score > a.score){
//     return 1;
//   } else {
//     return 0;
//   }
// });

//console.log(players);
