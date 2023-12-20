// Numbers
let name_var = 123;
name_var = 1.2;
name_var = 0xFA;
console.log(name_var);

// Booleano
let active: boolean = true;
console.log(active);

// string
let firstNme = 'Marcelo';
let lastName = 'Marques';
let fullName: string = `${firstNme} ${lastName}`;
console.log(firstNme);
console.log(lastName);
console.log(fullName);

// Enums
/*enum ROLES {
  MANAGER,
  ADMIN,
  CEO,
  CTO
}
console.log(ROLES);
*/
enum ROLES {
  MANAGER = 'manager',
  ADMIN = 'Admin',
  CEO = 'CEO',
  CTO = 'CTO'
}

function setRole(role: ROLES): void{}

setRole(ROLES.ADMIN);

// arrays
let names = ['Marcelo', 'Marques', 'de Lima', true, 1982]
console.log(names);

let names1: string[] = ['Marcelo', 'Marques', 'de Lima']
console.log(names1);

let names2: Array<string> = ['Marcelo', 'Marques', 'de Lima']
console.log(names2);

let names3: Array<any> = ['Marcelo', 'Marques', 'de Lima', true, 1982]
console.log(names3);
