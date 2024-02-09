//implementing the tsx code
// creating classe for interfaces
//implementing the interface
var Employee = /** @class */ (function () {
    function Employee(name, age, email) {
        this.name = name;
        this.age = age;
        this.email = email;
    }
    Employee.prototype.greet = function (phrase) {
        console.log(phrase + "" + this.name);
    };
    return Employee;
}());
