let countries = ["USA", "France", "Italy", "Brazil", "Colombia", "Belize", "Venezuela"];
// your code here

let miSelect = document.getElementById("mySelect");
let miOpcion;



function creaAlerta(e){
    let miSelect = document.getElementById("mySelect");

    var selectedOption = this.options[miSelect.selectedIndex];
    //console.log(selectedOption);

    alert(selectedOption.value + ': ' + selectedOption.text);

}


countries.forEach(function(unPais, indice){
    miOpcion = document.createElement("option");
    miOpcion.setAttribute("value", "value"+indice);
    let miOpcionTexto = document.createTextNode(unPais);
    miOpcion.appendChild(miOpcionTexto);
    miSelect.appendChild(miOpcion);    
});
        
document.body.appendChild(miSelect);

miSelect.addEventListener("change", creaAlerta, false);