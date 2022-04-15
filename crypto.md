******
Cifra de Cezar
XOR
Sha-1
Sha-2
Sha-3
Sha-256

"A".charCodeAt(0).toString(2); 
"F".charCodeAt(0).toString(2);

("F".charCodeAt(0).toString(2) | "A".charCodeAt(0).toString(2))

String.fromCharCode(parseInt('1000111', 2));


Texto: <input id="input" onchange="exec()"/>
<br>
Chave: <input id="key" onchange="exec()"/>
<h1 id="whatever">...</h1>

function exec() {
	let output = "";
	let displacement = 3;
	
	let index = 0;
	for (let letter of input.value.toLocaleUpperCase()) {
		output += String.fromCharCode(65 + (((letter.charCodeAt(0) - 65) + key.value[index % key.value.length].charCodeAt(0)) % 26));
		index += 1;
	}
	
	whatever.innerText = output;
}