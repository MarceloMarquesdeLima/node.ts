interface UserInterface {
  firstName: string;
  lastName: string;
  age: number;

  getFullName(): string;
}

const getUser = (users: UserInterface): string => {
  return `${users.firstName} ${users.lastName}, age: ${users.age}`;
}

/*let users = {
  firstName: 'Marcelo',
  lastName: 'Marques',
  age: 41
}

console.log(getUser(users));*/

class Person implements UserInterface {
  firstName: string;
  lastName: string;
  age: number;

  constructor(firstN: string, lastN: string, ageU: number){
    this.firstName = firstN;
    this.lastName = lastN;
    this.age = ageU
  }

  getFullName(): string {
    return `${this.firstName} ${this.lastName}`;
  }
}

let person = new Person ('Marcelo', 'Marques', 41)
console.log(getUser(person));
