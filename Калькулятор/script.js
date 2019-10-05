let button = document.querySelector('input');
button.addEventListener('keyup' || 'keydown', Calculate)
/*
function inputEditor(input) {

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
*/
function resultEditor(str) {
	if (str == undefined) {
		str = '= 0';
		return str;
	}

	else if (str == Infinity) {
		str = '\u221E'
		return str; 
	}

	else if (str == -Infinity) {
		str = '-\u221E'
		return str; 
	}

	return str;
}

function inputEditor(input){

	let text = '';
	input = input.split('');

	if (!(('0' <= input[input.length-1]) && (input[input.length-1] <= '9'))) {
		input.splice(input.length-1, 1);
	}

	for (let i = 0; i < input.length; i++) {

		if (!(('0' <= input[i]) 
			&& (input[i] <= '9')) 
			&& (input[i] == input[i + 1])) {
			if (input[i] == '-') {
				input[i] = '+';
				input.splice(i + 1, 1);
			}
			
			else {
				input.splice(i, 1);
				i--;
			}

			} 

		else if (input[i] == ':') {
			input[i] = '/';
		}
	}

	for (let i = 0; i < input.length; i++) {
		text += input[i];
	}
	return text;
}


function Calculate () {
	let input = document.querySelector('input').value;
	let answer = document.querySelector('.answer');
	input = inputEditor(input);

	try {
		result = eval(input);
	}

	catch {
		result = "Ошибка ввода"
		answer.innerHTML = '';
		answer.insertAdjacentText('afterbegin', result);
		return 0;
	}

	console.log(result);

	result = resultEditor(result);
	console.log('  ' + result);

	answer.innerHTML = '';
	answer.insertAdjacentText('afterbegin', result);
	
}