/*
there are 2 two of data  types:-
1) primitive :- call by value( copied value...changes not in original value)
    1)string
    2)number
    3)boolean
    4)null
    5)undefined
    6)symbol
    7)BigInt
2) non-primitive:- call by refernce ( actual value pass...changes in original value)
    1)function
    2)array
    3)object
*/

console.log("symbol data type always be unique");

const  id=Symbol('123');
const anotherid= Symbol('123');
console.log(id===anotherid);  // both arer looking same but they are differnt 


