//map an array
const prices = [20, 10, 30, 25, 15, 40, 80, 5];

/* Updates values */

//Short code
const salePrices = prices.map((price) => price / 2);
console.log(salePrices);

//Long code
// const salePrices = prices.map((price) => {
//   return price / 2;
// });

console.log(salePrices);

/********************************/
/* Map an object */

const products = [
  { name: "gold star", price: 20 },
  { name: "mushroom", price: 40 },
  { name: "green shells", price: 30 },
  { name: "banana skin", price: 10 },
  { name: "red shells", price: 50 },
];

const saleProducts = products.map((product) => {
  if (product.price > 30) {
    return { name: product.name, price: product.price / 2 };
  } else {
    return product;
  }
});

console.log(products, saleProducts);
