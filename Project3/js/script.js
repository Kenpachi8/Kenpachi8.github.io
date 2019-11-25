let screenHeight = document.documentElement.clientHeight;
document.querySelector('.box3').style.width = 
	document.querySelector('.box2').clientWidth + 
	document.querySelector('.box1').clientWidth + 20 +'px'
document.querySelector('.questions').style.height = 
	document.querySelector('.question_container').clientHeight + 'px'

window.addEventListener('orientationchange', function () {
	document.querySelector('.box3').style.width = 
		document.querySelector('.box2').clientWidth + 
		document.querySelector('.box1').clientWidth + 20 +'px'
	document.querySelector('.questions').style.height = 
		document.querySelector('.question_container').clientHeight + 'px'	 
})

function getYCoordinats(elem) {
  return elem.getBoundingClientRect().top + pageYOffset;
}

window.addEventListener('scroll', function() {
	//console.log(window.scrollY);
	if(window.scrollY > 10){
		document.querySelector('.main_text').style.marginTop = 0 + 'px';
		document.querySelector('.gradient').style.opacity = '1';
		setTimeout(function () {
			document.querySelector('hr').style.display = 'block';
			document.querySelector('hr').style.width = document.querySelector('.neple_layer').clientWidth + 'px';
		}, 1500)
	}
	let questions = document.querySelector('.questions');
	let questionsY = getYCoordinats(questions)
	//console.log('ycoordinatr ' + heloY);
	if (window.scrollY > questionsY - screenHeight){
		setTimeout(function () {
			document.querySelector('.question_container').style.marginTop = 0 + 'px';
				window.addEventListener('scroll', function() {
				setTimeout(function () {
					document.querySelectorAll('.gradient2').forEach(item => item.style.marginTop = 0 + 'px');
				}, 1000)
			});
		}, 1000)
	}

});

document.querySelectorAll('.gradient2 a').forEach(item => item.addEventListener('click', modalWindow));

function modalWindow(){
	document.querySelector('.modal').style.display = 'block';
}

document.querySelector('.exit').addEventListener('click', function() {
	document.querySelector('.modal').style.display = 'none';
})

