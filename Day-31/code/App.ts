//implementing the tsx code
// creating classe for interfaces

//creating interface for the state
interface Person {
  name: String;
  age: Number;
  email: String;
  greet(phrase: String): void;
}

//implementing the interface
class Employee implements Person {
  name: String;
  age: Number;
  email: String;

  constructor(name: String, age: Number, email: String) {
    this.name = name;
    this.age = age;
    this.email = email;
  }

  greet(phrase: String) {
    console.log(phrase + "" + this.name);
  }
}
