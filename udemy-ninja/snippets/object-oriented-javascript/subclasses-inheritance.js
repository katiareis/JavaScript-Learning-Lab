class User {
  constructor(username, email) {
    this.username = username;
    this.email = email;
    this.score = 0;
  }
  login() {
    console.log(`${this.username} just logged in`);
    return this;
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

//inheritance of class (subclass that extends other one)
class Admin extends User {
  //own property of the class belongs just to this Admin
  deleteUser(user) {
    users = users.filter((u) => u.username !== user.username);
    return this; // allow method chaining
  }
}

// const userOne = new User("luigi", "luigi@thenetninja.co.uk");
// const userTwo = new User("mario", "mario@thenetninja.co.uk");
// const userThree = new Admin("shaun", "shaun@thenetninja.co.uk");

console.log(userOne, userThree);

let users = [userOne, userTwo, userThree];
console.log(users);

userThree.deleteUser(userTwo);
console.log(users);

//Aditional property of the class
class Admin extends User {
  constructor(username, email, title) {
    super(username, email);
    this.title = title;
  }
  deleteUser(user) {
    users = users.filter((u) => u.username !== user.username);
    return this; // allow method chaining
  }
}

const userOne = new User("luigi", "luigi@thenetninja.co.uk");
const userTwo = new User("mario", "mario@thenetninja.co.uk");
const userThree = new Admin(
  "shaun",
  "shaun@thenetninja.co.uk",
  "black-belt ninja"
);

console.log(userOne, userThree);
