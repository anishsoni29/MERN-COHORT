//use of interfaces
interface User {
  firstName: string;
  lastName: string;
  age: number;
}

function isLegal(user: User) {
  if (user.age >= 18) {
    return true;
  } else {
    return false;
  }
}

function greet(user: User) {
  console.log("Hello " + user.firstName + " " + user.lastName);
}

isLegal({
  firstName: "Anish",
  lastName: "Soni",
  age: 22,
});
