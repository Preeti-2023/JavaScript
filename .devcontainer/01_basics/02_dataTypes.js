"use strict"; // treat all js code as newer version

//alert("hello")

let name="preeti"
let age=19
let isLoggedIn=false


//number =>2to power 53
//bigint
//string=>" "
//boolean=> trye/false
//null=> standalone value
// undefined=> 
//symbol=> unique


//object
console.log(typeof undefined);// undefined
console.log(typeof null) ; // object



//Conversion

let score =true
console.log(typeof score);
console.log(typeof (score));
let valueIntNumber= Number(score)
console.log(typeof valueIntNumber);
console.log(valueIntNumber);

/*
 "33"=> 33
 "33abc"=> nan not a number nd type number 
 true=>1

*/

let isLoggedIn1="p"
let booleanIsLoggedIn1= Boolean(isLoggedIn1)
console.log(booleanIsLoggedIn1)
/*

1=> true; 0=> false
""=> false
"hitesh"=> true
*/

let someNumber=33
let stringNumber=String(someNumber)
console.log(stringNumber);
console.log(typeof stringNumber);



//     Operations     

let value=3
let negValue=-value
console.log(negValue);

let str1="preeti"
let str2= "vats"
let str3= str1+str2
console.log(str3);


console.log("------");

console.log("2">1);
console.log("02">1);

console.log("------");

console.log(null>0);
console.log(null==0);
console.log((null>=0));
console.log("------");
console.log(undefined>0);
console.log(undefined==0);
console.log((undefined<0));

// === operator will check both value and data type 
//== opreator will only check value


console.log("-------------");
console.log(2===2);

//Primitive
//7 types String, number, undefined, boolean, null, symbol, bigint

const id=Symbol('123')

const anotherId= Symbol('123')

console.log(id===anotherId);

const bigNumber= 3333333333333337987n



//non primitive refrence type
//Arrays, Object, Functions 


const arr1=["car","man","travel"];

let obj={
    name:"preeti",
    rollno:1
}

let myFunction=function () {
    console.log("hello world");

}


console.log(typeof myFunction );