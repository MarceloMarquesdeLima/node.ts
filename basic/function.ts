function add(a: number, b: number): number {
  return a + b;
}
console.log(add(2,3));

///////////////////////////////////////////////////////////////////////////////////////////////
const soma = (a: number, b: number): number =>  a + b;
console.log(soma(3,3));

///////////////////////////////////////////////////////////////////////////////////////////////
const addWithOptionTax = function(x: number, y: number, tax?: number): number {
  if(typeof tax != 'undefined'){
    return (x + y) - tax;
  }
  return (x + y);
}
console.log(addWithOptionTax(4, 5, 1));
console.log(addWithOptionTax(4, 5));

///////////////////////////////////////////////////////////////////////////////////////////////
const applyDiscount = (price: number, percentage: number = 5): number => {
  return price - (price * (percentage / 100));
}
console.log(applyDiscount(100,10));
console.log(applyDiscount(100));

///////////////////////////////////////////////////////////////////////////////////////////////
const calcTotal = (numbers: number[]):number => {
  let total = 0;
  numbers.forEach( num => total += num)
  return total;
}
console.log(calcTotal([10,20,30,40,50,60]));

///////////////////////////////////////////////////////////////////////////////////////////////
const calcTotal1 = (...numbers: number[]):number => {
  let total = 0;
  numbers.forEach( num => total += num)
  return total;
}
console.log(calcTotal1(100,200,300,400,500,600));

///////////////////////////////////////////////////////////////////////////////////////////////
const calcTotal2 = (name: string, ...numbers: number[]):number => {
  let total = 0;
  numbers.forEach( num => total += num)
  return total;
}
console.log(calcTotal2('soma',101,202,303,404,505,606));
