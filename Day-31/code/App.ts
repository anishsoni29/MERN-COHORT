//types and interfaces
//types ==> either number or string; : UNIONS AND INTERSECTIONS
//interfaces ==> enforces implementation of certain methods.

type GreetArc = number | string;

function greet(id: GreetArc) {
  console.log(id);
}

interface Person {
  age: Number;
  name: String;
  greet(phrase: string): void;
}

class Employee implements Person {
  name: String;
  age: Number;

  constructor(name: String, age: Number) {
    this.name = name;
    this.age = age;
  }

  greet(phrase: string) {
    console.log(phrase + "" + this.name);
  }
}

const e = new Employee("Anish", 22);
console.log(e.greet("Hi there"));
