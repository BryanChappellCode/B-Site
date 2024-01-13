// JavaScript Document

//Variables
const nav_tutorials = document.getElementById('tutorials');
const nav_calculator = document.getElementById('calculator');
const nav_about = document.getElementById('about');
const nav_contact = document.getElementById('contact');

//Event Listeners
nav_tutorials.addEventListener("mouseover", mouse_over_text);
nav_tutorials.addEventListener("mouseout", mouse_exit_text);
nav_calculator.addEventListener("mouseover", mouse_over_text);
nav_calculator.addEventListener("mouseout", mouse_exit_text);
nav_about.addEventListener("mouseover", mouse_over_text);
nav_about.addEventListener("mouseout", mouse_exit_text);
nav_contact.addEventListener("mouseover", mouse_over_text);
nav_contact.addEventListener("mouseout", mouse_exit_text);

//Functions
function mouse_over_text(){
	document.getElementById(this.id).style.opacity = 0.8;
	document.getElementById(this.id).style.textDecoration = 'underline';
}

function mouse_exit_text(){
	document.getElementById(this.id).style.opacity = 1;
	document.getElementById(this.id).style.textDecoration = 'none';
}



