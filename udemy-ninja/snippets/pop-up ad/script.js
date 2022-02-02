const button = document.querySelector("button");
const popUp = document.querySelector(".container");
const closeButton = document.querySelector(".pop-up-close");

button.addEventListener("click", () => {
  popUp.style.display = "block";
});

closeButton.addEventListener("click", () => {
  popUp.style.display = "none";
});

popUp.addEventListener("click", () => {
  popUp.style.display = "none";
});
