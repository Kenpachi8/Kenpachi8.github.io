let screenHeight = document.documentElement.clientHeight;
let screenWidth = document.documentElement.clientHeight;
let modal = document.querySelector('.modal');
function styles () {
	document.querySelector('.box3').style.width = 
		document.querySelector('.box2').clientWidth + 
		document.querySelector('.box1').clientWidth + 20 +'px'
	document.querySelector('.questions').style.height = 
		document.querySelector('.question_container').clientHeight + 'px';

	document.querySelector('.question_container').style.marginTop = 
		document.querySelector('.questions').clientHeight + 'px';

	document.querySelector('.main_text').style.marginTop = 
		document.querySelector('.main').clientHeight + 
		document.querySelector('.nav').clientHeight + 'px';


	screenWidth > screenHeight? 
	modal.style.width = modal.style.height = '60vh' :
	modal.style.width = modal.style.height = '60vw'; 
}

styles();

window.addEventListener('resize', styles);
window.addEventListener('orientationchange', styles);

window.addEventListener('scroll', function() {
	//console.log(window.scrollY);
	if(window.scrollY > 10){
		document.querySelector('.main_text').style.marginTop = 0 + 'px';
		document.querySelector('.gradient').style.opacity = '1';
		setTimeout(function () {
			document.querySelector('hr').style.display = 'block';
			document.querySelector('hr').style.width = document.querySelector('.neple_layer').clientWidth + 'px';
		}, 1200)
	}
	let questions = document.querySelector('.questions');
	let questionsY = getYCoordinats(questions)
	//console.log('ycoordinatr ' + heloY);
	if (window.scrollY > questionsY - screenHeight){
		setTimeout(function () {
			document.querySelector('.question_container').style.marginTop = 0 + 'px';
			document.querySelector('.gradient3').style.opacity = '0.6';
		}, 1000)
	}
});

function getYCoordinats(elem) {
  return elem.getBoundingClientRect().top + pageYOffset;
}

document.querySelectorAll('.gradient2 a').forEach(item => item.addEventListener('click', modalWindow));

function modalWindow(){
	document.querySelector('.modal').style.display = 'block';
}

document.querySelector('.exit').addEventListener('click', function() {
	modal.style.display = 'none';
})