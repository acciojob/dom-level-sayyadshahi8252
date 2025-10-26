//your JS code here. If required.

let targetedli=document.getElementById("level");
let current=targetedli;
let level=0;
while(current){
	level++;
	current=current.parentElement;
}
alert(`The level of the element is: ${level}`)
