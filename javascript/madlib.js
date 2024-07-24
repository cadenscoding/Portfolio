const madlibForm = document.getElementById("madlib-form");
madlibForm.addEventListener("submit", onMadLibFormSubmit);

function onMadLibFormSubmit(event) {
	event.preventDefault();
	const data = new FormData(event.target);
	const dataObject = Object.fromEntries(data.entries());

  const madLib = `Computers are like ${dataObject.adjective1} ${dataObject.noun1}. Sometimes they purr like content ${dataObject.animal}, and other times they ${dataObject.verb1} like a ${dataObject.noun2} with a sore throat. But no matter what, they always seem to ${dataObject.verb2} at the most ${dataObject.adjective2}  moments, like when you're ${dataObject.verbing} your boss about the important ${dataObject.noun3}.
  `;

  
  document.querySelector(".madlib-display").textContent = madLib;
  


	madlibForm.reset();
}


function madlibShow() {
    var contentShow = document.getElementById("madlib-form");
    if (contentShow.style.display === "none") {
      contentShow.style.display = "block";
    } else {
      contentShow.style.display = "none";
    }
  }

madlibShow();



function changeBackground() {
    var color = document.getElementById("color").value; 

  
    document.bgColor = color;
}
document.getElementById("submitColor").addEventListener("click", changeBackground, false);