const bar = document.querySelector(".bar");

window.addEventListener("scroll", (event) => {
	const yPos = window.scrollY;
	console.log(yPos);
	
	bar.style.height = `${yPos}px`;	
});