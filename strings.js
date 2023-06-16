//commment
///////////
let str0;
console.log(str0);
str0=null;
console.log(str0);
str0="OKAY";
console.log(str0);
////////////
console.log("hello world");
console.log('Deepak');
const str1="Deepak_cobra_kai";
const str2="World";
console.log(str1,str2,"AND THATS HOW WE CAN PRINT STRING WITH SPACES TOGETHER");
let str3=str1+str2;
console.log(str3);
/////////////////////
let strBest=`My insta ID is ${str1} and i live in ${str2} .....!!`;
console.log(strBest);
///////////
console.log(str1[0],str1[5]);
console.log(str2.toUpperCase());
console.log(typeof str1);//typeof is a keyword
console.log(str1.slice(1,5));//substring method of JS
////////////////
let arrStr= str1.split('_');
console.log(arrStr);
///////
//STRINGS ARE IMMUTABLE
let str4="ABCD";
str4[0]='Q';
console.log(str4);