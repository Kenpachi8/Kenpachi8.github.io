let arrow = document.querySelector('.exit');
let exit = document.querySelector('.arrow');
function hide () {
	document.querySelector('.contacts').classList.toggle("hide");
	document.querySelector('.contacts2').classList.toggle("hide");
}
exit.addEventListener('click', hide);
arrow.addEventListener('click', hide);