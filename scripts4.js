const top = document.querySelector(".top");

window.addEventListener("scroll", (event) => {
	const yPos = window.scrollY;
	console.log(yPos);
	
	top.style.height = `${yPos}px`;	
});