// console.log("Welcome to js")
// console.log(100);
// console.log(true);

// console.log("Pankaj");


// let first_Name="Pankaj";
// let salary=250;

// data type -> mukt

// console.log(first_Name)
// console.log(salary)


//rules 
// 1-> camel casing
// 2-> spacing not allowed
//3-> last_Name
// 4-> starting word number or special character
// 5-> keyword 
// 6-> Variable ->uppercase -> PI->3.14
// variable -> SALARY -> 10000
// 7-> logical


//Data types -> 
// primitive                  non primitive
// 1-> Number                   Arrays
//2->strings                    objects
// 3-> boolean
//4->undefined
//5-> null

// let age=22;
// console.log(age)


// let full_Name="Choota bheem"
// console.log(full_Name)

// let job=true;
// console.log(job)

// let marks
// console.log(marks)

// let bankBalance=null;
// console.log(bankBalance)


// javascript dynamically typed Language.

// let name1="Pankaj";

// console.log(name1);

// name1=123;

// console.log(name1)

// comments

//operator ->typeof()


// console.log(typeof(12))

// console.log(typeof("pankaj"))

// console.log(typeof('A'))

// console.log(typeof(undefined))

// console.log(typeof(true))

// console.log(typeof(null)) //bug






// let const var 

// let age=10;

// console.log(age);

// age=18;

// console.log(age);


// const birthYear=2001;

// console.log(birthYear)



// var personality="boring";

// console.log(personality)

// var personality="extrovert"

// console.log(personality)



//operators

// mathematically + - * / %  **

// const currentYear=2024

// let age=currentYear-2001;

// let age1=currentYear-1990;

// console.log(age,age1)

// console.log(age*2,age/2)


// console.log(5 ** 3);


// + operator -> overloaded -> add -> cont

// const firstName="Champa"
// const lastName="chameli"

// console.log(firstName +' ' + lastName)

// Assignment = +=,-=,/=,%=,*=

// let num1=20;
// let num2=2;
// let name="Pankaj";
// console.log(name);


// console.log(num1+=num2)
// console.log(num1-=num2)
// console.log(num1*=num2)
// console.log(num1/=num2)
// console.log(num1%=num2)


// comparison

// let age1=20;
// let age2=20;

// console.log(age1>=age2)
// console.log(age1<=age2)
// let currentYear=2024

// console.log(currentYear+=10 < (currentYear+=25))
//                           10   <   2049
//               currentYear+= true


// const markHeight=1.69
// const markWeight=78

// const johnHeight=1.95
// const johnWeight=150

// const JohnBmi=johnWeight/(johnHeight**2)

// const MarkBmi=markWeight/(markHeight**2)


// console.log("Bmi of john is " + JohnBmi + " and Bmi of mark is " + MarkBmi);

// const markHigherBmi=MarkBmi>JohnBmi;

// console.log(markHigherBmi);


//strings and string templates

// const name1="Aman";
// const job="manager";

// const birthYear=2000;
// const currYear=2024;

// const age=(currYear-birthYear);
// console.log(age)

// const information="I am " + name1 + "\n my job title is" + job + " and my age is " + (currYear-birthYear)

// console.log(information);


// // string templates -> ES6

// // templates litrals ``
// const info=`I am ${name1} 
// my job title is ${job} and my age is ${(currYear-birthYear)}`;

// console.log(info)

// let age=prompt("Enter your age");

// if(age>=18){
//     console.log("jaa vote dee")
// }
// else{
//     console.log("mera bacha hai tu!!")


// }


// let age=prompt("Enter your age");
// let eyesight=false;
// if(age>=18 && eyesight){
//     console.log("You can drive!!!!")
// }
// else{
//     const yearsLeft=`Wait for next ${18-age} years`
//     console.log(yearsLeft)
// }

//type conversion type coersion

// let salary=Number(prompt("Enter Your salary"));

// let updatedSalary=Number(salary)

