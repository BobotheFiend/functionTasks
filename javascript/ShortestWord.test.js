
const {shortestWord} = require('./ShortestWord.js');

test('returns the shortest word from a string', () => {
    expect(shortestWord("The quick brown fox jumps over the lazy dog")).toBe("The");
    expect(shortestWord("Hello world")).toBe("Hello");
    expect(shortestWord("A journey of a thousand miles begins with a single step")).toBe("A");
    expect(shortestWord("To be or not to be, that is the question")).toBe("To");
    expect(shortestWord("Alls well that ends well")).toBe("Alls");
});

