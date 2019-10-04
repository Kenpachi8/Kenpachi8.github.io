let button = document.querySelector('button');
button.addEventListener('click', Calculate)

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
	let result = eval(input);
	answer.innerHTML = '';
	answer.insertAdjacentText('afterbegin', result);
}