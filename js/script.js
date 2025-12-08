const display = document.getElementById('display');

function appendToDisplay(input){
	display.value += input; 
}
function clearDisplay(){
	display.value =""
}
function calc(){
	display.value = eval(display.value);
}
function delOne(){
	display.value = display.value.slice(0,-1)
}