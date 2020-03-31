var button = document.getElementById("enter");
var input = document.getElementById("userinput");
var ul = document.querySelector("ul");
var li = document.querySelectorAll("li");
var deleteButtons = document.getElementsByClassName("delete");




/*haz clic en un elemento de la lista y tacha el texto*/
function getEventTarget(e){
    e = e || window.event;
    return e.target || e.srcElement;
}

ul.onclick = function(event){
    var target = getEventTarget(event);
    target.classList.toggle("done");
}
/* Fin del codigo para tachar texto */


/* Agregando event listener para los botones */
for (var i = 0; i < deleteButtons.length; i++){
    deleteButtons[i].addEventListener("click",removeParent,false);
}
/* Fin de agregar even listener a los botones */


/* Creando funcion para remover el elemento con los botones*/
function removeParent(e){
    // e.target.removeEventListener("click", removeParent,false);
    e.target.parentNode.remove();
}
/* Fin de la funcion para remover el elemento con los botones */


/* Adding new items */

function inputValueLength(){
    return input.value.length;
}

function createListElement(){
    var btn = document.createElement("button");
    btn.innerHTML = "Delete";
    btn.onclick = removeParent;

    var li = document.createElement("li");
    li.appendChild(document.createTextNode(input.value));
    li.innerHTML = li.innerHTML + " ";
    li.appendChild(btn);

    ul.appendChild(li);
    input.value = "";
}

function addToListAfterClick(){
    if (inputValueLength() >0){
        createListElement();
    }
}

function addToListAfterKeypress(event){
    if (inputValueLength() >0 && event.which === 13){
        createListElement();
    }
}

button.addEventListener("click", addToListAfterClick);


input.addEventListener("keypress", addToListAfterKeypress);
