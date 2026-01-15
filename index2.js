let s1="Hello";
let s2='World';
let s3=`Node.js Backend`;

console.log(s1);
console.log(s2);
console.log(s3);

//String length
let text='javascript';
console.log("length:",text.length);

//Access Character(index)
let word="Node";
console.log(word[0]);//N
console.log(word[1]);//o

//toUpperCase
let name='sachinn';
console.log("uppercase:",name.toUpperCase());

//toLowerCAse
let city="MUMBAI";
console.log('Lowercase:',city.toLowerCase());

//trim
let msg=" hello ";
console.log("Trimed", msg.trim());

//include()
let sentence="I love JavaScript"
console.log(sentence.includes("love"));

//startsWith()
let email="admin@gmail.com";
console.log("Start with admin",email.startsWith('admin'));

//endsWith()
console.log("Ennd with .com",email.endsWith(".com"));

//slice()
let lang="JavaScript";
console.log("Slice(0,4):",lang.slice(0,4));

//substring()
console.log("Substring(4,10)",lang.substring(4,10));

//replace()

let greet ="Hello World";
console.log("Replace:", greet.replace("World","Node"));

//replaceAll()
let hitext="hi hi hi";
console.log("Replace All:", hitext.replaceAll("hi","hello"));

//split()
let userName="Jatin Pratap Singh";
let age=22;
console.log(`My name is ${userName} and age is ${age}`);

//string comperision
let str="1234";
let str1="1234";
console.log("Password match:",str==str1);
let usermail="user@gmail.com";
if(usermail.includes("@")&& useImperativeHandle.endsWith(".com")){
    console.log("Valid Email");  
}
else{
    console.log("Invalid Email");
    
}
// real backend
//
//Real Backend Example - Password Trim
let userPassword = " admin123 ";
userPassword = userPassword.trim();
console.log("Trimmed Password:", userPassword);
// Count Words in String
let sentence2 = "Node js backend learning";
let words = sentencez.split(" ");
console.log("Word Count:", words. length);




