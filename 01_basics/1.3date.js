let mydate= new Date();  // give current date and time
console.log(mydate)    
console.log(mydate.toString())   //  date in readable format
console.log(mydate.toDateString())    // only give date
console.log(mydate.toLocaleString())   // give date and time

// create custmon date and time

let mycreatedDate= new Date(2025,10,25);       // 0-jan, 1-feb...10-nov, 11-dec
console.log(mycreatedDate.toString()) ;
    
let mycreatedDate1= new Date(2025,10,25,05,03,30);       // 0-jan, 1-feb  and time also given
console.log(mycreatedDate1.toString()) ;

let mycreatedDate2= new Date("2025-11-25");       // 1-jan, 2-feb...11-nov, 12-dec
console.log(mycreatedDate2.toString()) ;
    
//------------------time----------

console.log('time')
let mytime= Date.now();
console.log(mytime)         // showing in milisecond
console.log(mycreatedDate.getTime());            // time in milisecond from 1 jan 1979
console.log(Math.floor(Date.now()/1000));        // time in second


//----------------------
console.log("get month and day")
let newDate= new Date();
console.log(newDate.toString());
console.log(newDate.getMonth());         // 0-jan,1-feb, 2-mar
console.log(newDate.getDay());           // 1-mon,2-tue,3-wed,4-thru,5-fri,6-sat


