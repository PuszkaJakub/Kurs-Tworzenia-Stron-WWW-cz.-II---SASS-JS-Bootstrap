// Pobierz 4 elementy (3 przyciski i DIV z klasą 'color')
const redBtn = document.querySelector('#btn1');
const blueBtn = document.querySelector('.btn2');
const square = document.querySelector('.color');
const removeColorBtn = document.querySelector('.remove-color');

function redColor() {
	square.classList.add('red');
}

// 1. Stwórz funkcję blueColor, która będzie dodawała niebieską klasę do 'square'.
// 2. Nadaj listenery na przyciski 'CZERWONY' oraz 'NIEBIESKI'.
//      Kliknięcie czerwonego przycisku ma wywołać funkcję 'redColor' a niebieskiego funckję 'blueColor'

function blueColor() {
	square.classList.add('blue');
}

// redBtn.addEventListener('click', redColor)
// blueBtn.addEventListener('click', blueColor)

// Wystepuje problem, gdyż klasy tego diva się po prostu nadpisują.
// W CSS klasa .red jest niżej, dlatego zawsze będzie nadpisywała zmiane background color dla naszego diva.
// Rozwiązaniem tego problemu jest reset klas za każdym razem:

function blueColor1() {
	square.classList = ['color blue'];
}

function redColor1() {
	square.classList = ['color red'];
}

redBtn.addEventListener('click', redColor1);
blueBtn.addEventListener('click', blueColor1);

// Update: Koles w kursie powiedział, że trzeba dodawać klase red, ale usuwać blue i na odwrót.
// Ja jednak zostane przy swoim rozwiązaniu. Bo moje działa i jest moje.
// Rozwiązanie typa:

function redColor2() {
	square.classList.add('red');
	square.classList.remove('blue');
}

function blueColor2() {
	square.classList.add('blue');
	square.classList.remove('red');
}

// Stwórz funkcję 'deleteColor'
// Funkcja ma usuwać zarówno klasę 'red' jak i klasę 'blue'.
// Funkcja ma być odpalana na kliknięcie przycisku 'PRZYWRÓĆ KOLOR'

function deleteColor() {
	square.classList.remove('red');
	square.classList.remove('blue');
}

removeColorBtn.addEventListener('click', deleteColor);