//Object Oriented JavaScript - Classes
// Class - Construct function

// the 'new' keyword
// 1 - it creates a new empty object {}
// 2 - it binds the value of 'this' to the new empty object
// 3 - it calls the constructor function to 'build' the object

class User {
  constructor(username, email) {
    //set up properties
    // this.username = 'mario';
    this.username = username;
    this.email = email;
    this.score = 0;
  }
  login() {
    console.log(`${this.username} just logged in`);
    return this; //in order to chain methods, we need to return the object
  }
  logout() {
    console.log(`${this.username} just logged out`);
    return this;
  }
  incScore() {
    this.score += 1;
    console.log(`${this.username} has a score of ${this.score}`);
    return this;
  }
}

const userOne = new User("luigi", "luigi@thenetninja.co.uk");
const userTwo = new User("mario", "mario@thenetninja.co.uk");

console.log(userOne, userTwo);

// userOne.login();
// userOne.logout();
// userTwo.login();
// userTwo.logout();

//Methods chaining
userTwo.login().incScore().incScore().logout();
