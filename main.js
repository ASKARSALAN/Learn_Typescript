"use strict";
/*there are  types of operators.
    Assignment Operators
    Arithematic Operators.
    Exponentional Operators.
    CombineOperators
    Comparison Operators
    Logical Operators   */
//*-*-*-*-**-**-*-*-*Airthematic Operatior 
//*-*-*-*-ADD/**-*-*-**-* */
let a = 10;
a = a + 1;
console.log(a);
//-**-**-Subtract/*-*--**-**-*
let b = 11;
b = b - 1;
console.log(b);
0;
//*-*-*-**-*Multiply -*-**-*-*-*-*
let c = 12;
c = c * 2;
console.log(c);
//-*-***--*-*Divide /*-*-**-*-*-**-
let d = 20;
d = d / 2;
console.log(d);
//--*-**-*-*-Exponentional Operatos -**-*-*-*-*-
let apple = 5;
let banana = 5;
let totalFruites = apple ** 2;
console.log(totalFruites);
//*-*-*-*-*-**-QUIZ *--*-*-**-*-*-*-*-**
let alpha = 5;
let beta = 2;
let result;
result = ++alpha + alpha + --beta + beta + alpha + beta + beta;
console.log(result);
//-*-**-*-*-*-*-Combine Operators *-*-*-**-*-
let combine = 2 + 3 * 4 / 2;
console.log(combine);
//-*-*-*-**-*Comparison Operator-**-*--**-*-*-*
let num = 5;
let nm = 2;
let isEqual = (num = nm);
let isNotEqual = (num != nm);
let isGreaterThan = (num > nm);
let isLessThan = (num < nm);
console.log(isEqual);
console.log(isNotEqual);
console.log(isGreaterThan);
console.log(isLessThan);
//-*-*-****-*Logical Operators 
let num1 = 5;
let num2 = 2;
let LogicalAND = (num1 > 0) && (num2 > 0); // true
let LogicalOR = (num1 > 0) || (num2 > 0);
let LogicalNot = !(num1 > 0);
console.log(LogicalAND);
console.log(LogicalNot);
console.log(LogicalOR);
