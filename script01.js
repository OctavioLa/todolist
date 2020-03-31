// var button = document.getElementsByTagName("button")[0];
// button.addEventListener("click", function(){
//     console.log("Click!!!")
// })

/*-------------------------------------------------*/

var button = document.getElementById("enter");
var input = document.getElementById("userinput");
var ul = document.querySelector("ul");

button.addEventListener("click", function(){
    if (input.value.length >0){
        var li = document.createElement("li");
        li.appendChild(document.createTextNode(input.value));
        ul.appendChild(li);
        input.value = "";
    }
})


input.addEventListener("keypress", function(event){
    if (input.value.length >0 && event.which === 13){
        var li = document.createElement("li");
        li.appendChild(document.createTextNode(input.value));
        ul.appendChild(li);
        input.value = "";
    }
})