const inputA = document.getElementById("inputA");
const inputB = document.getElementById("inputB");
const result = document.getElementById("result");
const sumButton = document.getElementById("sumButton");
sumButton.onclick = function(){
	const a = Number(inputA.value);
	const b = Number(inputB.value);
	const c = a + b;
	result.innerText = c;
	}
const subButton = document.getElementById("subButton");
subButton.onclick = function(){
	const a = Number(inputA.value);
	const b = Number(inputB.value);
	const c = a - b;
	result.innerText = c;
	}
const mulButton = document.getElementById("mulButton");
mulButton.onclick = function(){
	const a = Number(inputA.value);
	const b = Number(inputB.value);
	const c = a * b;
	result.innerText = c;
	}
const divButton = document.getElementById("divButton");
divButton.onclick = function(){
	const a = Number(inputA.value);
	const b = Number(inputB.value);
	const c = a / b;
	result.innerText = c;
	}