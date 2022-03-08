// const table=(num)=>{
//     for(let i=1; i<=10; i++){
//         console.log(`${num} x ${i} = ${num * i}`);
//         console.log(num, "x", i, "=", i * num);
//     }
// };
// table(10); 

const { Carousel } = require("bootstrap")

// let firstName = "   Sadik    ";
// let newString = firstName.trim();
// console.log(newString);
// console.log(newString.length);
// console.log(firstName[firstName.length-2]);

// let myStr= +"34"    // string ko number me convert karna hai to string ke aage sirf + ka sign lagao string number me convert ho jayega
// console.log(typeof myStr);

// let string1 = "Shaikh";
// let string2 = "Sadik";
// let fullName = string1 + "  " + string2;
// console.log(fullName);

// function singBirthday(){
//     console.log("happy birthday to you...... ");
// }
// console.log(singBirthday("Sadik"));

// function sumThreeNumber(number1, number2, number3){
//      return number1 + number2 + number3;
// }
// console.log(sumThreeNumber(5, 5, 5));

// function isEven (number){
//     return number % 2 ===0; 
// }
// console.log(isEven(8));

// hello();  // hoisting function

// function hello() {
//      console.log("Shaikh Sadik");
// };


// functions inside function 
// function app(){
//     const myFunc = () =>{
//         console.log("hello from myFunc")
//     }
//     const addTwo = (num1, num2) =>{
//         return num1 + num2;
//     }
//     const mul = (num1, num2) => num1* num2;
//     console.log("inside app");
//     myFunc();
//     console.log(addTwo(2,3));
//     console.log(mul(2,3));
// }
// app();

// const  app= () => {
//     // const sadik = () => {
//     //     console.log("sadik");
//     // }
//     // const shaikh = ()=>{
//     //     console.log("shaikh");
//     // }
//     const addition = (a,b)=> {
//         return a+b;   
//      }
//      const multipalication = (c, d) => {
//         return c*d;
//      }
//     //  console.log("inside");
//     //  sadik();
//     //  console.log(shaikh);
//      console.log(addition(2, 3));
//      console.log(multipalication(3, 5));
// }
// app();


// const [count, setCounter] = useState(0);
// const [otherStuffs, setOtherStuffs] = useState(...arr);
// const setCount = () => {
// setCounter(count + 1);
// setOtherStuffs(...arr);
// };



// let myStr= +"34"    // string ko number me convert karna hai to string ke aage sirf + ka sign lagao string number me convert ho jayega
// console.log(typeof myStr);
// console.log(myStr);

// const array1 = [1, 2, 3, 4, 5, 6, 7];
// const array2 = array1.slice(0, 3);
// console.log(array2);

// const array1 = [1, 2, 3, 4, 5, 6, 7, 8];
// const array2 = array1.splice(2, 0, "a", "b", "c", "d");
// console.log(array1);
// const array3 = array1.push(9);
// console.log(array1);
// const array4 = array1.pop();
// console.log(array1);

// const alpha = ["a", "b", "c", "d", "e", "f", "g", "h", "i" ];
// const result = alpha.splice(2, 0, "ABC", "abcd");
// console.log(alpha); //array me other element add karta hai

// const array5 = array1.unshift(8);
// console.log(array1);

// const array6 = array1.shift();
// console.log(array1);

// const array1 = [1, 2, 3, 4, 5, 6, 7, 8];
// const array7 = array1.sort(function(x, y){return y - x});
// console.log(array1);
// console.log(array1);

// const array1 = [40, 100, 1, 5, 25, 10];
// const array8 = array1.sort(function(a, b){return b - a});
// console.log(array8);

// const array9 = ["a", "b", "c", "d", "e"];
// const arra = array1.concat(array9);
// console.log(arra);

// const array1 = [1, 2, 3, 4, 5, 6, 7, 8];
// const array2 = array1.indexOf(7);
// console.log(array2);

// const array1 = [1, 2, 3, 4, 5, 6, 7, 8];
// const array3= array1.find(item => item < 7);
// console.log(array3)

// const array1 = [5, 12, 8, 130, 44];
// const found = array1.find(element => element > 100);
// console.log(found);

// const array1 = [1, 2, 3, 4, 5, 6, 7, 8];
// const array3= array1.findIndex((item) => item === 8);
// console.log(array3)

// const array1 = [5, 12, 8, 130, 44];
// const isLargeNumber = (element) => element > 13;
// console.log(array1.findIndex(isLargeNumber));

// const array1 = [1, 2, 3, 4, 5, 6, 7, 8];
// const array3= array1.forEach((array3) => console.log(array3 >= 7));
// console.log(array3);

// const array1 = [1, 2, 3, 4, 5, 6, 7, 8];
// const array3= array1.includes(8);
// console.log(array3);

// const array1 = [1, 2, 3, 4, 5, 6, 7, 8];
// const array3= array1.some((item) => item > 7);
// console.log(array3);

