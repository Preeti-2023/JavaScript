const score=100;
console.log(score);

const score1= new Number(200)
console.log(score1);
console.log(score1.toString().length);

const otherNumber= 123.27898
console.log(otherNumber.toPrecision(5));
console.log(otherNumber.toFixed(5));

//maths
console.log(Math.abs(-5));
console.log(Math.abs(7));
console.log(Math.ceil(6.8));

console.log(Math.floor(5.8));


console.log(Math.random());
console.log((Math.random()*1000)+1);


//array

console.log('------');

const arr={};// by literals
const arr1=new Array(1,2,3,4)
console.log(arr1[1]); 

console.log(arr1);
arr1.push(7);
console.log(arr1);
arr1.pop()
console.log(arr1);
arr1.unshift(0);
console.log(arr1);
arr1.shift()
console.log(arr1);


const name=["preeti","priya","pihu"]
const boys_name=["Amit","Amar","Ankur"]

const students= name.concat(boys_name) 
console.log(students);

const allstudents=[...name, ...boys_name]
console.log(allstudents);


//object

const userDetail={
    name:"preeti",
    age:23,
    course:"fullstack",
    location:"Delhi",

}
console.log(userDetail.name)
console.log(userDetail["name"])

userDetail.greeting=function () {
    console.log("hello js user");
    
}
console.log(userDetail.greeting());
userDetail.greetingTwo=function () {
    console.log(`hello js user ,${this.name}`);
}
console.log(userDetail.greetingTwo());



 const tinderUser = new Object()
//const tinderUser = {}

tinderUser.id = "123abc"
tinderUser.name = "Sammy"
tinderUser.isLoggedIn = false
console.log(tinderUser);


const regularUser = {
    email: "some@gmail.com",
    fullname: {
        userfullname: {
            firstname: "hitesh",
            lastname: "choudhary"
        }
    }
}
console.log(regularUser.fullname.userfullname.firstname);





const obj1 = {1: "a", 2: "b"}
const obj2 = {3: "a", 4: "b"}
const obj4 = {5: "a", 6: "b"}


const obj3 = { obj1, obj2 }

const obj5 = Object.assign({}, obj1, obj2, obj4)
const obj6={...obj1, ...obj2, ...obj4}

console.log(obj3);

console.log(obj5);

console.log(obj6);


const users = [
    {
        id: 1,
        email: "h@gmail.com"
    },
    {
        id: 1,
        email: "h@gmail.com"
    },
    {
        id: 1,
        email: "h@gmail.com"
    },
]

users[1].email
console.log(tinderUser);

console.log(Object.keys(tinderUser));
console.log(Object.values(tinderUser));

console.log(Object.entries(tinderUser));


const course = {
    coursename: "js in hindi",
    price: "999",
    courseInstructor: "hitesh"
}
//course.courseInstructor

const {courseInstructor: instructor} = course
console.log(instructor);


//API
//{} with out name

//array form api

[
    {},
    {},
    {}
]