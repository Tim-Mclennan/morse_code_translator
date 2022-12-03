import { textToMorse } from "../js/textToMorse.js";

const paramTypeError = new Error("This input should only include strings, numbers and characters..");
const noArgError = new Error("The input should have at least one letter.");

// const translateToMorse = (string) => {
//     if (typeof string === undefined) {
//         throw new Error("Input invalid...");
//     } 

//     if (string === "") {
//         throw new Error("No Input detected...")
//     }
// };

describe("Test cases for test to morse code translation", () => {
    it("should translate english text, numbers and characters to morse code.", () => {
        expect(textToMorse("hello")).toBe(".... . .-.. .-.. ---");
        expect(textToMorse("How are you doing today?")).toBe(".... --- .--   .- .-. .   -.-- --- ..-   -.. --- .. -. --.   - --- -.. .- -.-- ..--..");
        expect(textToMorse("I am turning 25 this year.")).toBe("..   .- --   - ..- .-. -. .. -. --.   ..--- .....   - .... .. ...   -.-- . .- .-. .-.-.-");
        expect(textToMorse("Are you kidding me?!")).toBe(".- .-. .   -.-- --- ..-   -.- .. -.. -.. .. -. --.   -- . ..--.. -.-.--");
    })

    it("should have at least one letter", () => {
        expect(() => {
            textToMorse()
        })
    })
})