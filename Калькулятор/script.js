let button = document.querySelector('input');
button.addEventListener('keyup', Calculate)

function inputEditor(input){

	let text = '';

	for (let i = 0; i < input.length; i++) {
		if(input[i] != ':') {
			text += input[i];
		}

		else{
			text += "/";
		}
	}

	return text;
}

function Calculate () {
	let input = document.querySelector('input').value;
	let answer = document.querySelector('.answer');
	input = inputEditor(input);
	result = eval(input);
	answer.innerHTML = '';
	if (result != undefined){
		answer.insertAdjacentText('afterbegin', result);
	}
}