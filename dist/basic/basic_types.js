"use strict";
// Numbers
let name_var = 123;
name_var = 1.2;
name_var = 0xFA;
console.log(name_var);
// Booleano
let active = true;
console.log(active);
// string
let firstNme = 'Marcelo';
let lastName = 'Marques';
let fullName = `${firstNme} ${lastName}`;
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
var ROLES;
(function (ROLES) {
    ROLES["MANAGER"] = "manager";
    ROLES["ADMIN"] = "Admin";
    ROLES["CEO"] = "CEO";
    ROLES["CTO"] = "CTO";
})(ROLES || (ROLES = {}));
function setRole(role) { }
setRole(ROLES.ADMIN);
// arrays
let names = ['Marcelo', 'Marques', 'de Lima', true, 1982];
console.log(names);
let names1 = ['Marcelo', 'Marques', 'de Lima'];
console.log(names1);
let names2 = ['Marcelo', 'Marques', 'de Lima'];
console.log(names2);
let names3 = ['Marcelo', 'Marques', 'de Lima', true, 1982];
console.log(names3);
