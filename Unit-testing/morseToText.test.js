import { morseToText } from "../js/morseToText.js";

const noArgError = new Error("The input should have at least one letter.");


describe("Test cases for test to morse code translation", () => {
    it("should translate english text, numbers and characters to morse code.", () => {
        expect(morseToText("-.-- . ... --..--   ..   - .... .. -. -.-   ... --- .-.-.-")).toBe("yes, i think so.");
        expect(morseToText("-- -.--   .--. .- ... ... .-- --- .-. -..   .. ...   ...-..- 	.-... .--. .- ... ... .-- --- .-. -.. ..--..")).toBe("My password is $&password?");
        expect(morseToText("... -.-- -.. -. . -.--   .. ...   .-   --. .-. . .- -   .--. .-.. .- -.-. .   -.. ..- .-. .. -. --.   - .... .   ... ..- -- -- . .-. .-.-.-  ")).toBe("Sydney is a great place during the Summer. ");
    })

    it("should have at least one code letter", () => {
        expect(() => {
            morseToText("");
        }).toThrow(noArgError);
        expect(() => {
            morseToText();
        }).toThrow(noArgError);
    })

});