console.log("prerna");
let age=24;
console.log(age);
let a;
console.log(a);
const student=
{
    a:"Perna",
    b:24,

}
for(let count=0;count<1000;count++)
{
    console.log("prerna")
}
let sentence=`this is a template literal`;
console.log(sentence);
console.log(typeof sentence);

let str="prerna katyal"
console.log(str[0]);
//template literals
let obj={
    object:"oen",
    price:10
}
let output=`the cosst of ${obj.object} is ${obj.price} rupees`;
console.log(output);
//without template literal
console .log("the cost of",obj.object,"is",obj.price,"rupees");
console.log(str.length);
//string methods
console.log(str.toUpperCase());
console.log(str);//all methods never change in originnal string because strings are immutable in javascript
console.log(str.toLowerCase());
let str1="   prerna katyal   "
console.log(str1.trim());//remove white spaces at staring and ending
console.log(str.slice(1,4));//ending value is not included
console.log(str.concat(str1));
console.log(str.replace("re",123));
let fullname=prompt("enter your full name");
console.log("@"+fullname+str.length);
//arrays in js
