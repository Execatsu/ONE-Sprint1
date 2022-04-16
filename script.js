const btnEncrypt = document.querySelector("#btnEncrypt");
const btnDecrypt = document.querySelector("#btnDecrypt");
const textarea = document.querySelector("main div textarea");
const textGenerated = document.getElementById('genTxtP');

let displacement = 3;

btnDecrypt.addEventListener('click', () => {main('decrypt')});
btnEncrypt.addEventListener('click', () => {main('encrypt')});

function main(type) {
	let output = "";
	
	for (let letter of textarea.value.toLocaleUpperCase()) {

        if (letter == " ") {
            output += " ";
            continue;
        }

        if (type === 'decrypt') {
            output += String.fromCharCode(decrypt(letter));
            continue;
        }

        output += String.fromCharCode(65 + (((letter.charCodeAt(0) - 65) + displacement) % 26));
	}
	
	textGenerated.textContent= output;
    
    document.getElementById('noMsg').style.display = "none";
    document.getElementById('genTxt') .style.display = "flex";
}

function decrypt(letter) {
    let charc = (letter.charCodeAt(0) - displacement - 65);

    if (charc == Math.abs(charc)) { return charc + 65; }
    else { return (26 + charc + 65); }
}

textarea.addEventListener('change', function(event) {
    let content = textarea.value;
    let status;

    if (content !== null && content !== '') { status = false }
    else { status = true }

    btnDecrypt.disabled = status;
    btnEncrypt.disabled = status;
});

document.querySelector("#copy-text button").addEventListener('click', () => {
    navigator.clipboard.writeText(textGenerated.textContent)
    showCopiedPopup()
});

function showCopiedPopup() {
    let copyText = document.querySelector('copy-text');
    copyText.classList.add("active")

    setTimeout(() => { copyText.classList.remove("active") }, 2000);
}