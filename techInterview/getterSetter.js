//write a function which you can access methods of an object and set its vallues.
//apply simple error analysis

const person = {
  firstName: "Ellie",
  lastName: "Aghajani",
  get fullName() {
    return `${this.firstName} ${this.lastName}`;
  },
  set fullName(input) {
    //check typeof input
    if (typeof value !== String) {
      throw new Error("Invalid input");
    }
    const parts = input.split(" ");
    if (parts.length !== 2) {
      throw new Error("Enter first and last name");
    }
    this.firstName = parts[0];
    this.lastName = parts[1];
  },
};

try {
  person.fullName = "E A";
} catch (e) {
  alert(e);
}
