//Filter Array
const scores = [10, 30, 15, 25, 50, 40, 5];

/* Scores lower than 20 */
//Short code
const lowScores = scores.filter((score) => score < 20);

/* Scores over 20 */
//Long code
const highScores = scores.filter((score) => score > 20);
scores.filter((score) => {
  return score > 20;
});

console.log(highScores, lowScores);

/**************************************************************************************************/

//Filter Object
const users = [
  { name: "shaun", premium: true },
  { name: "yoshi", premium: false },
  { name: "mario", premium: false },
  { name: "chun-li", premium: true },
];

//Array of premium users
//Short code
const premiumUsers = users.filter((user) => user.premium);
console.log(premiumUsers);

//Long code
// const premiumUsers = users.filter((user) => {
//   return user.premium;
// });
//console.log(premiumUsers);
