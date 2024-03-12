let inputData=document.getElementById("text");
let button=document.getElementById("button")
button.addEventListener("click",()=>{
       let obj ={};
       obj.title= inputData.value;
    const response= fetch("http://localhost:5000/addData",{
        method:"POST",
        headers:{
            "Content-Type":"application/json"
        },
        body:JSON.stringify(obj)
    })
    console.log("hello")
    console.log(response.data)

})

document.body.onload=async function(){
    //try{
    const response=await fetch("http://localhost:5000/getData",{
        headers:{
            "Content-Type":"application/json"
        },
})
let div=document.getElementById("data")
const data=await response.json()
//let arr=data
console.log(data)
let divmain=document.createElement("div")
 data.forEach(item=>{
    let span=document.createElement("div")
     span.innerText+=item.data+" "
     divmain.appendChild(span)
 })
 div.appendChild(divmain)
    // }catch(err){
    //     console.log(err)
    // }

}