// const array1 = [1, 2, 3, 4, 5, 6, 7, 8];
// const array3= array1.every((item) => item < 0);
// console.log(array3);

// const str = new String("Sadik");
// const num = new Number("100");

// typeof str; // It will return 'object'
// typeof num; // It will return 'object'
// console.log(str);
// console.log(num);

// const newa = [1, 2, 3, 4];
// const newb = newa.push(6);
// console.log(newa);
// console.log(newb);

// console.log("This is tutorial 37")

// const students = [
//     {name: "harry", subject: "JavaScript"},
//     {name: "Rohan", subject: "Machine Learning"}
// ]
// function enrollStudent(student, callback){
// setTimeout(function() {
//     students.push(student);
//     console.log("Student has been enrolled");
//     callback();
// }, 1000);
// }

// function getStudents(){
// setTimeout(function() {
//     let str = "";
//     students.forEach(function(student){
//         str += ` ${student.name}`
//     });
//     document.getElementById('students').innerHTML = str;
//     console.log("Students have been fetched");
// }, 5000);
// }

// let newStudent = {name:"Sunny", subject:"Python"}
// enrollStudent(newStudent, getStudents);
// getStudents();

// function myMessage (str) {
//     setTimeout(() => {
        // script to download the picture here
    // }, 5000);
// }
// console.log(myMessage);
// console.log(str);

// var array = [1, 2, 3, 4, 5];// this is empty array 1 method
// array = []; //1 method
// var b = array; // 2 method
// array.length=0; // 3 third method
// console.log(b);
// array.splice(0, array.length); // third method
// while(array.length>0) { // 4 method
    // array.pop();
// }
// console.log(array);

// var array2 = array.slice(2);
// console.log(array2);

// const arra = [1, 2, 3, 4, 5, 6, 7];
// const arra1 = arra.push(8);
// const arra2 = arra.splice(0, 2);
// const arra3 = arra.slice(0,4);
// const arra3 = arra.pop();
// console.log(arra);

// const text = "My Name Is Sadik";
// const shaikh = text.split(" ");
// console.log(shaikh);

// let x;
//     x=10;
// let y = 3;
// let z;
// z = x+y;
// console.log(z);

// let x;
//     x=10;
//  let y = 3;
// let z;
// x= x + y;
// x += y
// console.log(x);

// let x;
// x = 6;
// let y = 2;
// let z;
// z = x ** 2;
// console.log(z);

// let x= 5;
// x++;
// console.log(x);

// let x= 5;
// let y = x+ 5 / 5;
// console.log(y);

// let age = 15;
// if(age>=10){
//     alert("you can vote")
// }

// const newa = [1, 2, 3, 4];
// const newb = newa.push(6);
// console.log(newa);

// 
// let age = 15;
// if(age>=20){
//     alert("you can vote");
// }

// let age= 15;
// let sadik = "yes"
// if(age>=14 && sadik == "yes"){
//     alert("you are vote");
// }else {
//     alert("You can Not Vote");
// }

// let age = 15;
// let sadik = " ";
//  if(age>=14 && sadik != "yes"){
//      alert("can vote");
// }else if(age>=14 && sadik != "yes"){
//      alert("can get");
// }else{
//     alert("not vote");
// }

// let isLogging = 0;  // if 0 login
// if (isLogging ){
//     document.write("login");
// }else{
//     document.write("logout");
// }

// let isLogging = 0;
// let option = isLogging == 1 ? "logout" : "login";
// document.write(option);

// let user;
// user = "Sadik"
// alert(user ?? "user gest");

// let age = 15;
// let sadik = "yes"
// if(age >= 14 && sadik == "yes"){
//      alert("You can Vote!");
// } else {
//      alert("Cant Vote!");
// }

// let age = 15;
// let sadik ="no";
// if(age>=14 && sadik == "yes"){
//     alert("you can vote");
// }else if(age>=14 && sadik != "yes"){
//     alert("get voter card");
// }else {
//     alert("you can not vote");
// }

// let input;
// input = "n";
// if(input === 1){
// document.write("continue....");
// }else if(input === 1){
// document.write("continue....");
// }else if(input === "y"){
// document.write("continue....")
// }else if(input === "Yes"){
// document.write("continue....")
// }else if(input === "End"){
// document.write("end....")
// }else if(input === "n"){
// document.write("end....")
// }else {
// document.write("wrong inpute")
// }

// let input = 1;
// input = "0";
// switch(input){
//     case 1:
//     document.write("continue....");
//     break;
//     case "y":
//     document.write("continue....");
//     break;
//     case "yes":
//     document.write("continue....");
//     break;
//     case 0:
//     document.write("end....");
//     break;
//     case "n":
//     document.write("end....");
//     break;
//     case "no":
//     document.write("end....");
//     break;
//     default:
//     document.write("wrong answer");
// }

// document.write(counter);

//  let counter = 1;
// while(counter <= 10){
    // document.write("Sadik"+ " ");
