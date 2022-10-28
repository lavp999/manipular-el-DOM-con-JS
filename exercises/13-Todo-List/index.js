// Your code here
let borrar = document.getElementsByClassName("fa-trash");

for(let x=0; x < borrar.length; x++){
    borrar[x].addEventListener("click", funcionBorrar(borrar[x], x));
}


function funcionBorrar(elemento, indice){
    alert("Ahí estamos " + elemento +" - "+ indice);
}
