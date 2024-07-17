const sizeUp = document.querySelector('.size-up');
const sizeDown = document.querySelector('.size-down');
const changeColorBtn = document.querySelector('.color');
const p = document.querySelector('p');

let fontSize = 20;
const colors = ['white', 'tomato', 'lime', 'gold', 'royalblue'];
let currentColor = 0;

function bigText() {
	// p.style.fontSize = '150px';
	if (fontSize <= 100) {
		fontSize += 10;
	}
	p.style.fontSize = fontSize + 'px';
}
function smallText() {
	if (fontSize > 10) {
		fontSize -= 10;
	}
	p.style.fontSize = fontSize + 'px';
}
function changeColor() {
	currentColor++;
	currentColor %= colors.length;
	p.style.color = colors[currentColor];
}

sizeUp.addEventListener('click', bigText);
sizeDown.addEventListener('click', smallText);
changeColorBtn.addEventListener('click', changeColor);
