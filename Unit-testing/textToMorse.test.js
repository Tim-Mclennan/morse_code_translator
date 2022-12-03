import { textToMorse } from "../js/textToMorse.js";

const noArgError = new Error("The input should have at least one letter.");


describe("Test cases for test to morse code translation", () => {
    it("should translate english text, numbers and characters to morse code.", () => {
        expect(textToMorse("hello")).toBe(".... . .-.. .-.. ---");
        expect(textToMorse("How are you doing today?")).toBe(".... --- .--   .- .-. .   -.-- --- ..-   -.. --- .. -. --.   - --- -.. .- -.-- ..--..");
        expect(textToMorse("I am turning 25 this year.")).toBe("..   .- --   - ..- .-. -. .. -. --.   ..--- .....   - .... .. ...   -.-- . .- .-. .-.-.-");
        expect(textToMorse("tim$mclennan@gmail.com()")).toBe("- .. -- ...-..- -- -.-. .-.. . -. -. .- -. .--.-. --. -- .- .. .-.. .-.-.- -.-. --- -- -.--. -.--.-");
    })

    it("should have at least one letter", () => {
        expect(() => {
            textToMorse("");
        }).toThrow(noArgError);
        expect(() => {
            textToMorse();
        }).toThrow(noArgError);
    })

})