//     counter = counter+1;
//     // counter++;
    //    counter = counter + 2 ;
// }

// let counter = 1;
// let sum = 0;

// while(counter <= 100){
//     if (counter % 2 == 0 ){
//         sum = sum + counter;
//     }
//     counter++;
// }
// document.write(sum);

// let counter = 16;
// do{
//     document.write("Sadik");
//     counter++;
// }while(counter<=10);
// document.write(counter);

// / const myArray = [false, null, 1, 5, undefined ];
// const newar= myArray.filter(Boolean);
// document.write(myArray); // filter method to use

// let car = "Audi"; // Global variable
// function add(){
// let result = 33; // Local variable
// // console.log(result);
// };
// add();
// console.log(car);

// Immediately Invoked Function

// (function(){
//     let string = "hello";
//     console.log(string);
//     alert(string);
// })();
// callfu();  // immediately invoked function

// const person = {  // create proparties object
    // firstName: "Sadik",
    // lastName: "Shaikh"
// };
// person.age = 30;
// person.firstName = "Anam";
// delete person.lastName;
// console.log(person);
// console.log(person); // dot. cotetion method
// console.log(person["lastName"]); // array method
// console.log("height" in person);
// console.log("age" in person);
// for(let key in person){
// console.log(key);
// console.log(key + " : " + person[key]);
// }

// let person = {  // object method in javascript
    // firstName: "Sadik",
    // lastName: "Shaikh",
    // sayHello: function () {
        // sayHello (){
        //    console.log("Hello!");
    // }
// };
// person.age = 30;
// person.sayHello = function(){
//     console.log("Hello");
// }
// function great  (){
    // console.log("Hello");
// }
// person.sayHello = great;
// person.sayHello();

// const person = {  // object in keyword this keyword
// firstName: "Shaikh",
// lastName: "Sadik",
// sayHello (){
//     console.log("Hello! I am "+ 
//     this.firstName +" and i Have a "+ 
//     car.brand  +" Bike");
// }
// };
// const car = {
//     brand : "Shaine",
//     Model : "Savari"
// }
// person.sayHello();

// console.log(Math.PI); //math object

// var x = Math.round(4.2);  // math object in javaScript
// console.log(x);
// var y = Math.round(4.7);
// console.log(y);
// var x = Math.ceil(4.2);
// console.log(x);
// var x = Math.floor(4.7);
// console.log(x);
// var x = Math.trunc(4.7);
// console.log(x);
// var x = Math.pow(2, 3);
// console.log(x);
// var x = Math.sqrt(4);
// console.log(x);
// var x = Math.min(4.7, 5, 100, 88, 10);
// console.log(x);
// var x = Math.max(4.7, 5, 100, 88, 10);
// console.log(x);

// hosting
// hello();
// function hello(){
//     console.log("Hello Sadik");
// }
// hello();

// var x; // declaratiopn
// console.log(x); //call
// x = 7; //assigmnet
// console.log(x); //call


// let counter = 0;
// while(counter <= 10){
//     document.write("Sadik");
//     counter = counter - 2; 
// }

// let count = 1;
// let sum =0;
// while(count<=50){
//     if(count % 2 == 0){
//         sum = sum + count;
//         };
//         count++;
//     console.log(sum);
// }

// for (let count = 1 ; count <= 100; count++){
    //  console.log(count);
    // console.log("<br>")
// };

// let person = {
//     fName: "Shaikh",
//     lName: "Sadik",
//     sayHello(){
//         console.log("Hello ! I Am " + person.fName + " and I Have a" + car.brand); 
//     }
// };
//     let car = {
//         brand: "Shine",
//         model: "Sfari"
//     }
//     person.sayHello();

// const aaa = [1, 5, 9, 7, 2, 8, 3];
// const filtered = aaa.filter((ele) => ele === 2 || ele === 4);
// console.log(filtered);

// const aaa = [1, 5, 9, 7, 2, 8, 3];
// const filtered = aaa.filter(function(value){
//     return value >= 0;
// });
// console.log(filtered);

// const persons = {data: [
//     {
//         fname: "Sadik",
//         lname: "Shaikh",
//         age  : 27,
//         city : "Latur"
//     },
//     {
//         fname: "Samed",
//         lname: "Shaikh",
//         age  : 30,
//         city : "Nanded"
//     },
//     {
//         fname: "Asad",
//         lname: "Khan",
//         age  : 17,
//         city : "Nilanga"
//     },
//     {
//         fname: "Danish",
//         lname: "Sayyed",
//         age  : 35,
//         city : "Mumbai"
//     },
//     {
//         fname: "Anam",
//         lname: "Shaikh",
//         age  : 2,
//         city : "Hasegaon"
//     },
// ]
// }
// console.log(persons);
// console.log(persons(age>=20));

function power(){
    let Naam = document.getElementById("input1").ariaValueMax;
    console.log(Naam);
}