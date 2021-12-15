const canvas = document.querySelector('canvas');
const incBtn = document.getElementById('increase');
const DecBtn = document.getElementById('decrease');
const sizeEl = document.getElementById('size');
const colorEl = document.getElementById('color');
const clearEl = document.getElementById('clear');

const context = canvas.getContext('2d');

let size = 10;
let isPressed = false;
let color = 'black';
let x;
let y;

function drawCircle(x, y) {
	context.beginPath();
	context.arc(x, y, size, 0, Math.PI * 2);
	context.fillStyle = color;
	context.fill();
}

function drawLine(x1, y1, x2, y2) {
	context.beginPath();
	context.moveTo(x1, y1);
	context.lineTo(x2, y2);
	context.strokeStyle = color;
	context.lineWidth = size * 2;
	context.stroke();
}

function updateSize() {
	sizeEl.innerText = size;
}

canvas.addEventListener('mousedown', (e) => {
	isPressed = true;

	x = e.offsetX;
	y = e.offsetY;
})

canvas.addEventListener('mouseup', () => {
	isPressed = false;

	x = undefined;
	y = undefined;
})

canvas.addEventListener('mousemove', (e) => {
	if (isPressed) {
		const x2 = e.offsetX;
		const y2 = e.offsetY;

		drawCircle(x2, y2);
		drawLine(x, y, x2, y2);

		x = x2;
		y = y2;
	}
})


canvas.addEventListener('click', (e) => {
	x = e.offsetX;
	y = e.offsetY;

	drawCircle(x, y);
})

incBtn.addEventListener('click', () => {
	size += 5;

	if (size > 50) size = 50;

	updateSize();
})

DecBtn.addEventListener('click', () => {
	size -= 5;

	if (size < 5) size = 5;

	updateSize();
})

colorEl.addEventListener('click', (e) => color = e.target.value);
clearEl.addEventListener('click', () => context.clearRect(0, 0, canvas.width, canvas.height));