// let bonus=1000
// console.log(salary+bonus)

// console.log(typeof(NaN));

// const birthYear='1991'
// console.log(Number(birthYear),birthYear)
// console.log(Number(birthYear)+18)


// type coersion


// console.log('I am ' + 23 + " years old")

// console.log('23' - '10' + 3);

// console.log('10' / '2')

// let n = '1' + 1;
// n=n-1;
// console.log(n)

// console.log('10' - '4' - '3' - 2 + '5') 


//truthy and falsy valuessssss

// falsyyy - > 0 , " " , undefined , null , NaN


// let email;
// console.log(email)

// if(email){
//     console.log(email)
// }
// else{
//     console.log("andhe email daal")
// }


// console.log(Boolean(0))
// console.log(Boolean( ))
// console.log(Boolean(undefined))
// console.log(Boolean(null))
// console.log(Boolean(NaN))

// console.log(Boolean("30"))



// let height=Number(prompt("enter Your height"));

// console.log(height)


// if(height){
//     console.log(`Your entered height is ${height} in cm`)
// }
// else{
//     console.log("abe chinki height enter kar")
// }


// == vs ===

// let age=prompt("Enter your age")

// if('18' == 18){
//     console.log("bhai jawani chad gyi")
// }
// else{
//     console.log("heheheh")
// }


// Boolean operator  And OR Not   && || !


// const hasDrivingLicense=false;
// const goodVision=true;
// const isTired=false;

// console.log(hasDrivingLicense && goodVision);
// console.log(hasDrivingLicense || goodVision);
// console.log(!hasDrivingLicense);


// if(hasDrivingLicense && goodVision || isTired){
//     console.log("jaa bai chlale gaadi")
// }
// else{
//     console.log("rende ghar baith")
// }


// let TeamA=(97+112+101)/3;
// let TeamB=(109+95+106)/3;

// console.log("Team A ka score",TeamA)
// console.log("Team B ka score",TeamB)

// if(TeamA>TeamB && TeamA>100){
//     console.log("TeamA haddippaa!!")
// }
// else if(TeamB>TeamA && TeamB>100){
//     console.log("TeamB haddippaa!!")
// }
// else if(TeamA==TeamB && TeamA>100 && TeamB>100){
//     console.log("mehnat waste!!")
// }
// else{
//     console.log("no result!!!!!")
// }


// Switch case

// let day=prompt("enter the day");

// switch(day){
//     case 'monday':
//         console.log("push day!!!")
//         break;
    
//     case 'tuesday':
//         console.log("pull day!!!!")
//         break;

//     case 'wednesday':
//     case 'thursday':
//         console.log("bhai mera rest chal rha hai")
//         break;

//     case 'friday':
//         console.log("leg day!!")
//         break;
//     case 'saturday':
//         console.log("cardio")
//         break;
//     case 'sunday':
//         console.log("aaj toh gym hi band hai heheheh")
//         break;
//     default:
//         console.log("abe andha hai kya!!")


// }

// statement vs expression

// expression -> value generate-> operators (total gross profit - salaries)
//  variable -> clg

const currYear=2024;
const birthYear=2001;

// console.log(currYear-birthYear)  

// let hasDrivingLicense=false;
// let eyesight=true;

// console.log(hasDrivingLicense && eyesight
// )  

// statements

// if(true){
//     console.log("xyz")
// }

// function sample(){
//     attendance -> 75%
//     entry 
//     no entry
// }


// template literals -> expression

// const calAge=`My age is ${(currYear-birthYear)}
// `
// console.log(calAge)

//ternary operator -> expression -> value

// const shakal=true;

// (age>18 && shakal)?console.log("chalo club") : console.log("thele pe baith") 
// const age=111;

// const drink=(age>18)?'Wine':'Water'

// console.log(`i'll serve ${drink} to you`)



// collection of logic likhoge  -> action 

// if{} else{} 
// function 
// class