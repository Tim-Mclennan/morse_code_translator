import dictionary from "./morseDictionary.js";

let codeInput = document.querySelector('.main__input__textarea--box--code').value;
// let translateMorsecodeBtn = document.querySelector('.main__btn__container--translate--morsecode');

let reverseDictionary = Object.entries(dictionary).reduce((acc, curr) => {
    acc[curr[1]] = curr[0];
    return acc;
}, {});


export function morseToText() {
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

    let output = morseToTextArr.join(" ");
    document.querySelector('.main__output__textarea').value = output.toLowerCase();
    console.log(output)

}



// translateMorsecodeBtn.addEventListener("click", () => {
//     return morseToText();
 
// })