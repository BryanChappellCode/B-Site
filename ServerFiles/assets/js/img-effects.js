// JavaScript Document

//Variables
const logo = document.getElementById('logo-main');

//Event Listeners

logo.addEventListener("click", go_home);
logo.addEventListener("mouseover", enlarge_image);
logo.addEventListener("mouseout", shrink_image);


//Functions

function enlarge_image(){
	
	const img = document.getElementById(this.id);
	
	img.style.width = '155px';
	img.style.height = '155px';
	img.style.top = '10px';
	img.style.left = '10px';
	
}

function shrink_image(){
	
	const img = document.getElementById(this.id);
	
	img.style.width = '150px';
	img.style.height = '150px';
	img.style.top = '15px';
	img.style.left = '15px';
	
}

function go_home(){
	
	window.location.href = '/';
	
}