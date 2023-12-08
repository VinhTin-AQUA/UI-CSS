let isCollapsed = true;
let itemElements = document.querySelectorAll(".menu-item");
const deg = 360 / itemElements.length;
const r = 150;

function onClick() {
	if (isCollapsed === true) {
		for (let i = 0; i < itemElements.length; i++) {
			const rotation = i * deg;
			const radian = rotation * (Math.PI / 180);
			const x = r * Math.cos(radian);
			const y = r * Math.sin(radian);

			itemElements[i].style.width = "40px";
			itemElements[i].style.height = "40px";
			itemElements[i].style.lineHeight = "42px";
			itemElements[i].style.fonstSize = "20px";
			itemElements[i].style.transform = `translate(${x}px, ${y}px)`;
		}
		isCollapsed = false;
	} else {
		for (let i = 0; i < itemElements.length; i++) {
			itemElements[i].style.width = "5px";
			itemElements[i].style.height = "5px";
			itemElements[i].style.lineHeight = "10px";
			itemElements[i].style.fonstSize = "5px";
			itemElements[i].style.transform = `translate(0px, 0px)`;
		}
		isCollapsed = true;
	}
}
