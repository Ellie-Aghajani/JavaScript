//write a person object which you can access methods of an object and set its vallues.
//apply simple error handling
//check typeof input
//check if they entered both first and last name

const person = {
  firstName: "Ellie",
  lastName: "Aghajani",
  get fullName() {
    return `${this.firstName} ${this.lastName}`;
  },
  set fullName(input) {
    if (typeof input !== "string") {
      throw new Error("Enter valid first and Last name");
    }

    const parts = input.split(" ");
    if (parts.length !== 2) {
      throw new Error("Enter both first and last name");
    }
    this.firstName = parts[0];
    this.lastName = parts[1];
  },
};

try {
  person.fullName = "";
  console.log(person.fullName);
} catch (e) {
  console.log(e.message);
}
