// async vs sync
// console.log("1");
// console.log("2"); 
// console.log("3");



// setTimeout vs setInterval

// setTimeout(()=>{
// console.log("hello");
// },3000)



//insta



// console.log("templates of story");
// setTimeout(()=>{
// console.log("data of story");
// },7000)
// console.log("templates of body");
// setTimeout(()=>{
//     console.log("data of body");
//     },5000)
// console.log("templates of footer");



// setInterval(()=>{
//     console.log("jai shree ram");
// },3000)






// const food=document.getElementById("food")
// console.log("burger");
// setInterval(()=>{
//     const demand=document.createElement("li")
//     demand.innerText="Bhook lagi hui ha"
//     food.appendChild(demand);
// },2000)
// console.log("noodles");




// function sum(a,b){
//     console.log(a+b);
// }

// function calculator(a,b,callback){
// callback(a,b)
// } 
// calculator(10,20,sum);




// callbacks with example

// function getData(dataId,getNextData){
//     setTimeout(()=>{
//         console.log("data for " , dataId);
//         if(getNextData){
//             getNextData();
//         }
       
//     },3000)
   
// }

// //callback hell
// console.log("getting data1.......");
// getData(1,()=>{
//     console.log("getting data2.......");
//     getData(2,()=>{
//         console.log("getting data3.......");
//         getData(3,()=>{
//             console.log("getting data4.......");
//             getData(4);
//         }); 
//     });
// });




// Promises


// const result=new Promise((resolve,rejet)=>{
//     console.log("hello i am promise");
//     resolve("successfull")
// })
// console.log(result);





// function getData(dataId,getNextData){
//     return new Promise((resolve,rejet)=>{

   
//         setTimeout(()=>{
//             resolve("successfull")
//             console.log("data for " , dataId);
//             if(getNextData){
//                 getNextData();
//             }
           
//         },5000)
//     })

//  }

//     let result=getData(1);
 



// const serverReq=()=>{
//     return new Promise((resolve,rejet)=>{
//           console.log("i am a new request on server");
//           resolve("data sent")
//         //   rejet("please check your connection")
//     })
// }

// let promise=serverReq();
// promise.then(()=>{
//     console.log("rendering data on front-end");

// })
// promise.catch(()=>{
//     console.log("data cant be abstracted");
// })



//promise chaining     security and scalability => max syntax X


// function getData(dataId,getNextData){
//     return new Promise((resolve,rejet)=>{
//         setTimeout(()=>{
//             // rejet("network issue")
//             resolve("successfull")
//             console.log("data for " , dataId);
           
           
//         },2000)
//     })

// }

// console.log("getting data1.......");
// getData(1).then((resolve)=>{
//     console.log(resolve);
//     console.log("getting data2.......");
//     getData(2).then((resolve)=>{
//         console.log(resolve);
//         console.log("getting data3.......");
//         getData(3).then((resolve)=>{
//             console.log(resolve);
//             console.log("getting data4.......");
//             getData(4).then((resolve)=>{
//                 console.log(resolve);
//             })
            
//         })
//     })
// })

// .catch((rejet)=>{
//     console.log(rejet);
// })







// async await


// console.log("1");
// async function hello(){
//     console.log("hello mitron!!!!!!!!!!");
// }
// let result=hello();
// console.log(result);

// console.log("2");




async function apiDelhi(){
    return new Promise((resolve,rejet) =>{
        setTimeout(()=>{
            console.log("weather data of delhi");
            resolve("maje maje");
        },3000)
    })
}

async function apiPune(){
    return new Promise((resolve,rejet) =>{
        setTimeout(()=>{
            console.log("weather data of Pune");
            resolve("maje maje");
            // rejet("network issue")
        },3000)
    })
}

  

async function GetWeatherData(){
    const delhi=await apiDelhi();
    console.log(delhi);
    const Pune= await apiPune();
     console.log(Pune);
}
GetWeatherData();


