//write a person object which you can access methods of an object and set its vallues.
//apply simple error handling
//check typeof input
//check if they entered both first and last name

const person = {
  fn: "a",
  ln: "b",
  get full() {
    return `${this.fn} ${this.ln}`;
  },
  set full(value) {
    if (typeof value !== "string" || value.trim() === "") {
      throw new Error("invalid input");
    }

    const parts = value.split(" ");
    if (parts.length !== 2) {
      throw new Error("enter both fn and ln");
    }

    this.fn = parts[0];
    this.ln = parts[1];
  },
};

try {
  person.full = "";
} catch (e) {
  console.log(e.message);
}
