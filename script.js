const btnEncrypt = document.querySelector("#btnEncrypt")
const btnDecrypt = document.querySelector("#btnDecrypt")
const btnCopy = document.querySelector(".genTxt button")
const input = document.querySelector("main div input")
const textGenerated = document.querySelector(".genTxt p")
const genTxt = document.querySelector("#genTxt")
const noMsg = document.querySelector("#noMsg")

// input.addEventListener('change', 
function a() {
    if (input.value === "") {
        btnDecrypt.setAttribute('disabled', true)
        btnEncrypt.setAttribute('disabled', true);
    }
    else {
        btnDecrypt.removeAttribute('disabled');
        btnEncrypt.removeAttribute('disabled');
    }
}
// );

btnEncrypt.addEventListener('click', () => {
	let output = "";
	let displacement = 3;
	
	let index = 0;
	for (let letter of input.value.toLocaleUpperCase()) {
		output += String.fromCharCode(65 + (((letter.charCodeAt(0) - 65) + displacement) % 26));
		index += 1;
	}
	
    alert(output);
	textGenerated.value.innerText = output;

    noMsg.style.display = "none"
});





// btnDecrypt.addEventListener('click', () => {

// });

// btnCopy.addEventListener('click', () => {

// });