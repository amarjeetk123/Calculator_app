let str = "";
let buttons = document.querySelectorAll(".btn");
function abcd(){
    str = "";
    document.getElementById("display").value = 0
}
Array.from(buttons).forEach((items)=>{
 items.addEventListener("click" , (event)=>{

let user_input = event.target.value
if(user_input == "X"){
user_input = "*"
}

if(user_input === "="){
    if(str==""){
        let nam = "Please do The Calculations!"
        document.getElementById("display").value = nam
        document.getElementById("display").style.fontSize  = "20px"
    }
    else{
        str = eval(str)
        document.getElementById("display").value = str
    }
   
}
else{
    str = str + user_input
    document.getElementById("display").value = str
}

 })
})
// function reset(){
//     document.getElementById("display").value = 0
// }
