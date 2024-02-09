var btn = document.querySelector('.heart-btn');
let isActivated = false;

btn.addEventListener('click', async () => {
	await changeImg();

	if (isActivated === false) {
		await addActive();
		await removeActive();
	}
});

function changeImg() {
	return new Promise(resolve => {
		setTimeout(() => {
			if (isActivated == false) {
				btn.innerHTML = `<img src="svg/heart-regular.svg" alt="">`;
				isActivated = true;
			} else {
				btn.innerHTML = `<img src="svg/heart-solid.svg" alt="">`;
				isActivated = false;
			}
			resolve();
		}, 0);
	});
}

function addActive() {
	return new Promise(resolve => {
		setTimeout(() => {
			btn.classList.add('active');
			resolve();
		}, 20);
	});
}

function removeActive() {
	return new Promise(resolve => {
		setTimeout(() => {
			btn.classList.remove('active');
			resolve();
		}, 120);
	});
}
