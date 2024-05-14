const User = {
  _email: "h@hc.com",
  _password: "abc",

  get email() {
    return this._email.toUpperCase();
  },

  set email(value) {
    this._email = value;
  },
};

const tea = Object.create(User);
const chai = Object.create(User);
chai.email = "hello@gmail.com";
console.log(chai.email);
