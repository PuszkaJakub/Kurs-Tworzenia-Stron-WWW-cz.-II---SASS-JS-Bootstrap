const arrowIcon = document.querySelector('.fa-arrow-down');
const button = document.querySelector('.arrow');
const hiddenPicture = document.querySelector('.item1');

function showChange() {
	hiddenPicture.classList.toggle('show');
	if (hiddenPicture.classList.contains('show')) {
		console.log(`OK`);
		arrowIcon.style.rotate = '180deg';
	} else {
		console.log(`NIE OK`);
		arrowIcon.style.rotate = '0deg';
	}
}

button.addEventListener('click', showChange);
