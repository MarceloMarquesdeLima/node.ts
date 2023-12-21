"use strict";
class User {
    constructor(firstName, lastName, age) {
        this.firstName = firstName;
        this.lastName = lastName;
        this.age = age;
    }
    getFullName() {
        return `${this.firstName} ${this.lastName}`;
    }
}
let user = new User('Marcelo', 'Marques', 41);
//user.firstName = 'teste';
//user.lastName = 'teste';
//user.age = 'teste';
console.log(user);
//console.log(user.firstName);
//console.log(user.lastName);
//console.log(user.age);
console.log(user.getFullName());
class Admin extends User {
    getFullName() {
        return `Dr. ${this.firstName} ${this.lastName}`;
    }
}
let admin = new Admin('Marcelo', 'Marques', 41);
console.log(admin.getFullName());
