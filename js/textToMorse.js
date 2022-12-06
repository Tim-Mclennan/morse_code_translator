import dictionary from "./morseDictionary.js";

let textInput = document.querySelector('.main__input__textarea--box--text');

export function textToMorse() {
    console.log(textInput);
    let textInputValue = textInput.value;

    if (textInputValue === "") {
        return alert("Please enter text/morse code to translate");
    }

    let textArr = textInputValue.toUpperCase().split("");
    console.log(textArr);
    let textToMorseArr = textArr.map((letter) => {
        if (dictionary[letter]){
            return dictionary[letter];
        } else {
            return letter;
        }
    })

    let output = textToMorseArr.join(" ");
    document.querySelector('.main__output__textarea').value = output;
    console.log(output)
};


