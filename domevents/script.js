var button = document.getElementById("enter");
var input = document.getElementById("userinput");
var ul = document.querySelector("ul");

function inputLength() {
	return input.value.length;
}

function createListElement() {
	var li = document.createElement("li");
	var button = document.createElement("button");
	li.appendChild(document.createTextNode(input.value));
	button.setAttribute("class", "delete");
	button.appendChild(document.createTextNode("Delete"));
	li.appendChild(button);
	ul.appendChild(li);
	input.value = "";
}

function addListAfterClick() {
	if (inputLength() > 0) {
		createListElement();
	}
}

function addListAfterKeypress(event) {
	if (inputLength() > 0 && event.keyCode === 13) {
		createListElement();
	}
}

function toggleLiElement(elem) {
	elem.classList.toggle("done");
}

function deleteLiElement(elem) {
	elem.parentNode.remove();
}

button.addEventListener("click", addListAfterClick);

input.addEventListener("keypress", addListAfterKeypress);

//using Event Delegation for the Dynamic List Elements
ul.addEventListener("click", function(event) {
	if(event.target.nodeName === "LI"){
		toggleLiElement(event.target);
	}
	else if(event.target.nodeName === "BUTTON") {
		deleteLiElement(event.target);
	}
});
