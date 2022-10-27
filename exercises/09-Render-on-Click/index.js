let boton = document.querySelector("#superDuperButton");
boton.addEventListener("click", function() {
	//your code here
	let miDiv = document.createElement("div");

	miDiv.style.background = "Yellow";
	miDiv.innerHTML = "<h1>Hello world</h1>";
	document.body.appendChild(miDiv);
});

