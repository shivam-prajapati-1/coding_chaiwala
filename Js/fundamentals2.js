// JS-> loosely typed language -> strict action X
// Js -> env -> browser -> x
// 'use strict'
// -> strict tareeke see kaam hogga

// let drivingLicense=false;
// let passTest=true;

// if(passTest){
//     drivingLicens=true;
// }

// if(drivingLicense){
//     console.log("You can drive")
// }
// else{
//     console.log("You cant drive")
// }

// Js -> Functions -> block a code to perform a particular task

// code -> likh diya -> reuse

// let greeting = "Jai shree ram"
// function Logger(){
//     // block scope
//     let message="hello"
//     return message;
// }

// global scope
// const output=Logger()
// console.log(output)
// console.log(message)

// 1.Parameters ko receive
// 2. output return

// DRY
// function fruitProcessor(apples,oranges){
//     console.log(`${apples} apples and ${oranges} oranges`)

//     const juice = `Juice with ${apples} apples and ${oranges} oranges`

//     return juice;
// }

// const glass=fruitProcessor(2,3)
// console.log(glass)

// console.log(fruitProcessor(4,5))

// const appleJuice=fruitProcessor(5,0)
// console.log(appleJuice)

// function declaration vs function expreesion

// console.log(calAge1(2000))
// let age1= calAge1(2001)
// console.log(age1)

// function calAge1(birthYear){
//     return 2024-birthYear;
// }

// const age2=calAge2(2001)
// console.log(age2)

//  console.log(calAge2(2000))

// const calAge2=function(birthYear){
//     return 2024-birthYear
// }

// function expression vs arrow function

// const calAge2=function(birthYear){
//     return 2024-birthYear
// }
// console.log(calAge2(2000))

// const calAge3= birthYear => 2024-birthYear

// console.log(calAge3(2001))

// const Retirement = (birthYear,name) => {
//     let age=2024-birthYear;
//     let remainingYearToRetire=65-age;
//     return `${name} age is ${age} and years to retire is ${remainingYearToRetire}`
// }

// console.log(Retirement(2000,"Pankaj"))

// Function calling inside a function => higher order function

// const cutpieces=(fruit)=>{
//     return fruit*4
// }

// function fruitProcessor(apples,oranges){
//         let applePieces=cutpieces(apples)
//         let orangePieces=cutpieces(oranges)
//         const juice = `Juice with ${applePieces} applePices and ${orangePieces} orangePices`

//         return juice;
//     }

//     const glass=fruitProcessor(2,3)
//     console.log(glass)

// const CalAvg=(R1,R2,R3)=>{
//     return (R1+R2+R3)/3
// }

// const AvgOfChennai=CalAvg(85,44,51);
// const AvgOfKolkata=CalAvg(23,24,21);

// console.log("Average of chennai is " + AvgOfChennai)
// console.log("Average of kolkata is " + AvgOfKolkata)

// const checkWinner=(TeamA,TeamB)=>{
//     if(TeamA>(TeamB*2)){
//         console.log("Team A which is chennai winns ")
//     }
//     else if(TeamB>(TeamA*2)){
//         console.log("Team B which is kolkata wins")
//     }
//     else{
//         console.log("no one wins")
//     }
// }

// checkWinner(AvgOfChennai,AvgOfKolkata)

// Arrays -> first Data structure

// const name="chinku"
// const name1="pinki"
// const name2="tinku"

// const friends=["Pankaj","Aastha","Aman"]

// console.log(friends)

// console.log(friends[2])//random acces using index

// const salaries=[200,250,300]

// console.log(salaries)

// const birthYear= new Array(1990,1995,2001,2005)

// console.log(birthYear)

// Array -> inbuilt

// const chairs=friends.length

// console.log(chairs)

// console.log(friends.length)

// index

// console.log("Total index are",friends.length-1)

// friends[1]="monu"

// //Array jo hai mutable hai
// console.log(friends)

// const salaries=[110,200,300];

// console.log(salaries)

//heterogenous

// const friends=["Pankaj","Aastha","Aman"]
// const person=["Mahi",7,(2024-1985),true,friends]

// console.log(person[4][1])

// const arr=[1990,1995,2001]

// const calAge=function(birthYear){
//     return 2024-birthYear
// }

// const age1=calAge(arr[0])
// const age2=calAge(arr[1])
// const age3=calAge(arr[2])

// const ages=[age1,age2,age3]

// console.log("Ages are => ",ages);

// Arrays Methods
// const friends=["Pankaj","Aastha","Aman"]

// const dost=prompt("Enter your new friend")

// console.log(dost);

// const newLenght=friends.push(dost)

