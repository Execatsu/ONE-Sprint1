const btnEncrypt = document.querySelector("#btnEncrypt")
const btnDecrypt = document.querySelector("#btnDecrypt")
const btnCopy = document.querySelector(".genTxt button")
const input = document.querySelector("main div input")
const textGenerated = document.querySelector(".genTxt p")
const genTxt = document.querySelector("#genTxt")
const noMsg = document.querySelector("#noMsg")
let displacement = 3;

input.addEventListener('change', () => {
    if (input.value === "") {
        btnDecrypt.setAttribute('disabled', true)
        btnEncrypt.setAttribute('disabled', true);
    }
    else {
        btnDecrypt.removeAttribute('disabled');
        btnEncrypt.removeAttribute('disabled');
    }
}
);

btnEncrypt.addEventListener('click', () => {
	let output = "";
	
	for (let letter of input.value.toLocaleUpperCase()) {
        if (letter == " ") {
            output += " ";
        }
		else {
            output += String.fromCharCode(65 + (((letter.charCodeAt(0) - 65) + displacement) % 26));
        }
	}
	
	textGenerated.innerText = output;

    noMsg.style.display = "none";
    genTxt.style.display = "flex";
});

btnDecrypt.addEventListener('click', () => {
	let output = "";
	
	for (let letter of input.value.toLocaleUpperCase()) {
        if (letter == " ") {
            output += " ";
        }
		else {
            output += String.fromCharCode(decrypt(letter));
        }
	}
	
	textGenerated.innerText = output;
    
    noMsg.style.display = "none";
    genTxt.style.display = "flex";
});

function decrypt(letter) {
    let charc = (letter.charCodeAt(0) - displacement - 65)
    if (charc != parseInt(charc)) {
        console.log("if = true; charc >>> " + charc)
        return charc + 65;
    } else {
        console.log("if = false; charc >>> " + 91 + charc); 
        return (26 + charc + 65);
    }
}

btnCopy.addEventListener('click', () => {
    document.execCommand("copy");
    alert("O texto é: " + textGenerated.textContent);
    document.queryCommandValue("copy")
});