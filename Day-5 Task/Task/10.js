// There is a single operator in JavaScript, capable of providing the remainder of a division operation. Two numbers are passed as parameters. The first parameter divided by the second parameter will have a remainder, possibly zero. Return that value.
// Examples
// remainder(1, 3) ➞ 1
// remainder(3, 4) ➞ 3
// remainder(-9, 45) ➞ -9
// remainder(5, 5) ➞ 0



let m=(n1,n2)=>
{
  return n1%n2;
}
console.log(m(1,3));
console.log(m(3,4));
console.log(m(-9,45));
console.log(m(5,5));