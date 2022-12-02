export const translateToMorse = (string) => {
    if (typeof string === undefined) {
        throw new Error("Input invalid...");
    } 

    if (string === "") {
        throw new Error("No Input detected...")
    }
}