var button=document.getElementById("add");
var input=document.getElementById("input_user");
var ul=document.querySelector("ul");

button.addEventListener("click",function(){
    if(input.value.length>0){
    var li=document.createElement("li");
    li.appendChild(document.createTextNode(input.value));
    ul.appendChild(li);
    input.value="";
    }
})

input.addEventListener("keypress",function(KeyboardEvent){
    if(input.value.length>0 && KeyboardEvent.key==='Enter'){
    var li=document.createElement("li");
    li.appendChild(document.createTextNode(input.value));
    ul.appendChild(li);
    input.value="";
    }
})