import { translateToMorse } from "./textToMorse.js";

const paramTypeError = new Error("This input should include english letters.");
const noArgError = new Error("The input should have at least one letter");

describe("Test cases for test to morse code translation", () => {
    it("Translates english text to morse code", () => {
        expect(string("hello").tobe(".... . .-.. .-.. ---"));
        expect(string("How are you doing today?").tobe(".... --- .--   .- .-. .   -.-- --- ..-   -.. --- .. -. --.   - --- -.. .- -.-- ..--.."));
        expect(string("I am turning 25 this year.").tobe("..   .- --   - ..- .-. -. .. -. --.   ..--- .....   - .... .. ...   -.-- . .- .-. .-.-.-"));
        expect(string("Are you kidding me?!").tobe(".- .-. .   -.-- --- ..-   -.- .. -.. -.. .. -. --.   -- . ..--.. -.-.--"));
    })

    it("should have parameters of string and number.", () => {
        expect(() => {
            string()
        })
    })
})