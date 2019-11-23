/*размер текста под размер блока*/
let pages = document.querySelectorAll(".page");
let menu = document.querySelectorAll(".menu");
let pagesList = ['.neple','.main','.price','.about'];
console.log(pages);

function Hider(pageName) {
	let allHeirs = pageName.getElementsByTagName('*');
	for (let i = allHeirs.length - 1; i >= 0; i--) {
		//console.log(allHeirs);
		allHeirs[i].classList.add('hide');
	}
	pageName.classList.add('hide');
}

function Shower(pageName) {
	let allHeirs = pageName.getElementsByTagName('*');
	for (let i = allHeirs.length - 1; i >= 0; i--) {
		//console.log(allHeirs);
		allHeirs[i].classList.remove('hide');
	}
	pageName.classList.remove('hide');
}


for (let i = 0; i < menu.length; i++) {
	menu[i].addEventListener('click', function () {
		for (let j = 0; j < menu.length; j++) {
			if (i == j) {
				Shower(pages[j]);
			}
			else{
				Hider(pages[j]);
			}
		}
	})
}