// console.log(newLenght);
// console.log(friends)

// friends.unshift(dost);

// console.log(friends)

// const friends=["Pankaj","Aastha","Aman"]

// const removedItem=friends.pop();

// console.log(removedItem)
// console.log(friends)

// const removedFromStart=friends.shift();

// console.log(removedFromStart)
// console.log(friends)

// const friends=["Pankaj","Aastha",123]

// console.log(friends.indexOf('Aman'))

// console.log(friends.includes(123))

// const Pay=[125,555,44]

// const calTip=function(bill){
//     return bill >=50 && bill <= 300 ? bill*0.15 : bill*0.20
// }

// const Tip=[calTip(Pay[0]),calTip(Pay[1]),calTip(Pay[2])];

// const TotalBill=[Pay[0]+Tip[0],
//                 Pay[1]+Tip[1],
//                 Pay[2]+Tip[2]]

// console.log(TotalBill)

// Objects->Key:value pair

// const PersonInfo={
//     Name:"Monu",
//     age:30,
//     salary:10000,
//     JobStatus:true,
//     Profession:"SDE"
// }

// console.log(PersonInfo);

// console.log(PersonInfo.Name)

// DOT VS BRACKET

// console.log(PersonInfo.salary);
// console.log(PersonInfo['age']);

// Dot vs Bracket . => direct key name , []=>expression/key

// let key="firstName"
// console.log(PersonInfo.firstName);

// let key2="Name";

// console.log(PersonInfo['last' + key2]);

// let InputKey=prompt("Enter any key");

// console.log(PersonInfo.age);//direct key

// console.log(PersonInfo[InputKey]);//expression

// console.log(PersonInfo.key);//undefined

// console.log(PersonInfo[InputKey]);

//expression =-> value / variable /prompt /operator/boolena

// let hello;

// console.log(hello);

// const PersonInfo = {
//     firstName:"pankaj",
//     lastName:"oberoi",
//     age : 30,
//     salary : 4500,
//     jobStatus : true
// }

// const intrestedIn=prompt("enter the info u want");

// if(PersonInfo[intrestedIn]){
//     console.log(PersonInfo[intrestedIn]);
// }
// else{
//     console.log("wrong request");
// }

// PersonInfo.location="Bhopal"
// PersonInfo.instaId="traveler.apk"

// console.log(PersonInfo);

// const maritalStatus = prompt("enter your marital status")

// let shadi = [PersonInfo.maritalStatus]

// if (PersonInfo[maritalStatus]) {
//     console.log(PersonInfo[maritalStatus]);
// }
// else (
//     console.log("shadi krle")
// )

// console.log(PersonInfo);

// const anyRandomThing = prompt("ek random baat bol")

// if (PersonInfo[anyRandomThing]) {
//     console.log(PersonInfo[anyRandomThing]);
// }

// else {
//     PersonInfo[anyRandomThing] = prompt("Enter the valuee")
// }

// console.log(PersonInfo);

// Loops

// for ,while ,do while

//find even number btw 1 to 20 range

// for(let i=1;i<=20;i++){
//     if(i%2==0){
//         console.log(i);
//     }

// }

// while loop

// let user1=25;
// let user2;

// let attempts=0

// while(true){
//     user2=Number(prompt("enter Your guessed value"));
//     attempts++;

//     if(user2>user1){
//         console.log("entered value is greater than original")
//     }
//     else if(user2<user1){
//         console.log("entered value is smaller than original")
//     }
//     else{
//         console.log("congo!!!!!!")
//         break;
//     }
// }

// console.log("total attempts ",attempts);

// do while

// let kamai=0;
// let customerStatus
// do{
//     kamai=kamai+50;
//     customerStatus=prompt("enter customer status yes/no");
// }while(customerStatus=='yes')

// console.log("aaj ke din ki kamai is ",kamai);

// for of , for in , foreach

// for of -> strings , array

// let str = "JavaScript"
// let size=0

// for(let val of str){
//     console.log("val=",val);
//     size++;
// }
// console.log("size of your string is ",size);

// for in-> use  for objects

let student = {
    name: "chotu",
    age: 50,
    cgpa: 7.1,
    isPass: true,
  };
  
  for (let key in student) {
    console.log(key + " : " + student[key]);
  }
  
  const sampleData1 = {
    id: 123,
    name: "pankaj",
  };
  
  //json
  let sampleData = [
    { id: 123, name: "pankaj" },
    { id: 321, name: "chintu" },
    { id: 456, name: "sonu" },
    { id: 654, name: "monu" },
  ];
  
  sampleData.forEach((student)=>{
      console.log(student.name)
  })