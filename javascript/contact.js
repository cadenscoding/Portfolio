const form = document.getElementById("form");
let userArray = [];

form.addEventListener("submit", onFormSubmit);

function onFormSubmit(event) {
	event.preventDefault();
	const data = new FormData(event.target);
	const dataObject = Object.fromEntries(data.entries());

	
	userArray.push(dataObject);
	console.log(userArray);
	form.reset();
}
console.log(userArray);