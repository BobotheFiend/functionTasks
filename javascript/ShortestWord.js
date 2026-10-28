
const shortestWord = (input) => {
    let cleanInput = input.trim();
    cleanInput = cleanInput.replaceAll(/[^a-zA-Z ]/g, "").trim();
    let words = cleanInput.split(" ");

        
    let result = cleanInput;

    for (let word of words) {
        if (word.length < result.length) {
            result = word;
        }
    }
    return result;
}

module.exports = { shortestWord };

