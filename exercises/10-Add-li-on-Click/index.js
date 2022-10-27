let button = document.querySelector("#superDuperButton");
button.addEventListener("click", function() {
	//your code here
	let miUl = document.querySelector("#myList");
	let miLi = document.createElement("li")
	miLi.innerHTML = "Uno mas";
	miUl.appendChild(miLi);
});
