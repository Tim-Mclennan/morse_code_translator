import dictionary from "./morseDictionary.js";

let codeInput = document.querySelector('.main__input__textarea--box--code');

let reverseDictionary = Object.entries(dictionary).reduce((acc, curr) => {
    acc[curr[1]] = curr[0];
    return acc;
}, {});


export function morseToText() {

    let codeInputValue = codeInput.value;

    if (codeInput === undefined) {
        return alert("Please enter text/morse code to translate");
    }


    let morseArr = codeInputValue.split(' '); 
    console.log(morseArr);
    let morseToTextArr = morseArr.map((code) => {
        
        if (reverseDictionary[code]){
            return reverseDictionary[code];
        } else {
            return code;
        }
    });
    console.log(morseToTextArr);

    let output = morseToTextArr.join(" ");
    document.querySelector('.main__output__textarea').value = output.toLowerCase();
    console.log(output)

}
