console.log(typeof null);   //object

console.log(typeof undefined);  //undefined
console.log("TYPECASTING ALL DATATYPE INTO NUMBER");
let a1='33'
let b1= Number(a1)      //typecast  number string into number
console.log(`value=${a1} ,After typecast=${b1},typeof b1=${typeof b1}`)

let a2='33abc'
let b2= Number(a2)       // typecast  string into number
console.log(`value=${a2} ,After typecast=${b2},typeof b2=${typeof b2}`)

let a3= null
let b3= Number(a3)       // typecast  null into number
console.log(`value=${a3} ,After typecast=${b3},typeof b3=${typeof b3}`)

let a4= undefined
let b4= Number(a4)       // typecast  null into number
console.log(`value=${a4} ,After typecast=${b4},typeof b4=${typeof b4}`)

let a5= true
let b5= Number(a5)       // typecast  null into number
console.log(`value=${a5} ,After typecast=${b5},typeof b5=${typeof b5}`)

let a6= false
let b6= Number(a6)       // typecast  null into number
console.log(`value=${a6} ,After typecast=${b6},typeof b6=${typeof b6}`)

console.log("TYPECASTING INTO Boolean");

let x="";
let y=Boolean(x)
console.log(y);

let x1="kamal";
let y1=Boolean(x1)
console.log(y1);

