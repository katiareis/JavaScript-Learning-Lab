/* Reduce Method */

// reduce  method on array
// const scores = [10, 20, 60, 40, 70, 90, 30];

// const result = scores.reduce((accumulator, curruntValue) => {
//   if(curruntValue > 50){
//     accumulator++;
//   }
//   return accumulator;
// }, 0);

// console.log(result);

// reduce  method on object
const scores = [
  { player: "mario", score: 50 },
  { player: "yoshi", score: 30 },
  { player: "mario", score: 70 },
  { player: "crystal", score: 60 },
];

const marioTotal = scores.reduce((acc, curr) => {
  if (curr.player === "mario") {
    acc += curr.score;
  }
  return acc;
}, 0);

console.log(marioTotal);
