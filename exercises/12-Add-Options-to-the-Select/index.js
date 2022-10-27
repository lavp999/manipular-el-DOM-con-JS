let countries = ["USA", "France", "Italy", "Brazil", "Colombia", "Belize", "Venezuela"];
// your code here

let miSelect = document.getElementById("#mySelect");
let miOpcion = document.createElement("option");
console.log(miSelect);
console.log(miOpcion);
countries.forEach(function(unPais, indice){
                miOpcion.innerHTML = unPais;
                miOpcion.value = indice;
                miSelect.appendChild(miOpcion);
            });
