//your code here
window.onload = function(){

    
    console.log(document.getElementById("theTitle"));
    console.log(document.getElementById("theParagraph"));

    let h1Title = document.querySelector("#theTitle");
    console.log(window.getComputedStyle(h1Title).fontSize);

    alert(h1Title.id);
}