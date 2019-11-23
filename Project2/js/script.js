/*Скрипт для меню*/
let pages = document.querySelectorAll(".page");
let menu = document.querySelectorAll(".menu");
let pagesList = ['.neple','.main','.price','.about'];

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

/*Скрол????????????????????????*/
let galery = document.querySelector('.galery');
let scrollBar = document.querySelector('.horizontalScrollBar');
let screenWidth = document.documentElement.clientWidth;
scrollBar.oninput = scroll;

function scroll () {
	let galeryWidth = document.querySelectorAll('.photo_line')[0].clientWidth;
	console.log(galeryWidth);
	let step = (galeryWidth-screenWidth)/100;
	document.querySelectorAll('.photo_line')[0].style.paddingLeft = (-step*scrollBar.value) +'px';
	document.querySelectorAll('.photo_line')[1].style.paddingLeft = (-step*scrollBar.value) +'px';
	//console.log(-step*scrollBar.value)
}

/*полноразмерная картинка*/
let img = document.querySelectorAll(".main img");

function fullscreenImg(e) {
	let imgSection = document.createElement('div');
	let img = document.createElement('img');
	let exit = document.createElement('div');
	imgSection.classList.add('fullScreenPhotoDiv');
	img.src = e.target.src;

	if(document.documentElement.clientWidth > document.documentElement.clientHeight){
		img.classList.add('fullScreenPhoto');
	}
	else{
		img.classList.add('fullScreenPhotoMobile');
	}
	exit.classList.add('exit');
	exit.textContent = '\u00D7';

	imgSection.addEventListener('click', function (e) {
		if(e.target.className != 'fullScreenPhoto'){
			console.log(e.target.className);
			imgSection.style.display = 'none';
		}
	})

	document.querySelector('.main').prepend(imgSection);
	imgSection.append(img);
	imgSection.append(exit);
	console.log('work');
	console.log(e.target);
	console.log(exit);
}

	for (let i = img.length - 1; i >= 0; i--) {
		img[i].addEventListener('click', fullscreenImg);
	}
