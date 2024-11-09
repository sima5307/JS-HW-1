// show text ex-1
function showText(){
	document.getElementById('st').innerHTML="Hello World";
}

// change text ex-2
function changeText(){
	document.getElementById('ct').innerHTML="Hello There";
}

// show date ex-3
function showDate(){
	document.getElementById('sd').innerHTML=Date();
}

// on off the bulb ex-4
function bulbOn(){
	document.getElementById('bulb').src="images/on.gif"
}
function bulbOff(){
	document.getElementById('bulb').src="images/off.gif"
}

// change text ex-5
function changeColor(){
	document.getElementById('cs').style.color="red";
}

// change text ex-6
function changeStyle(){
	document.getElementById('fs').style.fontSize="30px";
}

// change text ex-7
function showBorder(){
	document.getElementById('sb').style.border="1px solid red";
}

// on off the bulb ex-4
function textShow(){
	document.getElementById('sh').style.display="block"
}
function textHide(){
	document.getElementById('sh').style.display="none"
}

// change text ex-9
function changeFont(){
	document.getElementById('fw').style.fontWeight="700";
}