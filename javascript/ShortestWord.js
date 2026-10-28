
const shortestWord = (input) => {
    let cleanInput = input.trim();
    let words = cleanInput.split(" ");

        
    let result = words[0];

    for (let word of words) {
        if (word.length < result.length) {
            result = word;
        }
    }
    return result;
}

module.exports = { shortestWord };