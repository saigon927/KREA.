const btn = document.querySelector(".header__burger");
const menu = document.querySelector(".header__menu");

btn.addEventListener("click", btnOnclick);

function btnOnclick (e) {	
	btn.classList.toggle("open");
	menu.classList.toggle("open");
}