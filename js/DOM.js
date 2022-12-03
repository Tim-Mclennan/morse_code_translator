import { textToMorse } from "./textToMorse.js";
import { morseToText } from "./morseToText.js";

let translateEnglishBtn = document.querySelector('.main__btn__container--translate--english');
let translateMorsecodeBtn = document.querySelector('.main__btn__container--translate--morsecode');


translateEnglishBtn.addEventListener("click", () => {

    if (typeof textInput === undefined) {
        return alert("Please enter text/morse code to translate");
    }

    return textToMorse();
});


translateMorsecodeBtn.addEventListener("click", () => {
    return morseToText();
});