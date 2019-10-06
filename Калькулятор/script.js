let answer = document.querySelector('.answer');
let input = document.querySelector('input');
input.addEventListener('keyup' || 'keydown', Calculate);

//действие при открытии окна
	window.onload = function(){
		answer.innerHTML = '= 0';
	}

	
function isNumber(symbol) {
	if ('0' <= symbol && symbol <= '9') {
		return true;
	}
	else {
		return false;
	}
}

function resultEditor(str) {
	if (str == undefined) {
		str = '';
		return str;
	}
	else if (isNaN(str)) {
		return 'NaN';
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
	let validSymbols = ['-', '+', '/', '*', ':'];
	let text = '';
	input = input.split('');
	
	if (input[0] == '') {
		return 0;
	}

	switch (input[0]) {
		case '*':
		case ':':
		case '/':
			input[0] = 'z'
			break;
		case '+':
		case '-':
			input.unshift('0');
			break;
		}

	for (let i = 0; i < input.length; i++) {
		switch (input[i]) {
			case ',':
				input[i] = '.';
				break;
			case '&':
			case '|':
			case 'x':
			case '_':
			case '%':
			case ';':
			case "'":
			case '"':
				input[i] = 'z'
				break;
			case ':':
				input[i] = '/'
			case '/':
			case '*':
			case '.':
				if (i > 0 && input[i - 1] == '(') {
					input[i] = 'z';
				}
				else if (input[i] == input[i + 1]) {
					input[i] = '';
				}
				else if (validSymbols.includes(input[i + 1])) {
					input[i] = 'z';
				}
				break;
			case '0':
				if (i < input.length-1 && isNumber(input[i + 1])) {
					input[i] = '';
				}
				break;
			console.log(input);
			case '-':
				if (input[i + 1] == '+') {
					input[i+1] = '-';
					input[i] = '';
				}

				else if (input[i + 1] == '-') {
					input[i + 1] = '+';
					input[i] = '';
				}
				console.log('c - ' + input);
				break;

			case '+':
				if(i < input.length - 1) {

					if (input[i + 1] == '-') {
						input[i] = '';
					}
					
					else if (input[i + 1] == '+') {
						input[i + 1] = '+';
						input[i] = '';
					}
				}
				console.log('c + ' + input);
				break;

		}
	}

	switch (input[input.length-1]) {
		case '*':
		case ':':
		case '/':
		case '+':
		case '-':
		case '(':
			input[input.length-1] = '';
			break;
	}

	for (let i = 0; i < input.length; i++) {
		text += input[i];
	}
	console.log('text: ' + text)
	return text;
}


function Calculate () {
	input.className = '';
	let inputValue = document.querySelector('input').value;
	inputValue = inputEditor(inputValue); //Корректируются введенные данные
	//console.log('fdfjd ' + inputValue)
		try {
			result = eval(inputValue);
		}

		catch {
			result = "Ошибка ввода"
			input.className = 'error'; 
			answer.innerHTML = '';
			answer.insertAdjacentText('beforeEnd', result);
			return 0;
		}

	//console.log(result);

	result = resultEditor(result); //Кастомизация результата
	//console.log('  ' + result);
	
	if (result == 'NaN') {
		input.className = 'error'; 
		answer.innerHTML = '';
		answer.insertAdjacentText('beforeEnd', "Ошибка ввода, не делите на 0");
	}

	else {
		answer.innerHTML = '= ';
		answer.insertAdjacentText('beforeEnd', 0 + result);
	}
}