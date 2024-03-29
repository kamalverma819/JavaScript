const name="kamal";
const surname = new String("verma")  // another way to define string

console.log(name);

console.log(surname.length);     //give lenth
console.log(name.length);
console.log(surname.toUpperCase());   //   convert into upper case

console.log(surname.charAt(2));    // give char at 2
console.log(surname.indexOf('e'));   // give index at that char 

console.log(surname.substring(1,4));    // give sub string  not accpt -Ve index
console.log(surname.slice(1,4));     // give sub string  accpt +ve index
a="        kamal    verma           "
console.log(a.trim())  // remove extra space from start and end
console.log(a.trim().length)

a= "karal"
b= a.replace('r','m')   //want to replace string
console.log(b)

str= "thois is a my laptop";
c=str.split(' ');
console.log(c)          // return the arraay of words based on split parameter

console.log(str.includes('is'))     // return boolean value if it is true or not


