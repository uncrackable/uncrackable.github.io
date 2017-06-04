var Image = document.querySelector('img');

Image.onclick = function() {
	var Src = Image.getAttribute('src');
	if (Src === 'images/Running1.jpg') {
		Image.setAttribute('src','images/Running2.jpg');
	} else if (Src === 'images/Running2.jpg') {
		Image.setAttribute('src','images/Running3.jpg');
	}
	else {
		Image.setAttribute('src','images/Running1.jpg');
	}
}


var myButton = document.querySelector('button');
var myHeading = document.querySelector('h1');


function setUserName() {
	var myName = prompt('Please enter your name.');
	localStorage.setItem('name', myName);
	myHeading.innerHTML = 'Running is cool, ' + myName;
}


if (!localStorage.getItem('name')) {
	setUserName();
} else {
	var storedName = localStorage.getItem('name');
	myHeading.innerHTML = 'Running is cool, ' + storedName;
}

myButton.onclick = function() {
	setUserName();
}
