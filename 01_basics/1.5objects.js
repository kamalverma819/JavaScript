/* there 2 types of object declaration :-
1) object literals :-  non build as singleton
2)object constructor :- build as singleton
*/
// object liternals:- 
const user = {
    name:'kamal',
    com:'jio'
}
console.log(user.name);      // 1st way to access object value
console.log(user['com']);  // 2nd way to access object value

// add symbol addtype into object
const sym= Symbol("key1")  //  define symbol
const obj= {
    objname : "kamal",
    [sym]: "mykey1",
}
console.log(obj)        //see output how symbol value  is printed, Symbol[keyname]: value
console.log(obj.objname)
console.log(obj[sym])

obj.objname= "verma"    // we can change the value of object
console.log(obj) 

// if we donnot want to change the value ot add other variable  of the object
Object.freeze(obj)
obj.objname = "kamal"    // not change the value of the object
obj.fullname="kamalverma"      // not add variable inside the object

const obj1= {
    firtname: "kamal",
    lastname: "verma",
    greeting : function() {
        console.log(`hello ${this.firtname} ${this.lastname}`)
    },

}

console.log(obj1)
console.log(obj1.greeting())
