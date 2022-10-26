//alert here

window.onload = function(){

    const categorias = ["Cocina","Economía","Deporte"];
    const ul = document.createElement('ul');

    categorias.forEach((categoria) => {
        let li = document.createElement('li');
        li.textContent = categoria;
        ul.appendChild(li);
    });

    const list = document.querySelector("#list");
    list.appendChild(ul);

}