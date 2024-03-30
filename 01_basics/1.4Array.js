// non primitive data type :- giving same refernence
const arr= [0,2,4,6,8];
const arr1= new Array(1,3,5,7,9)    // other way to create array

console.log(arr)
console.log(arr1)

arr.push(6)        // push add element at last
console.log(arr);
arr.pop ();         // remove last element
console.log(arr);
arr.unshift(1);      // add element at 1st position
console.log(arr);   
arr.shift();         // remove element at 1st position
console.log(arr);  

console.log(arr.includes(4))       // check 5 include or not
console.log(arr.indexOf(8))        // print index of element

const newarr= arr.join()
console.log(newarr);                //  convert into string

//---------------slice and splice-----------------

const aa = [1,2,3,4,5,6,7]
console.log(aa.slice(2,6))     // original array remain same
console.log("original arr=",aa);

console.log(aa.splice(2,6));     // left element print
console.log(aa)                // original  array will change

//how to combine 2 array
const even=[2,4,6,8]
const odd=[1,3,5,7]
num= odd.concat(even)          // 1st way
console.log(num)

num1= [...even,...odd]        // 2nd way
console.log(num1)

// how to convert nexted array into single array
const arra=[1,2,3,[4,5,6],7,[1,2,3,[4,[5],6],7,3]]
arra1=arra.flat(1)
arra2=arra.flat(2)
arra3=arra.flat(Infinity)
console.log("1 depth=",arra1)
console.log("2 depth=",arra2)
console.log("infi depth=",arra3)

// convert string into array

nam= Array.from("KAMAL")
console.log(nam)

// convert object into array
arrobj= Array.from({naam:"kamal"})  // key and value not convert into error so it return empty array
console.log(arrobj)
 
// convert diifernt number into array
a=1; b=2 ; c=3;
numb=Array.of(a,b,c,4,5)
console.log(numb)




