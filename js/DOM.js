import dictionary from "./../js/morseDictionary.js";

let textInput = document.querySelector('.main__input__textarea--box--text').value;
let codeInput = document.querySelector('.main__input__textarea--box--code').value;
let output = document.querySelector('.main__output__textarea').value;
let translateEnglishBtn = document.querySelector('.main__btn__container--translate--english');
let translateMorsecodeBtn = document.querySelector('.main__btn__container--translate--morsecode');


// let textareaOutputtext = document.createTextNode(textInput);


translateEnglishBtn.addEventListener("click", () => {
    // window.location.reload();

    if (typeof textInput === undefined) {
        return alert("Please enter text/morse code to translate");
    }

    let textArr = textInput.toUpperCase().split("");
    let textToMorseArr = textArr.map((letter) => {
        if (dictionary[letter]){
            return dictionary[letter];
        } else {
            return letter;
        }
    })

    output = textToMorseArr.join(" ");
    document.querySelector('.main__output__textarea').value = output;
    console.log(output)
});


let reverseDictionary = Object.entries(dictionary).reduce((acc, curr) => {
    acc[curr[1]] = curr[0];
    return acc;
}, {});

translateMorsecodeBtn.addEventListener("click", () => {

    let morseArr = codeInput.split(' '); 
    console.log(morseArr);
    let morseToTextArr = morseArr.map((code) => {
        
        if (reverseDictionary[code]){
            return reverseDictionary[code];
        } else {
            return code;
        }
    });
    console.log(morseToTextArr);

    output = morseToTextArr.join(" ");
    document.querySelector('.main__output__textarea').value = output.toLowerCase();
    console.log(output)

})