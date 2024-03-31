// object declare by constructor
const user= new Object()    // object constructor: it is singleton object
user.id="123abc"
user.name="kamal"
console.log(user)

const user1 = {              // object literals: it is non singleton
    id:"abc123",
    name:"verma"
}
console.log(user1)

// declare object inside object
const user2 ={
    email: "kamal@123",
    fullname : {         // nexted object
            userfullname : {    // nexted object
                    first: "kam",
                    last: "ver"
            }
    }
}
console.log(user2)
console.log(user2.fullname.userfullname.first)

// how to combine the 2 or more object
const obj1={1:'a', 2:'b', 3:'c'}
const obj2= {4:'d',5:'e',6:'f'}
const obj3= {7:'g',8:'h',9:'i'}

const obj4 = Object.assign(obj1,obj2,obj3)    // 1st way by assign() 
console.log(obj4)

const obj5= {...obj1,...obj2,...obj3}         // 2nd way by sperate operator
console.log(obj5)

// how to take keys and value array seperatly
const ob={
    name:'kamal',
    job: 'jio',
    mobile:'2344',
    id:2323,

}
console.log(ob)
keys= Object.keys(ob)           // keys of the object in array
console.log(keys)
values= Object.values(ob)           // value of the object in array
console.log(values)

console.log(Object.entries(ob))       // converting object into nested array

// checkig keys are present in object or not

console.log(ob.hasOwnProperty('id'))
console.log(ob.hasOwnProperty('mob'))


// DE-Structuring of the object name:- giving own name in place of object.keyname
console.log("DE-STRUCTURE")
// simple name as we are using
course = {
    coursename: 'nodejs',
    price: 999,
    duration : 4.5
}

console.log(course.coursename);

// by destrcture  we can directly access the object keys name
const{coursename}= course
console.log(coursename);  
// also we giving some short name in place of large key name
const { price:cost}= course
console.log(cost)


/*
difference between JSON format and object format
1) json format                     or   json format
{                                        [
    "name" : "kamal",                         { :  },
    "price" : "free",                         { :  },
}                                        ]   in form of array

2) object format
const obj={
    name: "verma"
    "price": 999
}
*/

//API :-  apna kaam dusro se karwana
// menu in resturant are api documentation
//API are values come from backend values in form of JSON




