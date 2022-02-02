const form = document.querySelector(".sign-up-form");
const feedback = document.querySelector(".feedback");
const usernamePattern = /^[a-zA-Z0-9]{6,12}$/; //Accepts aA to zZ caracthers, numbers 0-9 and from 6 to 12 caracthers only.

//This is one way of getting the value from the field
//const userName = document.querySelector("#username");

//best pratice for this is add a submit EventListener to the form instead of the button and click event
form.addEventListener("submit", (e) => {
  //First thing to do is preventing the page from refreshing when we press the button submit
  e.preventDefault();
  //console.log(userName.value); //This is one way of getting the value from the field
  //console.log(form.username.value); //This is the second way of getting the value from the field

  /* Basic Validation */
  const username = form.username.value;

  if (usernamePattern.test(username)) {
    // feedback good info
    feedback.textContent = "that username is valid!";
  } else {
    // feedback help info
    feedback.textContent =
      "username must contain letters only and be between 6 to 12 characters long";
  }
});

/* Live Feedback */
form.username.addEventListener("keyup", (e) => {
  //console.log(e.target.value, form.username.value);//both ways get the same data
  if (usernamePattern.test(e.target.value)) {
    form.username.setAttribute("class", "success");
  } else {
    form.username.setAttribute("class", "error");
  }
});

/* Testing RegEx */

//const username = "katia1";
//const patternPwd = /[a-z]{6,}/; //Accepts a to z caracthers and 6 caracthers minimum, even if the word is in the middle of a sentence.
//const patternPwd = /^[a-z]{6,}$/; //Accepts a to z caracthers and 6 caracthers minimum only.
//const patternPwd = /^[a-zA-Z]{6,12}$/; //Accepts aA to zZ caracthers and from 6 to 12 caracthers long.
//const patternPwd = /^[a-zA-Z0-9]{6,12}$/; //Accepts aA to zZ caracthers, numbers 0-9 and from 6 to 12 caracthers long.
//onst patternPwd = /^.{6,12}$/; //Accepts aA to zZ caracthers, numbers 0-9, especial characters and from 6 to 12 caracthers long.

/*This is one way of getting the value from the field tested*/

//let result = username.search(patternPwd); ////This method returns 0 if the username matches and -1 if the username does not match. It really returns the position of the first character that matches
//console.log(result);

/*************************************************************************************************/
/*This is another way of getting the value from the field tested*/

// let result = patternPwd.test(username); //Test method returns true if the username matches

// if (result) {
//   console.log("Regex test passed :)");
// } else {
//   console.log("Regex test failed :(");
// }
