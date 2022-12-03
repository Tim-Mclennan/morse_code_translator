import { textToMorse } from "./textToMorse.js";
import { morseToText } from "./morseToText.js";

let translateEnglishBtn = document.querySelector('.main__btn__container--translate--english');
let translateMorsecodeBtn = document.querySelector('.main__btn__container--translate--morsecode');


translateEnglishBtn.addEventListener("click", () => {
    if (typeof textInput === undefined) {
        return alert("Please enter text, numbers or characters to translate");
    }
    return textToMorse();
});

translateMorsecodeBtn.addEventListener("click", () => {
    if (typeof codeInput === undefined) {
        return alert("Please enter morse code to translate");
    }
    return morseToText();
});