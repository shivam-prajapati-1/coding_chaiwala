const btn=document.getElementById("btn")
const facts=document.getElementById("facts")


async function getFacts(){
    const response= await fetch(url);   //get
    console.log(response);
}



btn.addEventListener("click",getFacts)
