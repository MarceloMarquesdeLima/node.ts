"use strict";
const getUser = (users) => {
    return `${users.firstName} ${users.lastName}, age: ${users.age}`;
};
/*let users = {
  firstName: 'Marcelo',
  lastName: 'Marques',
  age: 41
}

console.log(getUser(users));*/
class Person {
    constructor(firstN, lastN, ageU) {
        this.firstName = firstN;
        this.lastName = lastN;
        this.age = ageU;
    }
    getFullName() {
        return `${this.firstName} ${this.lastName}`;
    }
}
let person = new Person('Marcelo', 'Marques', 41);
console.log(getUser(person));
