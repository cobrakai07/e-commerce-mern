let fun1= function(name="KAI"){
    console.log(`your name is ${name}`);
};
fun1();
///////////////
function fun2(name="Deepak",age=15){
return `your name is ${name} and age is ${age}`;
}
console.log(fun2(undefined,23));
/////////

let fun3=(name="x")=>`your name is ${name}`;

console.log(fun3("Cobra"));
///////////////////////////////////////////////////////
//make a function to multiply two numbers given by users

//1
function mul1(num1,num2)
{
    return num1*num2;
}
//2
let mul2=function(num1,num2)
{
    return num1*num2;
}
//3
let mul3=(num1,num2)=>{
    console.log("HIHHIHI")
    return num1*num2;
}
//4
(function(num1,num2){
    console.log(num1*num2);
})(5,2);

console.log(mul1(2,1));
console.log(mul2(2,2));
console.log(mul3(2,3));
///////

//HOF
//function taking function as parameter
let lc=function(str)
{
    return str.toLowerCase();
}
let uc= function(str)
{
    return str.toUpperCase();
}
let hof=function(str,fun)
{
    return fun(str);
}
console.log(hof("kAi",lc));

//HOF
//Function returning a function

let funJS2=function(req)
{
    console.log(`u required amount is ${req}`);
    // return function(num)
    // {
    //     return `your balance is ${num}`;
    // };
    return mul1;
}
let y= funJS2(45)(2,8);
console.log(y);