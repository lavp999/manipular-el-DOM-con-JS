// Your code here
crearEventosDeBorrado(); //la ejecutamos la primera vez 

// ----------------------------------------------------
//Para el borrado
// ----------------------------------------------------
// lo tengo creado porque al principio cuando creaba un nuevo LI llamaba a esta función
// pero este volvería a crear todos, y los existentes ya los tengo
function crearEventosDeBorrado(){ 
    let miUl = document.querySelector("ul");
    let miLi = miUl.querySelectorAll("li");
    let miSpan = miUl.querySelectorAll("span");

    for(let x=0; x < miSpan.length; x++)
        borraElementoLi(miSpan[x], miUl, miLi[x]);
}

function borraElementoLi(elemento, padre, hijo){
    elemento.addEventListener("click", function(){
        padre.removeChild(hijo);
    });
}

// ----------------------------------------------------

// ----------------------------------------------------
// Para añadir
// ----------------------------------------------------
let nuevaAccion = document.querySelector('#addToDo');
nuevaAccion.addEventListener('change',function(){
    let miUl = document.querySelector('ul');
    let nuevaLi = document.createElement('li');
    nuevaLi.innerHTML = '<span><i class="fa fa-trash"></i></span>' + nuevaAccion.value;
    miUl.appendChild(nuevaLi);
    nuevaAccion.value = '';

    // creamos el evento de borrado para el nuevo LI
    let miSpan = nuevaLi.querySelector("span");
    borraElementoLi(miSpan, miUl, nuevaLi);
});
// ----------------------------------------------------

