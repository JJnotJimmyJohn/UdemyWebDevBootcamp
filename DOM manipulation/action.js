var button=document.querySelector("#bbb");
var paragraph = document.querySelector("p");

button.addEventListener("click",function(){
	paragraph.classList.toggle("invisible");
	paragraph.textContent="nothing here.";
});