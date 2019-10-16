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

function inputEditor(input) {
	let validSymbols = ['-', '+', '.', ',', '/', ':', '÷', '*', '×', '•', '(', ')'];
	input = '0+' + input;
	let text = '';
	input = input.split('');
	console.log(input);
	
	if (input[0] == '') 
	{
		return 0;
	}

	for (let i = 0; i < input.length; i++) 
	{
		if (!validSymbols.includes(input[i])
			&& !isNumber(input[i])) 
		{
			console.log(input[i])
			return 'z';
		}
	}

	for (let i = 0; i < input.length; i++) 
	{
		if (input[i] == ':' || input[i] == '÷')
		{
			input[i] = '/';
		}

		else if (input[i] == '×' || input[i] == '•')
		{
			input[i] = '*';	
		}
		else if (input[i] == ',')
		{
			input[i] = '.'
		}
		else if (input[i] == ' ')
		{
			input[i] = ''
		}
	}

	let firstElem, lastElem, countMinus;
	countMinus = 0;

	for (let i = 0; i < input.length; i++) 
	{
		if ((input[i] == '+' || input[i] == '-')
			&& (input[i + 1] == '+' || input[i + 1] == '-'))
		{

			firstElem = i;

			for (let j = firstElem; j < input.length; j++) 
			{
				if (input[j] == '+' || input[j] == '-') 
				{
					if (input[j] == '-')
					{
						countMinus++;
					}
					lastElem = j;
				}
				else break;
			}

			if (countMinus % 2 == 0)
			{
				input[firstElem] = '+';
			}
			else
			{
				input[firstElem] = '-';
			}

			input.splice(firstElem + 1, lastElem - firstElem);

			countMinus = 0;
			firstElem = 0;
			lastElem = 0;
		}
	}



	for (let i = 0; i < input.length - 1; i++) 
	{
		if (validSymbols.includes(input[i]) 
			&& input[i] == input[i + 1]
			&& input[i] != '('
			&& input[i] != ')') 
		{
				input[i] = '';
		}
	}

	if (validSymbols.includes(input[input.length - 1]) 
			&& input[input.length - 1] != '('
			&& input[input.length - 1] != ')') 
		{
				input[input.length - 1] = '';
		}


	for (let i = 0; i < input.length; i++) 
	{
		text += input[i];
	}
	console.log("Окончательный результат " + text)
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
		answer.insertAdjacentText('beforeEnd', "Математически неверная операция");
	}

	else if (result == '\u221E' || result == '-\u221E') {
		answer.innerHTML = '= ';
		answer.insertAdjacentText('beforeEnd', result);
	}
	else {
		answer.innerHTML = '= ';
		answer.insertAdjacentText('beforeEnd', result);
	}
}