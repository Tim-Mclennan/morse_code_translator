import { dictionary } from "./JS_files/morse_dictionary";

// const dictionary = {
//     "A": ".-",
//     "B": "-...",
//     "C": "-.-.",
//     "D": "-..",
//     "E": ".",
//     "F": "..-.",
//     "G": "--.",
//     "H": "....",
//     "I": "..",
//     "J": ".---",
//     "K": "-.-",
//     "L": ".-..",
//     "M": "--",
//     "N": "-.",
//     "O": "---",
//     "P": ".--.",
//     "Q": "--.-",
//     "R": ".-.",
//     "S": "...",
//     "T": "-",
//     "U": "..-",
//     "W": ".--",
//     "X": "-..-",
//     "Y": "-.--",
//     "Z": "--.."
//  }

 let textInput = document.querySelector('.main__input__textarea').value;
 let output = document.querySelector('.main__output__textarea').value;
 let translateBtn = document.querySelector('.main__btn--translate');

// console.log(userInput);

translateBtn.addEventListener("click", () => {

    if (typeof textInput === undefined) {
        return alert("Please enter text to translate");
    }

    let textArr = textInput.toUpperCase().split("");
    let morseCodeArr = textArr.map((letter) => {
        if (dictionary[letter]){
            return dictionary[letter];
        } else {
            return letter;
        }
    })

    output = morseCodeArr.join(" ");
    document.querySelector('.main__output__textarea').value = output;
    console.log(output)

});

