
var button = document.getElementById("enter");
var input = document.getElementById("userinput");
var ul = document.querySelector("ul");

// Lenght of the input
function inputValueLength(){
    return input.value.length;
}

// Reutilizando el bloque comun de codigo
function createListElement(){
    var li = document.createElement("li");
        li.appendChild(document.createTextNode(input.value));
        ul.appendChild(li);
        input.value = "";
}

//Creando una funcion para el Click
function addListAfterClick(){
    if (inputValueLength() >0){
        createListElement();
    }
}

//Creando una funcion para presionar enter
function addListAfterKeypress(event){
    if (inputValueLength() >0 && event.which === 13){
        createListElement();
    }
}

//Utilizando addEventListener para realizar las acciones
button.addEventListener("click", addListAfterClick);
input.addEventListener("keypress", addListAfterKeypress);