import { textToMorse } from "./js/textToMorse.js";
import { morseToText } from "./js/morseToText.js";

let translateEnglishBtn = document.querySelector('.main__btn__container--translate--english');
let translateMorsecodeBtn = document.querySelector('.main__btn__container--translate--morsecode');


translateEnglishBtn.addEventListener("click", () => {
    return textToMorse();
});


translateMorsecodeBtn.addEventListener("click", () => {
    return morseToText();
});

