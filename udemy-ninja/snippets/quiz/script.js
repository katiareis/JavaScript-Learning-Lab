const cringeAnswers = ["D", "B", "A", "C", "A"];
const form = document.querySelector(".quiz-form");
const result = document.querySelector(".result");
const cringeLevel = document.querySelector(".cringeLevel");

form.addEventListener("submit", function (e) {
  e.preventDefault();

  let score = 0;
  //Gets form values
  const userAnswers = [
    form.q1.value,
    form.q2.value,
    form.q3.value,
    form.q4.value,
    form.q5.value,
  ];

  //check answers
  userAnswers.forEach((answer, index) => {
    if (answer === cringeAnswers[index]) {
      score += 20;
    }
  });

  //console.log(score);

  // Display Score on page
  scrollTo(0, 0);
  result.querySelector("span").textContent = `${score}%`;
  result.classList.remove("display-nome");

  //result animation
  let output = 0;
  const timer = setInterval(() => {
    result.querySelector("span").textContent = `${output}%`;
    if (output === score) {
      clearInterval(timer);
    } else {
      output++;
    }
  }, 10);
});
