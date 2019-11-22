let pages = document.querySelectorAll(".pages");
let pagesList = ['.neple','.main','.price','.about'];
for (let i = 0; i < pages.length; i++) {
	pages[i].addEventListener('click', function () {
		for (let j = 0; j < pages.length; j++) {
			if (i == j) {
				document.querySelector(pagesList[j]).classList.remove('hide');
			}
			else{
				document.querySelector(pagesList[j]).classList.add('hide');
			}
		}
	})
}	

let img = document.querySelectorAll(".main img");

function fullscreenImg(e) {
	let imgSection = document.createElement('div');
	let img = document.createElement('img');
	let exit = document.createElement('div');
	imgSection.classList.add('fullScreenPhotoDiv');
	img.src = e.target.src;
	img.classList.add('fullScreenPhoto');
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

let galery = document.querySelector('.galery');
let scrollBar = document.querySelector('.horizontalScrollBar');
scrollBar.oninput = scroll;

function scroll () {
	let galeryWidth = galery.clientWidth;
	let screenWidth = document.documentElement.clientWidth;
	console.log(screenWidth);
	let step = (galeryWidth-screenWidth)/100;
	document.querySelector('.galery').style.marginLeft = -step*scrollBar.value +'px';
	console.log(galeryWidth);
}
