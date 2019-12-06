let input = document.querySelector('input'),
	postBtn = document.querySelector('.post_btn');

function styles () {
	let screenWidth = document.documentElement.clientWidth;
	if (screenWidth < 600){
		document.querySelectorAll('.content').forEach(item => item.style.width = screenWidth - 160 + 'px');	
	}
	else
		document.querySelectorAll('.content').forEach(item => item.style.width = screenWidth - 230 + 'px');
}

window.addEventListener('resize', function () {
	styles();
});
window.addEventListener('orientationchange', function () {
	styles();
});

postBtn.addEventListener('click', postTask);
input.addEventListener('keydown', function (e) {
	if(e.key == 'Enter' || e.code == 'Enter')
		postTask();
});

function postTask () {
	if( input.value.split(' ').join('') != ''){
		let li = document.createElement('li');
		let expandBtn = document.createElement('div');
		let content = document.createElement('div');
		let data = document.createElement('div');
		let deleteDiv = document.createElement('div');

		expandBtn.classList.add('expand');
		content.classList.add('content');
		data.classList.add('data');
		deleteDiv.classList.add('delete');

		li.prepend(deleteDiv)
		li.prepend(data);
		li.prepend(content);
		li.prepend(expandBtn);

		content.insertAdjacentText('afterbegin', input.value);
		expandBtn.insertAdjacentHTML('afterbegin','&#8744;')
		deleteDiv.insertAdjacentHTML('afterbegin','&times;')

		let now = new Date();
		let minutes = (now.getMinutes() + '').length == 1? '0' + now.getMinutes() : now.getMinutes();
		let day = (now.getDate() + '').length == 1? '0' + now.getDate() : now.getDate();
		let postingData = '' + now.getHours() + ':' + minutes + ' ' + day + '.' + (now.getMonth() + 1);

		data.insertAdjacentText('afterbegin', postingData);

		document.querySelector('ul').prepend(li);
		deleteDiv.addEventListener('click', deleteTask);
		expandBtn.addEventListener('click', expand);
           
		input.value = '';
		styles();
	}
}

function deleteTask (e) {
	e.target.parentNode.style.width = '0px';
	e.target.parentNode.childNodes[1].innerHTML = '';
        e.target.parentNode.style.height = '40px';
	setTimeout(function () {
		e.target.parentNode.remove();
	}, 1000)
}

function expand (e) {
	if(!e.target.hasAttribute('expanded')){
		e.target.parentNode.childNodes[1].style.marginTop = 
			e.target.parentNode.childNodes[1].clientHeight + 'px';
		e.target.parentNode.style.height = 'auto';

		e.target.style.transform = 'rotate(180deg)';
		e.target.setAttribute("expanded", "");
	}
	else{
		e.target.parentNode.childNodes[1].style.marginTop = '0px';
		e.target.parentNode.style.height = '40px';

		e.target.style.transform = 'rotate(0deg)';

		e.target.removeAttribute("expanded");		
	}
}

