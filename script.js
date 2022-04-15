const btnEncrypt = document.querySelector("#btnEncrypt")
const btnDecrypt = document.querySelector("#btnDecrypt")
const btnCopy = document.querySelector("#copy-text button")
const textarea = document.querySelector("main div textarea")
const textGenerated = document.querySelector(".genTxt input")
const genTxt = document.querySelector("#genTxt")
const noMsg = document.querySelector("#noMsg")
let displacement = 3;

textarea.addEventListener('change', () => {
    if (textarea.value === "") {
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
	
	for (let letter of textarea.value.toLocaleUpperCase()) {
        if (letter == " ") {
            output += " ";
        }
		else {
            output += String.fromCharCode(65 + (((letter.charCodeAt(0) - 65) + displacement) % 26));
        }
	}
	
	textGenerated.value= output;

    noMsg.style.display = "none";
    genTxt.style.display = "flex";
});

btnDecrypt.addEventListener('click', () => {
	let output = "";
	
	for (let letter of textarea.value.toLocaleUpperCase()) {
        if (letter == " ") {
            output += " ";
        }
		else {
            output += String.fromCharCode(decrypt(letter));
        }
	}
	
	textGenerated.value= output;
    
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
    textGenerated.select();
    document.execCommand('copy');
    let copyText = document.querySelector("#copy-text");
    copyText.classList.add("active")
    window.getSelection().removeAllRanges();
    setTimeout(() => {
        copyText.classList.remove("active")
    }, 2000);
});