/* Find Method */

const scores = [10, 5, 0, 40, 60, 10, 20, 70];

// Short code
const firstHighScore = scores.find((score) => score > 50);

console.log(firstHighScore);

//Long code
// const firstHighScore = scores.find((score) => {
//   return score > 50;
// });

// console.log(firstHighScore);
