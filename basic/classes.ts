class User {
  /* readonly firstName: string;
  lastName: string;
  protected age: number;*/

  /*private firstName: string;
  private lastName: string;
  private age: number;*/

  protected firstName: string;
  protected lastName: string;
  protected age: number;

  constructor(firstName: string, lastName: string, age: number){
    this.firstName = firstName;
    this.lastName = lastName;
    this.age = age;
  }

  public getFullName() {
    return `${this.firstName} ${this.lastName}`;
  }

  /*
  getFullName() {
    return `${this.firstName} ${this.lastName}`;
  }

  private getFullName() {
    return `${this.firstName} ${this.lastName}`;
  }
  */
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

class Admin extends User{
  public getFullName() {
    return `Dr. ${this.firstName} ${this.lastName}`;
  }
}
let admin = new Admin('Marcelo', 'Marques', 41);
console.log(admin.getFullName());
