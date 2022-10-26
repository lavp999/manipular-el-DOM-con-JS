//alert here

window.onload = function(){
    alert("Hello world");
}


/*window.onload = function(){

    const categorias = [["Cocina","Economía","Deporte"], ["Cocina2","Economía2","Deporte2"]];
      
    const ul = document.createElement('ul');

    categorias.forEach((categoria) => {
        let li = document.createElement('li');
        li.textContent = categoria;
        ul.appendChild(li);
    });

    const list = document.querySelector("#list");
    list.appendChild(ul);

    const boton1 = document.querySelector("#boton1");
    const boton2 = document.querySelector("#boton2");
    const alerta = document.querySelector("#alerta");

    boton1.addEventListener("click", evento =>{
        alerta.classList.remove("alert-warning");
        alerta.classList.add("alert-primary");
    });

    boton2.addEventListener("click", evento =>{
        alerta.classList.remove("alert-primary");
        alerta.classList.add("alert-warning");
    });

}*/