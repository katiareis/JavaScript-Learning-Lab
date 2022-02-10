//Store the method inside proto property
function User(username, email) {
  this.username = username;
  this.email = email;
}

User.prototype.login = function () {
  console.log(`${this.username} has logged in`);
  return this;
};

User.prototype.logout = function () {
  console.log(`${this.username} has logged out`);
  return this;
};

// const userOne = new User("ryu", "ryu@thenetninja.co.uk");
// const userTwo = new User("chun-li", "chun.li@thenetninja.co.uk");

console.log(userOne);

userOne.login().logout();

// admin
function Admin(username, email) {
  User.call(this, username, email);
}

Admin.prototype = Object.create(User.prototype);

Admin.prototype.deleteUser = function (user) {
  // delete the user
};

const userOne = new User("ryu", "ryu@thenetninja.co.uk");
const userTwo = new User("chun-li", "chun.li@thenetninja.co.uk");
const userThree = new Admin("shaun", "shaun@thenetninja.co.uk");

console.log(userThree);
