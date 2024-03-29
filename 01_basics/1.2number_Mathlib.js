const score= 34;
const balance =  new Number(100);   // another way to intailzie

console.log(score);

a= 23.23
console.log(a.toFixed());   // return the integer part
console.log(a.toString()) ;  // convert number into string


b=123.8966
console.log(b.toPrecision(3));
console.log(b.toPrecision(4));
console.log(b.toPrecision(5));

//---------------MATH LIBERAY-----------------------

console.log("Math lib");
console.log(Math.abs(-5));            // return positive number
console.log(Math.ceil(4.3));         // give next number
console.log(Math.floor(4.9));          // give int part

// random number
console.log(Math.random());          // give any number between 0 to 1
console.log(Math.random()*10)         // give any number b/w 0 to 10
console.log(Math.random()*10+1)        // give any number b/w 1 to 11

console.log(Math.floor(Math.random()*10+1) )       // give any number b/w 1 to 10

// Random for particular range formula

const mini=10
const maxi=20

console.log(Math.floor(Math.random()*(maxi-mini+1)+1))



