//write a function which you can access methods of an object and set its vallues.
//apply simple error analysis

const person = {
  firstName: "Ellie",
  lastName: "Aghajani",
  fullName() {
    return `${this.firstName} ${this.lastName}`;
  },
};
