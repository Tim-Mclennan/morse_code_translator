import dictionary from "./morseDictionary.js";

let textInput = document.querySelector('.main__input__textarea--box--text').value;
let output = document.querySelector('.main__output__textarea').value;
// let translateEnglishBtn = document.querySelector('.main__btn__container--translate--english');

export function textToMorse() {
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
    console.log("this works");
}


    // translateEnglishBtn.addEventListener("click", () => {

    //     if (typeof textInput === undefined) {
    //         return alert("Please enter text/morse code to translate");
    //     }

    //     return textToMorse();
    // });
